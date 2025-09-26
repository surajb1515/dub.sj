import { v } from 'convex/values'
import { mutation, query } from "./_generated/server"



// createShortLink
// deleteLink
// getLinks
// increaseVisitCnt
// getLink
// getAllLink



export const createShortLink = mutation({
  args: {
    destinationUrl: v.string(),
    shortUrl: v.string(),
    createdById: v.id("users")
  },
  handler: async (ctx, args) => {
    try {
      // first check that shortUrl already exits or not
      // if it exists then we can not create it

      const linkSearched = await ctx.db
        .query("links")
        .filter(q => q.eq(
          q.field("shortUrl"),
          args.shortUrl
        ))
        .first()

      if (linkSearched) {
        // throw new Error("shortUrl already existed")
        return null;
      }

      const linkId = await ctx.db.insert('links', {
        destinationUrl: args.destinationUrl,
        shortUrl: args.shortUrl,
        noOfVisits: 0,
        createdAt: Date.now(),
        createdById: args.createdById
      })
      return linkId;

    } catch (error) {
      throw new Error("Sorry, we are not able to create short Url")
    }
  }
})






export const deleteLink = mutation({
  args: {
    shortUrl: v.string()
  },
  handler: async (ctx, args) => {
    try {

      // finding the link with shortUrl as args.shortUrl
      const linkFound = await ctx.db
        .query('links')
        .filter(q => q.eq(
          q.field("shortUrl"),
          args.shortUrl
        ))
        .first()

      if (linkFound) await ctx.db.delete(linkFound?._id)

    } catch (error) {
      throw new Error("Sorry, errow while deleting the link, in deleteLink function")
    }
  }
})





export const increaseVisitCnt = mutation({
  args: {
    shortUrl: v.string(),
    id: v.id("links")
  },
  handler: async (ctx, args) => {
    try {

      // finding the link 
      const linkSearched = await ctx.db
        .query("links")
        .filter(q => q.eq(q.field("shortUrl"), args.shortUrl))
        .first()

      if (!linkSearched) return null

      // const linkId = await ctx.db.insert("links", {
      //   createdAt: linkSearched.createdAt,
      //   createdById: linkSearched.createdById,
      //   destinationUrl: linkSearched.destinationUrl,
      //   noOfVisits: linkSearched.noOfVisits + 1,
      //   shortUrl: linkSearched.shortUrl
      // })

      // return linkId

      const linkUpdateId = await ctx.db.patch(args.id, {
        noOfVisits: linkSearched.noOfVisits + 1
      })

    } catch (error: any) {
      console.log('ERRRRRRRRR', error)
      throw new Error(error)
    }
  }
})







export const getLink = mutation({
  args: {
    shortUrl: v.string()
  },
  handler: async (ctx, args) => {
    try {
      const linkSearched = await ctx.db
        .query("links")
        .filter(q => q.eq(
          q.field("shortUrl"),
          args.shortUrl
        ))
        .first()

      return linkSearched

    } catch (error) {
      throw new Error("Sorry, getLink function showing error")
    }
  }
})



export const getAllLink = query({
  args: {
    userId: v.string()
  },
  handler: async (ctx, args) => {
    try {

      // finding the user with userId
      const user = await ctx.db
        .query("users")
        .filter(q => q.eq(
          q.field("userId"),
          args.userId
        ))
        .first()

      if (!user) return [];

      const allLinks = await ctx.db
        .query("links")
        .filter(q => q.eq(
          q.field("createdById"),
          user._id
        ))
        .order('desc')
        .collect()

      return allLinks;

    } catch (error) {
      throw new Error("Sorry, getLink function showing error")
    }
  }
})


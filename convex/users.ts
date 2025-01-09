import { v } from "convex/values";
import { mutation, query } from "./_generated/server";





export const createUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    createdAt: v.number(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const newUserId = await ctx.db.insert('users', {
        createdAt: args.createdAt,
        email: args.email,
        userId: args.userId,
        name: args.name
      })

      return newUserId;
    } catch (error) {
      throw new Error("Sorry, User did not insert successfully")
    }
  }
})



export const getUser = query({
  args: {
    userId: v.string()
  },
  handler: async (ctx, args) => {
    try {
      const userInfo = await ctx.db
        .query("users")
        .filter(q => q.eq(
          q.field("userId"),
          args.userId
        ))
        .first()

      return userInfo

    } catch (error) {
      throw new Error("getUser user did not work")
    }
  }
}) 
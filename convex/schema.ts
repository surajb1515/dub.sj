import { defineSchema, defineTable } from 'convex/server';
import { Infer, v } from "convex/values";


export default defineSchema({
  users: defineTable({
    userId: v.string(),
    email: v.string(),
    createdAt: v.number(),
    name: v.optional(v.string())
  })
    .index("by_userId", ["userId"])
    .index("by_name", ["name"])
    .index("by_email", ["email"]),


  links: defineTable({
    createdById: v.id("users"),
    destinationUrl: v.string(),
    shortUrl: v.string(),
    noOfVisits: v.number(),
    createdAt: v.number(),

  })
    .index("by_createdById", ["createdById"])
    .index("by_destinationUrl", ['destinationUrl'])
    .index("by_shortUrl", ['shortUrl'])
    .index("by_createdAt", ["createdAt"])
})
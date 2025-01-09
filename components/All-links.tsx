'use client'
import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery } from "convex/react";
import SinglePageComponent from "./Single-link";






export default function AllLinksComponent({
  preLoadedAllLinks
}: {
  preLoadedAllLinks: Preloaded<typeof api.links.getAllLink>
}) {


  const allLinks = usePreloadedQuery(preLoadedAllLinks)


  return (
    <div className='flex flex-col justify-center space-y-2 my-8'>
      {allLinks?.map((link) => (
        <SinglePageComponent key={link._id} link={link} />
      ))}
    </div>
  );
}

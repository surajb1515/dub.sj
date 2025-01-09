import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { fetchMutation } from "convex/nextjs";
import { redirect } from 'next/navigation';



export default async function UrlPage({
  params
}: {
  params: Promise<{
    url: string;
  }>
}) {




  const url = (await params).url
  const baseUrl = process.env.NEXT_PUBLIC_SURAJ_URL as string
  const fullUrl = baseUrl + url


  const linkInfo = await fetchMutation(api.links.getLink, {
    shortUrl: fullUrl
  })


  if (linkInfo?.destinationUrl) {
    // increase the visit count 
    await fetchMutation(api.links.increaseVisitCnt, {
      shortUrl: fullUrl,
      id: linkInfo._id as Id<"links">
    })
    console.log('after increaseing................................')

    redirect(linkInfo?.destinationUrl)
  }

  return (
    <div className='my-32'>
      destinationUrl not found
    </div>
  );
}

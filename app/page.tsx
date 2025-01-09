import AllLinksComponent from "@/components/All-links";
import MyForm from "@/components/MyForm";
import Navbar from "@/components/Navbar";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { SignInButton, SignedOut } from '@clerk/nextjs';
import { auth } from "@clerk/nextjs/server";
import { preloadQuery } from "convex/nextjs";
import { Suspense } from "react";





export default async function Home() {

  const { userId } = await auth()

  const preLoadedAllLinks = await preloadQuery(api.links.getAllLink, {
    userId: userId || '',
  })



  if (!userId) {
    return (
      <>
        <Navbar />
        <div className="mt-40 mx-auto px-8">
          <div className="space-y-6">
            <h1 className="text-2xl py-2 font-bold tracking-tighter text-center text-transparent sm:text-5xl md:text-6xl xl:text-7xl whitespace-nowrap bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text dark:bg-gradient-to-r dark:from-gray-400 via dark:bg-neutral-400">
              Hey, Welcome to Dubsj
            </h1>
            <p className="mx-auto text-sm h-fit text-md w-fit text-muted-foreground text-center md:text-xl">
              Dubsj is the open-source application for managing your favorite links.
            </p>
            <div className="flex justify-center pt-2">
              <SignedOut>
                <Button asChild>
                  <SignInButton />
                </Button>
              </SignedOut>
            </div>
          </div>
        </div>
      </>
    );
  }


  return (
    <>
      <Navbar />

      <div
        // style={{
        //   backgroundImage: `radial-gradient(circle, #657081 0.5px, transparent 1px)`,
        //   backgroundSize: '20px 20px'
        // }}
        // className="flex flex-col justify-center max-h-screen mt-40 mx-auto bg-orange-300">
        className=" mt-24 mx-auto">
        {/* <div
        className=" dark:bg-neutral-950 max-w-4xl flex mx-auto"
        aria-hidden="true"
      /> */}
        <div className=" relativez-10 mx-auto space-y-3 max-w-4xl px-8">
          <h1 className="text-2xl py-2 font-bold tracking-tighter text-center text-transparent sm:text-5xl md:text-6xl xl:text-7xl whitespace-nowrap bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text dark:bg-gradient-to-r dark:from-gray-400 via dark:bg-neutral-400">
            Hey, Welcome to Dubsj
          </h1>
          <p className=" mx-auto text-sm h-fit text-md w-fit text-muted-foreground text-center md:text-xl">
            Dubsj is the open-source application for managing your favorite links.
          </p>
          <div className="pt-3">
            <MyForm />

            <Suspense fallback={<Spinner />}>
              <AllLinksComponent preLoadedAllLinks={preLoadedAllLinks} />
            </Suspense>
          </div>
        </div>
      </div >

    </>
  )
}


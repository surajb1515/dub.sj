import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { fetchMutation } from "convex/nextjs";
import { Archive, Sparkles, Trash2 } from 'lucide-react';
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { toast } from "sonner";
import CopyButton from "./Copy-Button";
import { Card, CardContent } from "./ui/card";




export default function SinglePageComponent({
  link
}: {
  link: {
    createdAt: number;
    createdById: Id<"users">;
    destinationUrl: string;
    shortUrl: string;
    noOfVisits: number;
  }
}) {

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const isXsScreen = useMediaQuery({ maxWidth: 639 })



  const handleCardClick = () => {
    if (isXsScreen) {
      setIsDialogOpen(true)
    }
  }


  function handleCopy(shortUrl: string) {
    // write a function to copy shortUrl string to clipboard
  }

  async function handleDelete() {
    await fetchMutation(api.links.deleteLink, {
      shortUrl: link.shortUrl
    })

    toast.success("link deleted successfully")
  }



  return (


    <>
      <Card
        className="w-[99%] bg-white mx-auto cursor-pointer sm:cursor-default"
        onClick={handleCardClick}
      >
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">

            <div className="flex-grow min-w-0 space-y-1"> {/* Added min-w-0 to prevent text overflow */}
              <div className="flex items-center space-x-2">
                <h4 className="text-xs sm:text-sm font-medium text-neutral-900 truncate">
                  {link.shortUrl.replace(/^(https?:\/\/)?(www\.)?/, "")}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-500 truncate">
                {link.destinationUrl.replace(/^(https?:\/\/)?(www\.)?/, "")}
              </p>
            </div>
            <div className="hidden sm:flex items-center space-x-2 shrink-0"> {/* Added shrink-0 to prevent shrinking */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDelete}
                className="flex h-8 w-8 hover:bg-red-100 hover:text-red-600 transition-colors z-10"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-1.5 rounded-lg bg-neutral-100 px-2 py-1">
                <Sparkles className="h-3 w-3 text-neutral-600" />
                <span className="text-xs text-neutral-600">{link.noOfVisits} clicks</span>
              </div>
              <CopyButton stringToCopy={link.shortUrl} />
            </div>
          </div>
        </CardContent>
      </Card>


      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
        <DialogContent className="rounded-xl p-8">
          <DialogHeader>
            <DialogTitle>Link Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-5 mt-4">
            <div className="flex justify-between">
              <div>
                <h4 className="text-sm font-medium">Short Link</h4>
                <p className="text-sm text-neutral-500 break-all">{link.shortUrl}</p>
              </div>
              <CopyButton stringToCopy={link.shortUrl} />
            </div>
            <div className="flex justify-between">
              <div>
                <h4 className="text-sm font-medium">Destination</h4>
                <p className="text-sm text-neutral-500 break-all">{link.destinationUrl}</p>
              </div>
              <CopyButton stringToCopy={link.destinationUrl} />
            </div>
            <div>
              <h4 className="text-sm font-medium">Total Clicks</h4>
              <p className="text-sm text-neutral-500">{link.noOfVisits}</p>
            </div>
            <div className="flex justify-end">
              <Button variant={'destructive'} onClick={handleDelete}>
                Delete Link
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>



    </>

  );
}

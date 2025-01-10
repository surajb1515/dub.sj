"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { useAuth } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "convex/react"
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import * as z from "zod"




const baseUrl = process.env.NEXT_PUBLIC_SURAJ_URL as string;

const formSchema = z.object({
  destinationUrl: z.string().url().nonempty("Destination URL must not be empty."),
  preferedUrl: z
    .string()
    .url()
    .nonempty("Preferred URL must not be empty.")
    .refine((val) => val.startsWith(baseUrl), {
      message: `Preferred URL must start with "${baseUrl}".`,
    })
    .refine((val) => val !== baseUrl, {
      message: `Preferred URL cannot be exactly equal to "${baseUrl}".`,
    }),
});


export default function MyForm() {


  const { userId } = useAuth();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinationUrl: '',
      preferedUrl: 'https://dubsj.vercel.app/short'
    }
  })


  // CONVEX BAAS FUNCTIONS
  const userInfo = useQuery(api.users.getUser, {
    userId: userId || ''
  })
  const createShortLink = useMutation(api.links.createShortLink)




  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('values------------>', values)


    const linkId = await createShortLink({
      destinationUrl: values.destinationUrl,
      shortUrl: values.preferedUrl,
      createdById: userInfo?._id as Id<"users">
    })


    if (linkId == null) {
      toast.error('Short Url already existed')
    }

    form.reset()

  }



  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 text-start mt-2">
        <FormField
          control={form.control}
          name="destinationUrl"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormLabel>Destination Url</FormLabel>
              <FormControl>
                <Input placeholder="https://destination/url.com" className="bg-background" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferedUrl"
          render={({ field }) => (
            <FormItem className="space-y-0">
              <FormLabel>Prefered Short Url</FormLabel>
              <FormControl>
                <Input placeholder="https://dubsj.vercel.app/short-word" className="bg-background" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className=" bg-black hover:bg-black/90">
          Generate Url
        </Button>
      </form>
    </Form>
  )
}

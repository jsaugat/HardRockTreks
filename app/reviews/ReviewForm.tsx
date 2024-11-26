"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { MapPin, Star, User } from 'lucide-react'
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ReviewSchema } from "@/lib/zod/review"
import { useTransition } from "react"
import { useToast } from "@/components/hooks/use-toast"

export default function ReviewForm() {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof ReviewSchema>>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      name: "",
      email: "",
      destination: "",
      review: "",
      serviceRating: undefined,
    },
  })

  async function onSubmit(values: z.infer<typeof ReviewSchema>) {
    startTransition(async () => {
      try {
        const response = await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        })

        if (!response.ok) throw new Error('Failed to submit review')

        toast({
          title: "Review Submitted",
          description: "Your review will be visible after moderation.",
          variant: "default",
        })

        form.reset()
      } catch (error) {
        toast({
          title: "Submission Failed",
          description: "Please try submitting your review again.",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Write a Review</CardTitle>
        <CardDescription>
          Share your experience to help others plan their adventure
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input className="pl-9" placeholder="Your name" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        className="pl-9"
                        placeholder="Where did you visit?"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceRating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Rating</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(Number(value))} // Convert back to a number when the value changes
                      defaultValue={field.value?.toString()} // Ensure defaultValue is a string
                      className="flex space-x-4"
                    >
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <FormItem key={rating}>
                          <FormControl>
                            <RadioGroupItem
                              value={rating.toString()}
                              id={`service-rating-${rating}`}
                              className="peer sr-only"
                            />
                          </FormControl>
                          <FormLabel
                            htmlFor={`service-rating-${rating}`}
                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
                          >
                            <Star className="h-6 w-6" />
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Review</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your experience..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full rounded"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Submit Review"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}


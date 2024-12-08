// components/ReviewList.tsx
"use client"

import { useQuery } from "@tanstack/react-query"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Frown, LoaderCircle, Star, UserRound } from "lucide-react"

// Interface definition for a Review object
interface Review {
  id: string
  name: string
  destination: string
  createdAt: string
  serviceRating: number
  review: string
  avatar: string
}

// Function to fetch reviews from the API
async function fetchReviews(): Promise<Review[]> {
  const response = await fetch('/api/reviews')
  if (!response.ok) {
    throw new Error('Failed to fetch reviews')
  }
  return response.json()
}

// Function to calculate the average rating from a list of reviews
function calculateAverageRating(reviews: Review[]): string {
  const totalRating = reviews.reduce((sum, review) => sum + review.serviceRating, 0)
  return (totalRating / reviews.length).toFixed(1)
}

export default function ReviewList() {
  const { data: reviews, isLoading, error } = useQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
    refetchInterval: 1000,
  })
  if (isLoading) {
    return <div className="mx-auto text-center flex gap-2 justify-center items-center">
      <LoaderCircle className="animate-spin w-5 h-5" />
      Loading reviews...
    </div>
  }
  if (error) {
    return <div className="text-center text-red-500">Error loading reviews.</div>
  }
  if (!reviews?.length) {
    return (
      <div className="space-y-6">
        {/* Review List Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          {/* Average and total reviews */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold"></span>
            <RatingDisplay rating={0} icon={Star} />
            <span className="text-sm text-muted-foreground">({reviews?.length} reviews)</span>
          </div>
        </div>
        {/* No Reviews Message */}
        <div className="flex items-center justify-center gap-2 border rounded bg-muted text-muted-foreground py-3">
          <Frown className="h-5 w-5" />
          No reviews yet.
        </div>
      </div>)
  }

  const averageRating = calculateAverageRating(reviews)
  return (
    <div className="space-y-6">
      {/* Review List Header */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        {/* Average and total reviews */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{averageRating}</span>
          <RatingDisplay rating={Math.round(Number(averageRating))} icon={Star} />
          <span className="text-sm text-muted-foreground">({reviews.length} reviews)</span>
        </div>
      </div>
      {/* Review List */}
      {reviews.map((review, i) => (
        <div key={review.id} className="">
          <Card className="shadow-md rounded-xl">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar className="hidden md:block">
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback>
                    <UserRound className="h-6 w-6 text-muted-foreground" />
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-4 w-full">
                  <div className="grid gap-1">
                    <div className="w-full flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          {review.destination}
                        </div>
                      </div>
                      <time className="text-sm text-muted-foreground">
                        {new Date(review.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Rating:</span>
                      <RatingDisplay rating={review.serviceRating} icon={Star} />
                    </div>
                    <p className="text-muted-foreground">{review.review}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          {i < reviews.length - 1 && <Separator className="hidden md:block my-6" />}
        </div>
      ))}
    </div>
  )

  // Component to display rating using a custom icon
  function RatingDisplay({
    rating,
    icon: Icon,
  }: {
    rating: number
    icon: typeof Star
  }) {
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted-foreground"
              }`}
          />
        ))}
      </div>
    )
  }
}
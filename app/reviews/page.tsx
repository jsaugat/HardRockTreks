import { Metadata } from "next"
import ReviewForm from "./ReviewForm"
import ReviewList from "./ReviewList"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Reviews | Hard Rock Treks & Expedition",
  description: "Share your experience with Hard Rock Treks & Expedition. Read reviews from our valued clients about their trekking and tour experiences.",
}

export default function ReviewsPage() {
  return (
    <main className="my-navbarOffset pb-5 sm:pb-7 lg:pb-9 min-h-screen bg-white rounded-xl mx-auto">
      <div className="text-center mx-auto my-10 px-4">
        <h1 className="mx-auto text-3xl sm:text-4xl font-semibold font-familjenGrotesk bg-gradient-to-br from-primary to-purple-500 w-fit bg-clip-text text-transparent">
          Client Reviews
        </h1>
        <p className="text-sm md:text-lg text-muted-foreground">
          Share your experience with Hard Rock Treks & Expedition.<br className="hidden md:block" /> Read reviews from our valued clients about their trekking and tour experiences.
        </p>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ReviewList />
          </div>
          <div className="lg:col-span-1">
            {/* <div className="sticky top-8"> */}
            <div className="">
              <ReviewForm />
            </div>
          </div>
        </div>
      </main>
    </main>
  )
}


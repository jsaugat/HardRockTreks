import { Send } from 'lucide-react'
import BookingForm from './_components/BookingForm'

export default function BookingPage() {
  return (
    <div className="min-h-screen px-0 sm:px-4 md:px-6 lg:px-8 py-navbarOffset">
      <div className="max-w-3xl mx-auto">
        <h1 className="mx-auto mb-5 text-3xl sm:text-4xl font-semibold font-familjenGrotesk bg-gradient-to-br from-primary to-purple-500 w-fit bg-clip-text text-transparent flex items-center justify-center gap-2">
          <Send className='w-8 h-8 text-indigo-500' />
          Book a Trip
        </h1>
        <BookingForm />
      </div>
    </div>
  )
}


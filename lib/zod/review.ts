import { z } from 'zod'

export const ReviewSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  destination: z.string().min(2, 'Please enter the destination you visited'),
  serviceRating: z.number().min(1).max(5),
  review: z.string().min(10, 'Review must be at least 10 characters')
})
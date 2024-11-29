import { z } from 'zod'

export const destinationSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  image: z.string(),
  packagesCount: z.number(),
  description: z.string()
})

export const activitySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  slug: z.string(),
  image: z.string(),
  packagesCount: z.number(),
  destinationId: z.string()
})

export const packageSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  startingPrice: z.number(),
  duration: z.number(),
  difficulty: z.string(),
  activityId: z.string().nullable(),
  subactivityId: z.string().nullable(),
  highlights: z.array(z.string()),
  includedItems: z.array(z.string()),
  excludedItems: z.array(z.string())
})

export type Destination = z.infer<typeof destinationSchema>
export type Activity = z.infer<typeof activitySchema>
export type Package = z.infer<typeof packageSchema>


import { z } from 'zod'

export const ProjectSchema = z.object({
  id: z.number(),
  name: z.string(),
  country: z.string(),
  image: z.string(),
  price_per_ton: z.number(),
  offered_volume_in_tons: z.number(),
  distribution_weight: z.number(),
  supplier_name: z.string(),
  earliest_delivery: z.string(),
  sdgs: z.array(z.number()),
  description: z.string(),
})

export type Project = z.infer<typeof ProjectSchema>

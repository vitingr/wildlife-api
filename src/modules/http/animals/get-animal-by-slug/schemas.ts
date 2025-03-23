import z from 'zod'

export const getAnimalBySlugParamsSchema = z.object({
  slug: z.string()
})

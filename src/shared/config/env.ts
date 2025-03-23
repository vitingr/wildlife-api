import 'dotenv/config'
import { z } from 'zod'

const schema = z.object({
  PORT: z.coerce.number().default(8000),
  API_BASE_URL: z.string(),
  API_KEY: z.string()
})

const parsed = schema.safeParse(process.env)

if (!parsed.success) {
  console.error('❌ Invalid Environment Variables', parsed.error.format())

  throw new Error('Invalid Environment Variables.')
}

export const env = {
  ...parsed.data
}

//validação e o parse das variaveis ambiente || garantir que a app não execute se não tiver as variaveis ambientes que são obrigatorias
import { z } from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().default(3333), //converte a string em numero
})

export const env = envSchema.parse(process.env)
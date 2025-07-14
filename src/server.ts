// parei no tempo 20:21

import { fastify } from 'fastify';
import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'
import { env } from './env.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: 'http://localhost:5173' //caso o frontend não consiga acessar, mudar para '*'
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
    return 'OK'
})

//porta que o server vai rodar || precisa converter para numero pq é uma String
app.listen({ port: env.PORT }).then(() => {
    console.log(`Port: ${process.env.PORT}`)
    console.log('HTTP server running!')
})
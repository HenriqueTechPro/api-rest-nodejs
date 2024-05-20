import fastify from 'fastify'

import { TransactionsRoutes } from './routes/transactions'
import { fastifyCookie } from '@fastify/cookie'

export const app = fastify()

app.register(fastifyCookie)

app.register(TransactionsRoutes, {
  prefix: 'transactions',
})

import express from 'express'
import setupMiddleWares from './middlewares'
import setupRoutes from './routes'
import setupSwagger from './config-swagger'

const app = express()
setupSwagger(app)
setupMiddleWares(app)
setupRoutes(app)
export default app

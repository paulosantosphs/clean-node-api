import { badRequest, serverError, unauthorized, notFound, forbidden } from './components'
import { loginPath, surveyPath, signUpPath } from './paths'
import { accountSchema, errorSchema, loginParamsSchema, surveyAnswerSchema, surveysSchema, surveySchema, apiKeyAuthSchema, signUpParamsSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'Node APIs para enquetes',
    version: '1.0.0'
  },
  license: {
    name: 'ISC',
    url: ''
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema

  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden
  }
}

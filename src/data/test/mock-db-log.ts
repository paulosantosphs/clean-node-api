import { LogErrorRepository } from '@/data/protocols/db/log/log-error-repository'

export const mockLogErrorReposiroty = (): LogErrorRepository => {
  class LogErrorRepositoryStub implements LogErrorRepository {
    async logError (stack: string): Promise<void> {
      return await Promise.resolve()
    }
  }
  return new LogErrorRepositoryStub()
}

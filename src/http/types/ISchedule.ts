import { JobResponse } from './IJob'

export interface IScheduleResponse {
  uuid: string
  jobs?: JobResponse[]
  createdAt: Date
}

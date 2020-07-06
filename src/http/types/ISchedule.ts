import { IJobResponse } from './IJob'

export interface IScheduleResponse {
  uuid: string
  jobs?: IJobResponse[]
  createdAt: Date
}

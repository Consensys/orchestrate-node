import { IResponse } from '../../types'

import { Consumer } from './Consumer'

/**
 * Class representing a response message from Orchestrate
 */
export class ResponseMessage {
  constructor(private readonly consumer: Consumer, private readonly message: IResponse) {}

  /**
   * Commits the message offset
   */
  public async commit() {
    await this.consumer.commit(this.message)
  }

  /**
   * Gets the message
   */
  public content() {
    return this.message
  }
}

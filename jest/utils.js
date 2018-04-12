import * as factories from '../factories'

export const resetFactorySequences = () => {
  Object.values(factories).forEach((Factory) => Factory.sequences = {})
}

export const getSnapshotRequest = (response) => {
  return {
    method: response.config.method,
    url: response.config.url,
    data: response.config.data ? JSON.parse(response.config.data) : null,
  }
}

export const getSnapshotRequest = (response) => {
  return {
    method: response.config.method,
    url: response.config.url,
    data: response.config.data ? JSON.parse(response.config.data) : null,
  }
}

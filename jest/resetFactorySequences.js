import * as factories from '../factories'

export default () => {
  Object.values(factories).forEach((Factory) => Factory.sequences = {})
}

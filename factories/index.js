import {Factory} from 'rosie'

import {UserFactory, UserListFactory} from './users'

export const StoreFactory = new Factory()
  .option('numUsers', 2)
  .attr('users', ['numUsers'], count => UserListFactory(count))

export {UserFactory, UserListFactory}

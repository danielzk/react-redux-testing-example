import {Factory} from 'rosie'
import {OrderedMap} from 'immutable'

export const UserFactory = new Factory()
  .sequence('id', sequence => sequence)
  .sequence('username', sequence => 'username' + sequence)
  .attr('firstName', 'Mark')
  .attr('lastName', 'Zucaritas')

export const UserListFactory = (count) => {
  const users = UserFactory.buildList(count)
  return OrderedMap(users.map(item => [item.id, item]))
}

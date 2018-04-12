import 'babel-polyfill'
import Adapter from 'enzyme-adapter-react-16'
import {configure} from 'enzyme'

import {resetFactorySequences} from './utils'

beforeEach(() => resetFactorySequences())

configure({adapter: new Adapter()})

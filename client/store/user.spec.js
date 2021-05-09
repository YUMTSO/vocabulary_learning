/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {me, logout} from './user'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter
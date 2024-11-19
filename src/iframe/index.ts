import {Engine} from './engine.js'

const engine = await Engine.new()
engine.start()

const noDevvit = location.port === '1234'

console.log('chipped v0.0.0')

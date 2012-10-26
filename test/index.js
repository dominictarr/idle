

var emitter = new (require('events').EventEmitter)
var idle    = require('..')
var assert  = require('assert')

var passed = false
function onIdle () {
  console.log('IDLE')
  emitter.removeListener('tick', onIdle)
  passed = true
}

idle(emitter, 'tick', 200, onIdle)

var i = 0
var timer = setInterval(function () {
  console.log('tick')
  emitter.emit('tick')
  if(i++>5)
    clearInterval(timer)
}, 100)

setTimeout(function () {
  assert(passed)  
}, 1e3)

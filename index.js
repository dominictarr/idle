module.exports = function (emitter, event, time, listener) {
  if(!listener)
    time = 1e3, listener = time

  var timer

  function onEvent () {
    clearTimeout(timer)
    timer = setTimeout(function () {
      listener()
    }, time)
  }

  onEvent.listener = listener
  emitter.on(event, onEvent)
  onEvent()
}

# idle

Trigger a listener that fires only when a certain event 
_has not_ occured within a time window.

## Example

``` js
var idle = require ('idle')

idle(emitter, 'okay',  10*1000, function onIdle () {
  //this function will be called when 'okay'
  //has not been emitted within 10 seconds.
  console.log('NOT OKAY')

  //you can still clear the timeout in the normal way
  emitter.removeListener('okay', onIdle)
})

```

## License

MIT

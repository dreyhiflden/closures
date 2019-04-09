function makeBuffer() {
  let bufferValue = '';

  function buffering(value) {
    if (arguments.length === 0) {
      return bufferValue
    } else {
      return bufferValue += value;
    }
  }

  buffering.clear = function() {
    return bufferValue = '';
  };

  return buffering;
}

let buffer2 = makeBuffer();

function makeBuffer() {
  let bufferValue = '';

  function buffering(value) {
    if (arguments.length === 0) {
      return bufferValue
    } else {
      return bufferValue += value;
    }
  }

  return buffering;
}

let buffer = makeBuffer();

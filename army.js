function makeArmy() {

  let shooters = [];

  for (let i = 0; i < 10; i++) {
    function shooter() {
      return alert(i);
    }
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

function outest() {
  let a = 10;
  return function inner() {
    console.log(a);
  };
}

outest()();

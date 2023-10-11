const userName: string | number = 'andrespro00';

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2);

class Person {

  constructor(public age: number, public lastName: string) {}
}

const andres = new Person(24, 'Penipe');

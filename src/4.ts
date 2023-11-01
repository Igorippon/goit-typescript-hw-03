class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  public key: Key;
  public tenants: Person[] = [];

  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }

  abstract OpenDoor(obj: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }
  OpenDoor(obj: Key): void {
    if (obj.getSignature === this.key.getSignature) {
      this.door = true;
      console.log("Open");
    } else {
      console.log("Closed");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};

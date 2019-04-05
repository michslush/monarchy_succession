class Person {
  constructor(nameStr, aliveBool, genderBool) {
    this.name = nameStr;
    this.isAlive = aliveBool;
    this.isLady = genderBool;
    this.children = [];
  }
}

class Monarchy {
  constructor(ruler) {
    this.ruler = ruler;
    this.people = [this.ruler];
    this.succession = [];
  }

  findPerson(param) {
    return this.people.find(person => person.name === param);
  }

  birth(childName, childIsLady, parentName) {
    const child = new Person(childName, true, childIsLady);
    const parent = this.findPerson(parentName);

    parent.children.push(child);
    this.people.push(child);
  }

  death(deadName) {
    this.findPerson(deadName).isAlive = false;
  }

  findAllLivingDaughters(parent) {
    return parent.children.filter(child => child.isAlive && child.isLady);
  }

  findEldestLivingDaughter(parent) {
    return this.findAllLivingDaughters(parent)[0];
  }

  findNextInLine(parent) {
    const daughters = this.findAllLivingDaughters(parent);

    for (let idx = 0; idx < daughters.length; idx++) {
      const cur = daughters[idx];
      if (!this.succession.includes(cur.name)) {
        return cur;
      }
    }

    return false;
  }

  findMother(child) {
    for (let i = 0; i < this.people.length; i++) {
      const person = this.people[i];
      if (person.children.includes(child) && person.isLady) {
        return person;
      }
    }
  }

  addToSuccession(person) {
    this.succession.push(person.name);
  }

  calculateSuccession(current = this.ruler) {
    this.addToSuccession(current);

    let eldest = this.findEldestLivingDaughter(current);

    if (eldest) {
      return this.calculateSuccession(eldest);
    }

    let parent = this.findMother(current);

    while (parent) {
      eldest = this.findNextInLine(parent);
      if (eldest) {
        return this.calculateSuccession(eldest);
      } else {
        parent = this.findMother(parent);
      }
    }

    return `Lady Mormont's line of succession: ${this.succession.join(' => ')}`;
  }
}

/** I commented this stuff out, but this is how I tested */

/**
const mormontMonarchy = () => {
  const lyanna = new Person('lyanna', true, true);
  const mormont = new Monarchy(lyanna);

  mormont.birth('michaela', true, 'lyanna');
  mormont.birth('kasey', true, 'lyanna');
  mormont.birth('kane', false, 'michaela');
  mormont.birth('sansa', true, 'kasey');
  mormont.birth('jon', false, 'lyanna');
  mormont.birth('meghan', true, 'jon');
  mormont.birth('julia', true, 'lyanna');
  mormont.birth('aria', true, 'kasey');
  mormont.birth('deloris', true, 'michaela');
  mormont.birth('joanna', true, 'deloris');
  mormont.birth('delora marie', true, 'deloris');
  mormont.birth('patricia', true, 'sansa');
  mormont.birth('brianne', true, 'michaela');
  //mormont.death('michaela');
  return mormont.calculateSuccession(); // michaela, deloris, joanna, delora marie, brianne, kasey, sansa, patricia, aria, julia
};
console.log(mormontMonarchy());
*/

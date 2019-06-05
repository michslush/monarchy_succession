Hark! A raven from The North!

Lyanna Mormont, Lady of House Mormont wishes to determine the Order of Succession for her Royal House. Weary of those brutish rogues in the south, who prefer violence to settle issues of the throne, Lady Mormont wishes to seek the council of the Free Folks of Fullstack, to develop an algorithm for such.

The Royal Order of Succession for House Mormont is determined by these rules:

- Lyanna is the current Ruler
- Only a Lady may rule House Mormont, no Lords
- Her eldest living daughter is next, continuing down the bloodline of eldest living daughters
- If that bloodline should end, or the eldest daughter is dead, continue with Lyanna's next-eldest living daughter (and her eldest-living bloodline)
- No daughters of sons may be eligible for the throne

Given a Person class:

class Person {
    constructor(nameStr, aliveBool, genderBool) {
        this.name = nameStr,
        this.isAlive = aliveBool,
        this.isLady = genderBool,
        this.children = []
    }

}

const lyanna = new Person('lyanna', true, true)

Construct a Monarchy class with the following methods. You may add any necessary helper methods/properties as you see fit!

class Monarchy {
    constructor() {}

    birth(name, Person) {} // finds person w/ given name value and adds a new Person as a child

    death(name){} // finds a person w/ given name value and 'kills' them

    printSuccession() {} //Prints the order of Succession 

}

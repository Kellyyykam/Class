class Behavior {
    constructor(type) {
        this.type = type;
    }
    perform(monster) {
        console.log(`${monster.name} is ${this.type}ing`);
    }
}

class Fly extends Behavior {
    constructor() {
        super("fly");
    }
}

class Swim extends Behavior {
    constructor() {
        super("swim");
    }
}

class Roll extends Behavior {
    constructor() {
        super("roll");
    }
}

class MonsterBehaviors {
    constructor(behaviors) {
        this.behaviors = behaviors;
    }
    list() {
        return Object.keys(this.behaviors);
    }
    perform(monster, behavior) {
        this.behaviors[behavior].perform(monster);
    }
    addBehavior(behavior) {
        Object.assign(this.behaviors, behavior);
    }
}

class Monster {
    constructor (attack, defense, hp, name){
        this.#attack = attack;
        this.#defense = defense;
        this.#hp = hp;
        this.#name = name;
    }

    performRandom() {
        const behavior = this.behaviors.list()[Math.floor(Math.random() * this.behaviors.list().length)];
        this.behaviors.perform(this, behavior);
    }

    evovle(behavior) {
        this.behaviors.addBehavior(behavior);
    }
    #attack = 0;
    #defense = 0;
    #hp = 0;
    #name = "";    

    get property(){
        return {
            attack : this.#attack,
            defense : this.#defense,
            hp : this.#hp,
            name : this.#name,
        }
    }
}

let fireMonster = new Monster(100, 20, 500, "Fire Monster");
console.log(fireMonster.property);

class Boss extends Monster{
    #specialAttack = 0;
    constructor(attack, defense, hp, name, specialAttack){
        super(attack, defense, hp, name)
        this.#specialAttack = specialAttack;
    }
    get property(){
        return Object.assign(super.property, {specialAttack: this.#specialAttack});
    }
}

let boss = new Boss(100, 20, 500, "Fire Monster", 3000);
console.log(boss.property);

class Monster {
    name = "";

    constructor(name) {
        this.name = name;
    }    
}

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
    constructor(name, behaviors) {
        this.name = name;
        this.behaviors = behaviors;
    }

    performRandom() {
        const behavior = this.behaviors.list()[Math.floor(Math.random() * this.behaviors.list().length)];
        this.behaviors.perform(this, behavior);
    }

    evovle(behavior) {
        this.behaviors.addBehavior(behavior);
    }
}

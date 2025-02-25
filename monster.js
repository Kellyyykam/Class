class Monster {
    #attack = 0;
    #defense = 0;
    #hp = 0;
    #name = "";

    constructor (attack, defense, hp, name){
        this.#attack = attack;
        this.#defense = defense;
        this.#hp = hp;
        this.#name = name;
    }

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
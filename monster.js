let goblin = new Creature({
    name: "Goblin",
})

let hobGoblin = new Creature({
    name: "Hob Goblin",
    health: 200,
    chanceToMiss: .2,
    baseDamage: 40,
})

let goblinLeader = new Creature({
    name: "Greknack Clinker",
    health: 500,
    chanceToCrit: .2,
    chanceToMiss: .2,
    baseDamage: 25,
})

function goblinKing(options) {
    Creature.call(this, options);
}
goblinKing.prototype = Object.create(Creature.prototype);
goblinKing.prototype.constructor = goblinKing;
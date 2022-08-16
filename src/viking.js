// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }

    attack () {
        return this.strength
    }

    receiveDamage (damage) {
       this.health -= damage
    }
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength) 
        this.name = name 
    }

    receiveDamage (damage) {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}


// Saxon
class Saxon extends Soldier {
        
    receiveDamage(damage) {     
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } 
        if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}


// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        // arredonda e adiciona um index aleatorio
       let idxRandomViking = Math.floor(Math.random() * this.vikingArmy.length)
       let idxRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

       let viking = this.vikingArmy[idxRandomViking]
       let saxon = this.saxonArmy[idxRandomSaxon]

       let result = saxon.receiveDamage(viking.attack())

       if (saxon.health <= 0) {
        //saxon died - remove it from the array
        this.saxonArmy.splice(idxRandomSaxon, 1)
       }
       return result
    } 

    saxonAttack() {
        let idxRandomViking = Math.floor(Math.random() * this.vikingArmy.length)
        let idxRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

        let viking = this.vikingArmy[idxRandomViking]
        let saxon = this.saxonArmy[idxRandomSaxon]

        let result = viking.receiveDamage(saxon.attack())

        if (viking.health <= 0) {
            this.vikingArmy.splice(idxRandomViking, 1)
        }
        return result       
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return `Vikings have won the war of the century!`
        }
        if (this.vikingArmy.length === 0) {
            return `Saxons have fought for their lives and survived another day...`
        }
        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}

const war = new War()

const saxons1 = new Saxon(100, 40)
const saxons1 = new Saxon(100, 40)
const saxons1 = new Saxon(100, 40)
const saxons1 = new Saxon(100, 40)

const vikin1 = new Viking (Vikin1, 100, 50)
const vikin1 = new Viking (Vikin2, 100, 50)
const vikin1 = new Viking (Vikin3, 100, 50)
const vikin1 = new Viking (Vikin4, 100, 50)

war.addSaxon(saxon1)
war.addSaxon(saxon2)
war.addSaxon(saxon3)
war.addSaxon(saxon4)
war.addViking(vikin1)
war.addViking(vikin2)
war.addViking(vikin3)
war.addViking(vikin4)

console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
console.log(war.vikingAttack())
console.log(war.saxonAttack())
console.log(war.showStatus())
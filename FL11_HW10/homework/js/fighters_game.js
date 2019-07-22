class Fighter {
  constructor(fighter) {
    const initialHealth = fighter.hp;
    const one = 1;
    this.wins = 0;
    this.losses = 0;
    this.getName = () => fighter.name;
    this.getDamage = () => fighter.damage;
    this.getAgility = () => fighter.agility;
    this.getHealth = () => fighter.hp;
    this.attack = function(defender) {
      const maxPercentage = 100;
      let isSuccesful = false;
      let name = defender.getName();
      let agility = defender.getAgility();

      let attack = Math.floor(Math.random() * maxPercentage);
      let success = maxPercentage - agility;

      attack <= success ? isSuccesful = true : isSuccesful;

      if (isSuccesful) {
        console.log(`${this.getName()} make ${this.getDamage()} damage to ${name}`);
        defender.dealDamage(this.getDamage());
      } else {
        console.log(`${this.getName()} attack missed`);
      }
    };
    this.logCombatHistory = function() {
      console.log(`Name: ${this.getName()}, Wins: ${this.wins}, Losses: ${this.losses}`);
    };
    this.heal = function(points) {
      let previousHealth = this.getHealth();
      this.getHealth = () => previousHealth + points;
      if (this.getHealth() > initialHealth) {
        this.getHealth = () => initialHealth;
      }
    };
    this.dealDamage = function(points) {
      const zero = 0;
      let previousHealth = this.getHealth();
      this.getHealth = () => previousHealth - points;
      if (this.getHealth() < zero) {
        this.getHealth = () => zero;
      }
    };
    this.addWin = function() {
      this.wins += one;
    };
    this.addLoss = function() {
      this.losses += one;
    };
  }
}

function battle(fighter1, fighter2) {
  function isDead(obj) {
    return obj.getHealth() <= 0;
  }

  if (isDead(fighter1)) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
  } else if (isDead(fighter2)) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
  }

  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
  }

  fighter1.getHealth() > 0 ? fighter1.addWin() : fighter1.addLoss();
  fighter2.getHealth() > 0 ? fighter2.addWin() : fighter2.addLoss();
}
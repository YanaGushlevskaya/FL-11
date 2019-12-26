function Pokemon() {
  this.getType = () => this.element;
  this.getSpecie = () => this.specie;
  this.canFly = () => this.flyAbility;
  this.getPokemonType = function() {
    return this.constructor.name;
  };
  this.evolve = function() {
    return this.__proto__;
  };
}

function Charmander() {
  Pokemon.call(this);
  this.element = 'Fire';
  this.specie = 'Lizard Pokemon';
  this.flyAbility = false;
}

Charmander.prototype = Object.create(Charmeleon.prototype);
/* Charmander.prototype.constructor = Charmander; */

function Charmeleon() {
  Charmander.call(this);
  this.specie = 'Flame Pokemon';
}

Charmeleon.prototype = Object.create(Charizard.prototype);
/* Charmeleon.prototype.constructor = Charmeleon; */

function Charizard() {
  Charmeleon.call(this);
  this.flyAbility = true;
}

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

/* console.log(charmander.getType());
console.log(charmander.getType() === charmeleon.getType());
console.log(charmeleon.getType() === charizard.getType());
console.log(charmander.evolve().constructor === Charmeleon);
console.log(charmeleon.evolve().constructor === Charizard);

console.log(charmander.getSpecie());
console.log(charmeleon.getSpecie());
console.log(charizard.getSpecie() === charmeleon.getSpecie());

console.log(charmander.canFly());
console.log(charmander.canFly() === charmeleon.canFly());
console.log(charizard.canFly()); */

function Pichu() {
  Pokemon.call(this);
  this.type = 'lightning';
  this.specie = 'Mouse Pokemon';
  this.evolve = function() {
    return new Pikachu();
  };
}

Pichu.prototype = Object.create(Pikachu.prototype);
Pichu.prototype.constructor = Pichu;

function Pikachu() {
  Pichu.call(this);
  this.evolve = function() {
    return new Raichu();
  };
}

Pikachu.prototype = Object.create(Raichu.prototype);
Pikachu.prototype.constructor = Pikachu;

function Raichu() {
  Pikachu.call(this);
  this.specie = 'Mouse Pokemon';
  this.evolve = function() {
    return new Raichu();
  };
}

/* const pichu = new Pichu();
console.log(pichu.getPokemonType());

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType());
console.log(pikachu.constructor === Pikachu);

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType());
console.log(raichu.constructor === Raichu);

const raichu2 = raichu.evolve();
console.log(raichu2 === raichu); */

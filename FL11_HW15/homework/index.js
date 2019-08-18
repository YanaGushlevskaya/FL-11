class Hamburger {
  constructor(type, hamburgerCalories, isAddingSecretIngredient) {
    let calories = hamburgerCalories;
    const zero = 0;
    let tomatoesCounter = zero;
    let haveCheese = false;
    let biteCounter = zero;
    let isSecretIngredientAdded = false;
    this.type = type;
    this.getCalories = () => calories;
    this.setCalories = function(newCalories) {
      calories = newCalories;
    };
    this.addCheese = (() => {
      const cheeseCalories = 120;
      return function() {
        if (!haveCheese) {
          calories += cheeseCalories;
          haveCheese = true;
        } else {
          throw Error('Sorry, you can add cheese only once');
        }
      };
    })();
    this.addTomato = (() => {
      const tomatoCalories = 20;
      return function() {
        if (tomatoesCounter < 2) {
          calories += tomatoCalories;
          tomatoesCounter += 1;
        } else {
          throw Error('Sorry, you can add tomato only twice');
        }
      };
    })();
    this.addSecretIngredient = (() => {
      return function() {
        let addIngredient = calories === hamburgerCalories;
        if (addIngredient) {
          calories += 100;
          isSecretIngredientAdded = true;
          addIngredient = false;
        } else if (isSecretIngredientAdded) {
          throw Error('Sorry, you can add secret ingredient only once.');
        } else {
          throw Error('Sorry, you can add secret ingredient only before another ingredient.');
        }
      };
    })();
    isAddingSecretIngredient ? this.addSecretIngredient() : null;
    this.bite = () => {
      this.addSecretIngredient = () => console.log('You can not add a secter ingredient');
      this.addTomato = () => console.log('You can not add a tomato');
      this.addCheese = () => console.log('You can not add some cheese');
      biteCounter += 1;
    };
    this.info = () => {
      const info = `${this.type} hamburger: ${
        isSecretIngredientAdded ? 'with secret ingredient' : 'without secret ingredient'
      }, ${haveCheese ? 'with cheese' : 'without cheese'}, ${
        tomatoesCounter ? 'with' + ' ' + tomatoesCounter + ' ' + 'tomatoes' : 'without tomatoes'
      }, is bitten ${biteCounter} times. Total calories: ${this.getCalories()}.`;

      return info;
    };
  }
}

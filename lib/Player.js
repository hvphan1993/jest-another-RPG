const Potion = require("./__mocks__/Potion");

class Player extends Character {
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

    // other methods
}
import { IEdible } from './classes/IEdible';

class Apple implements IEdible {

    name;
    quantity;

    public constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }

    public eat() {
        if (this.quantity > 0) {
            console.log('That ' + this.name + ' was delicious!');
            this.quantity = this.quantity - 1;
        } else {
            console.log('What ' + this.name + '?');
        }
    }
    public examine() {
        if (this.quantity > 0) {
            console.log('I see at least one ' + this.name + ' sitting on the shelf.');
        } else {
            console.log('I don\'t see any ' + this.name + ' here!');
        }
    }

    // public anythingelse() {
    //     console.log('Objects can do other things besides their interface requirements');
    // }
}

class Myself {

    public snacktime(food: IEdible) {
        food.eat;
    }
}

///////// Code begins below //////////

const Robbie = new Myself;
const apples = new Apple('Granny Smith Apple', 2);

Robbie.snacktime(apples);
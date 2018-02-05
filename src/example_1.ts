interface IOpenable {
    open(): any;
}

class Laptop implements IOpenable {

    public power = 'off';

    public open(): void {
        if (this.power == 'on') {
            this.wake();
        }
    }

    public wake(): void {
        // TODO: Implement
    }
}  

class CardBox implements IOpenable {

    // true = Open
    public state: boolean = true;

    public open(): void {
        if (!this.state) {
            this.state = !this.state;
        }
    }

    public takeCards(): void {
        if (this.state) {
            this.emptyBox();
        } else {
            console.log('The box must be open!');
        }
    }

    public emptyBox(): void {
        // TODO: Implement
    }
}
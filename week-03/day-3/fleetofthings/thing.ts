class Thing {
    name: string;
    completed: boolean;

    constructor(name: string){
        this.name = name;
    }

    public complete() {
        this.completed = true;
    }
}

export { Thing };

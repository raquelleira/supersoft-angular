interface IngredientInterface {
    id: string;
    name: string;
}

export class Ingredient implements IngredientInterface {
    public id: string;
    public name: string;

    constructor({
        id,
        name
    }: {
        id?: string;
        name?: string;
    }) {
        this.id = id;
        this.name = name;
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Ingredient } from './ingredient.model';
import { Router } from '@angular/router';

const INGREDIENTS = [
    new Ingredient({
        id: '1',
        name: 'Salt'
    }),
    new Ingredient({
        id: '2',
        name: 'Pepper'
    }),
    new Ingredient({
        id: '3',
        name: 'Cheese Slice'
    }),
    new Ingredient({
        id: '4',
        name: 'Burger'
    }),
    new Ingredient({
        id: '5',
        name: 'Hamburger Bread'
    }),
    new Ingredient({
        id: '6',
        name: 'Tomato'
    })
];

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

    public ingredients$: Observable<Ingredient[]>;
    public isEditing = false;
    public editingIngredient: Ingredient = null;

    private ingredients = INGREDIENTS;
    private ingredientsSubject: BehaviorSubject<Ingredient[]> = new BehaviorSubject(null);

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {
        this.ingredients$ = this.ingredientsSubject.asObservable();
    }

     /**
     * Gets and emits a list of ingredients
     */
    public getIngredients(): void {
        /**
         * Idealmente, esse método pega uma lista de ingredients do back-end, converte em uma promise
         * (pois o ciclo finaliza-se aqui, então não há necessidade de usar um Observable...)
         * E emite essa lista utilizando um behavior subject. Ou seja, todos os demais componentes
         * que derem ums subcribe em ingredients$ vão receber a lista que está sendo emitida.
         * Como não temos API real, vou deixar esse código comentado e fazer um fake abaixo....
         */
        // const url = 'url-do-ingredient.com';
        // this.httpClient.get<Ingredient[]>(url)
        //    .toPromise()
        //    .then(ingredients => this.emitIngredients(ingredients));
        this.emitIngredients(this.ingredients);
    }

    /**
     * Esse método faz essencialmente a mesma coisa que o método acima:
     * Uma chamada a API pra pegar uma lista de ingredients.
     * Só que ele retorna ao método chamador um Observable, contendo um array de Ingredient.
     * A forma de se utilizar é dando um subscribe no componente chamador.
     * ingredientService.getIngredientsObservable().subscribe(ingredients => console.log(ingredients));
     */
    public getIngredientsObservable(): Observable<Ingredient[]> {
        const url = 'url-do-ingredient.com';
        return this.httpClient.get<Ingredient[]>(url);
    }

    /**
     * Esse método faz essencialmente a mesma coisa que o método acima:
     * Uma chamada a API pra pegar uma lista de ingredients.
     * Só que ele retorna ao método chamador uma promise, contendo um array de Ingredient.
     * A forma de se utilizar é dando um subscribe no componente chamador.
     * ingredientService.getIngredientsPromise().then(ingredients => console.log(ingredients));
     */
    public getIngredientsPromise(): Promise<Ingredient[]> {
        const url = 'url-do-ingredient.com';
        return this.httpClient.get<Ingredient[]>(url).toPromise();
    }

    /**
     * Emits a list of ingredients
     * @param {Ingredient[]} ingredients
     */
    public emitIngredients(ingredients: Ingredient[]): void {
        this.ingredientsSubject.next(ingredients);
    }

    public editIngredient(ingredient: Ingredient): void {
        this.editingIngredient = ingredient;
        this.isEditing = true;
    }

    public finishEditIngredient(): void {
        this.editingIngredient = null;
        this.isEditing = false;
        this.router.navigate(['/main/ingredients']);
    }

    public submitIngredient(ingredient: Ingredient): void {
        ingredient.id ? this.putIngredient(ingredient) : this.postIngredient(ingredient);
    }

    /**
     * Esse método faria um método POST para a API, enviando os dados do ingredient
     * para serem salvos. Após retorno com sucesso, é feita a chamada do getIngredients, para
     * atualizar a lista e emitir a todos os componentes.
     */
    private postIngredient(ingredient: Ingredient): void {
        ingredient.id =  Math.random().toString();
        this.ingredients.push(ingredient);
        this.finishEditIngredient();
        this.getIngredients();
    }

    /**
     * Esse método faria um método PUT para a API, enviando os dados do ingredient
     * para serem atualizados. Após retorno com sucesso, é feita a chamada do getIngredients, para
     * atualizar a lista e emitir a todos os componentes.
     */
    private putIngredient(ingredient: Ingredient): void {
        const editingIngredient: Ingredient = this.ingredients.find(w => w.id === ingredient.id);
        if (editingIngredient) {
            editingIngredient.name = ingredient.name;
        }
        this.finishEditIngredient();
        this.getIngredients();
    }
}

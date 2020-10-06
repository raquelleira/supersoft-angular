import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Waiter } from './waiter.model';
import { Router } from '@angular/router';

const WAITERS = [
    new Waiter({
        id: '1',
        name: 'John Doe',
        startTime: '13:00',
        endTime: '22:00',
        phone: '(47) 99999-9999',
        shift: 'MON - SAT',
        status: 'Active'
    }),
    new Waiter({
        id: '2',
        name: 'Nicole Medina',
        startTime: '11:00',
        endTime: '20:00',
        phone: '(47) 98888-9999',
        shift: 'TUE - SUN',
        status: 'Active'
    }),
    new Waiter({
        id: '3',
        name: 'Toby Dupont',
        startTime: '11:00',
        endTime: '20:00',
        phone: '(47) 97777-9999',
        shift: 'TUE - SUN',
        status: 'Active'
    }),
    new Waiter({
        id: '4',
        name: 'Joanna Langley',
        startTime: '11:00',
        endTime: '20:00',
        phone: '(47) 96666-9999',
        shift: 'TUE - SUN',
        status: 'Active'
    }),
    new Waiter({
        id: '5',
        name: 'Thelma Raymond',
        startTime: '11:00',
        endTime: '20:00',
        phone: '(47) 95555-9999',
        shift: 'WED - TUE',
        status: 'On Vacation'
    }),
    new Waiter({
        id: '6',
        name: 'Daniel Klein',
        startTime: '11:00',
        endTime: '20:00',
        phone: '(47) 94444-9999',
        shift: 'TUE - SUN',
        status: 'Active'
    })
];

@Injectable({
    providedIn: 'root'
})

export class WaiterService {

    public waiters$: Observable<Waiter[]>;
    public isEditing = false;
    public editingWaiter: Waiter = null;

    private waiters = WAITERS;
    private waitersSubject: BehaviorSubject<Waiter[]> = new BehaviorSubject(null);

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {
        this.waiters$ = this.waitersSubject.asObservable();
    }

    /**
     * Gets and emits a list of waiters
     */
    public getWaiters(): void {
        /**
         * Idealmente, esse método pega uma lista de waiters do back-end, converte em uma promise
         * (pois o ciclo finaliza-se aqui, então não há necessidade de usar um Observable...)
         * E emite essa lista utilizando um behavior subject. Ou seja, todos os demais componentes
         * que derem ums subcribe em waiters$ vão receber a lista que está sendo emitida.
         * Como não temos API real, vou deixar esse código comentado e fazer um fake abaixo....
         */
        // const url = 'url-do-waiter.com';
        // this.httpClient.get<Waiter[]>(url)
        //    .toPromise()
        //    .then(waiters => this.emitWaiters(waiters));
        this.emitWaiters(this.waiters);
    }

    /**
     * Esse método faz essencialmente a mesma coisa que o método acima:
     * Uma chamada a API pra pegar uma lista de waiters.
     * Só que ele retorna ao método chamador um Observable, contendo um array de Waiter.
     * A forma de se utilizar é dando um subscribe no componente chamador.
     * waiterService.getWaitersObservable().subscribe(waiters => console.log(waiters));
     */
    public getWaitersObservable(): Observable<Waiter[]> {
        const url = 'url-do-waiter.com';
        return this.httpClient.get<Waiter[]>(url);
    }

    /**
     * Esse método faz essencialmente a mesma coisa que o método acima:
     * Uma chamada a API pra pegar uma lista de waiters.
     * Só que ele retorna ao método chamador uma promise, contendo um array de Waiter.
     * A forma de se utilizar é dando um subscribe no componente chamador.
     * waiterService.getWaitersPromise().then(waiters => console.log(waiters));
     */
    public getWaitersPromise(): Promise<Waiter[]> {
        const url = 'url-do-waiter.com';
        return this.httpClient.get<Waiter[]>(url).toPromise();
    }

    /**
     * Emits a list of waiters
     * @param {Waiter[]} waiters
     */
    public emitWaiters(waiters: Waiter[]): void {
        this.waitersSubject.next(waiters);
    }

    public editWaiter(waiter: Waiter): void {
        this.editingWaiter = waiter;
        this.isEditing = true;
    }

    public finishEditWaiter(): void {
        this.editingWaiter = null;
        this.isEditing = false;
        this.router.navigate(['main/waiter']);
    }

    public submitWaiter(waiter: Waiter): void {
        waiter.id ? this.putWaiter(waiter) : this.postWaiter(waiter);
    }

    /**
     * Esse método faria um método POST para a API, enviando os dados do waiter
     * para serem salvos. Após retorno com sucesso, é feita a chamada do getWaiters, para
     * atualizar a lista e emitir a todos os componentes.
     */
    private postWaiter(waiter: Waiter): void {
        waiter.id =  Math.random().toString();
        this.waiters.push(waiter);
        this.finishEditWaiter();
        this.getWaiters();
        console.log(this.waiters);
    }

    /**
     * Esse método faria um método PUT para a API, enviando os dados do waiter
     * para serem atualizados. Após retorno com sucesso, é feita a chamada do getWaiters, para
     * atualizar a lista e emitir a todos os componentes.
     */
    private putWaiter(waiter: Waiter): void {
        const editingWaiter: Waiter = this.waiters.find(w => w.id === waiter.id);
        if (editingWaiter) {
            editingWaiter.name = waiter.name;
            editingWaiter.phone = waiter.phone;
            editingWaiter.shift = waiter.shift;
            editingWaiter.startTime = waiter.startTime;
            editingWaiter.endTime = waiter.endTime;
            editingWaiter.status = waiter.status;
        }
        this.finishEditWaiter();
        this.getWaiters();
    }
}

interface WaiterInterface {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    phone: string;
    status: string;
    shift: string;
}

export class Waiter implements WaiterInterface {
    public id: string;
    public name: string;
    public startTime: string;
    public endTime: string;
    public phone: string;
    public status: string;
    public shift: string;

    constructor({
        id,
        name,
        startTime,
        endTime,
        phone,
        shift
    }: {
        id?: string;
        name?: string;
        startTime?: string;
        endTime?: string;
        phone?: string;
        status?: string;
        shift?: string;
    }) {
        this.id = id;
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.phone = phone;
        this.shift = shift;
    }
}

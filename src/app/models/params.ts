export interface Filter {
    filters: string;
    [key: string]: any;
}

export class Filter implements Filter{

    filter(filter: any): Filter {
        this.filters = JSON.stringify(filter);
        return this;
    }

    set(key: string , value: any): Filter {
        this[key] = value;
        return this;
    }

    delete(key : string){
        if(this[key]) delete this[key];
        return this;
    }

}
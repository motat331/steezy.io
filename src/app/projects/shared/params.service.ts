import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ParamsService {
    sliceAmount: number = 9;

    constructor() {}
}

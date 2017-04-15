import { Injectable } from '@angular/core';

@Injectable()
export class Settings {
    constructor() {
        this.baseUrlApi = "http://localhost/wordpress/api/";
        
    }

    getBaseURLApi() {
        return this.baseUrlApi;
    }
}

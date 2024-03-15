import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class StorageService {

    constructor() {};

    public saveLocalData(key: string, value: any) {
        localStorage.setItem(key,value);
    }

    public saveSessionData(key: string, value: any) {
        sessionStorage.setItem(key, value);
    }

    public getLocalData(key: string): any {
        return localStorage.getItem(key);
    }

    public getSessionData(key: string) {
        return sessionStorage.getItem(key);
    }

    public removeLocalData(key: string) {
        localStorage.removeItem(key);
    }

    public removeSessionData(key: string) {
        sessionStorage.removeItem(key);
    }

    public clearLocalData() {
        localStorage.clear();
    }

    public clearSessionData() {
        sessionStorage.clear();
    }
}
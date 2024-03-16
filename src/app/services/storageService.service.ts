import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public saveLocalData(key: string, value: any) {
    localStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value,
    );
  }

  public saveSessionData(key: string, value: any) {
    sessionStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value,
    );
  }

  public getLocalData(key: string): any {
    let item = localStorage.getItem(key);
    return typeof item === 'object' ? JSON.parse(item!) : item;
  }

  public getSessionData(key: string) {
    let item = sessionStorage.getItem(key);
    return typeof item === 'object' ? JSON.parse(item!) : item;
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

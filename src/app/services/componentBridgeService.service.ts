import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";

@Injectable({
    providedIn: 'root',
})
export class ComponentBridgeService {
    public deviceUpdateSubject = new Subject<any>();
    public cashUpdateSubject = new Subject<any>();

    deviceUpdateDataObservable$ = this.deviceUpdateSubject.asObservable();
    cashUpdateDataObservable$ = this.cashUpdateSubject.asObservable();

    updateDevice(data: any) {
        this.deviceUpdateSubject.next(data);
    }

    updateCash(data: any) {
        this.cashUpdateSubject.next(data);
    }
}
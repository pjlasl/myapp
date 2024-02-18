import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable, catchError, map } from "rxjs";

@Injectable()
export class ServerService {
    constructor(private http: HttpClient,) {};    

    getPersonalFiles() {

        return [
            {
                key: '0',
                label: '/home',                
                children: [
                    {
                        key: '0-0',
                        label: 'info.txt'
                    }
                ]
            },
            {
                key: '1',
                label: '/bin',
                
            },
            {
                key: '2',
                label: '/sys',                
            }
        ];
        
    }
}
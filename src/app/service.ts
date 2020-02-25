import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class Service {
    data
   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            this.data = data;
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/dashboard.json");
    }
}
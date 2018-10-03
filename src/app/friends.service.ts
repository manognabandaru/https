import {Http,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable()
export class FriendsService{

    constructor(private http: Http){}
    headers = new Headers({'Content-Type':'application/json'});
    holidays=[];
    sendFriends(friends:any[]){
        return this.http.post('https://manogna-http.firebaseio.com/data.json',friends,{headers:this.headers});

    }

    getholidays(year,month){
        console.log(year, month)
        return this.http.get(`https://holidayapi.com/v1/holidays?key=211794a3-0a8d-4eb7-b4c9-0d84c532698d&country=US&year=${year}&month=${month}`);

    }
}

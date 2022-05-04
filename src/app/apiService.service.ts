import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class ApiService {
    constructor(private httpclient:HttpClient){}

    getData(query:any){
        return this.httpclient.get(`https://pokeapi.co/api/v2/pokemon?limit=${query.limit}&offset=${query.offset}`);
    }
}
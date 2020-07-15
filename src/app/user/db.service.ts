import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from "rxjs/operators";
import { Post } from "../user/model";

@Injectable()
export class Database {

    constructor(private http: HttpClient){}


    sendPostQA(postData){
        this.http.post('https://sixpick-bfc95.firebaseio.com/posts.json', postData).subscribe(
            responseData => {
              console.log(responseData);
            }
          );
    }

   

    
}
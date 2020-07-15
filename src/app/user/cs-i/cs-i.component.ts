import { Component, OnInit } from '@angular/core';
import { Database } from '../db.service';
import { HttpClient } from '@angular/common/http';
import { Posts2 } from "src/app/user/model2"
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cs-i',
  templateUrl: './cs-i.component.html',
  styleUrls: ['./cs-i.component.css']
})
export class CsIComponent implements OnInit {
  courses: Posts2[]  = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCourseI();
  }

  subm(){
    
  }

  getCourseI(){
        
    this.http
    .get('https://sixpick-bfc95.firebaseio.com/posts2.json')
    .pipe(
        map((responseData: {[key: string]: Posts2 }) => {
        const postsArray: Posts2[] = [];
        for (const key in responseData) {
            postsArray.push({...responseData[key]});
        }
        return postsArray;
    }))
    .subscribe(
        posts => {
             this.courses = posts;
        }
    ); 

}
}

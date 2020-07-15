import { Component, OnInit } from '@angular/core';
import { Posts2 } from '../model2';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cs-ii',
  templateUrl: './cs-ii.component.html',
  styleUrls: ['./cs-ii.component.css']
})
export class CsIIComponent implements OnInit {

  courses: Posts2[]  = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCourseI();
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

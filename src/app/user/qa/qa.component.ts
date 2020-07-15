import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Database }  from 'src/app/user/db.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {
  listQuas: Post[] = [];

  constructor(private db: Database, private http: HttpClient) { }

  ngOnInit(): void {
      this.getQuA();
    

  }

  getQuA(){
        
    this.http
    .get('https://sixpick-bfc95.firebaseio.com/posts.json')
    .pipe(
        map((responseData: {[key: string]: Post }) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
            postsArray.push({...responseData[key]});
        }
        return postsArray;
    }))
    .subscribe(
        posts => {
             this.listQuas = posts;
        }
    ); 

}

  onSubmit(form: NgForm){
    let text = form.value['text'];
    let name = form.value['name1'];
    let postData = { question: text,
                     name: name,
                     };
    form.reset();
    
    this.db.sendPostQA(postData);
   
  }

}

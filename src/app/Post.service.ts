import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getAllEmployees():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  updatePost(post){  
    return this.http.patch('https://jsonplaceholder.typicode.com/posts' + '/' + post.id, JSON.stringify({ isRead: true }))  
  }
  addPost(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts' + '/' + post.id, JSON.stringify({ isRead: true }))
  }  
}

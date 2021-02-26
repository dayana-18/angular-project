import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from './models/post';

const postsList = "https://crudcrud.com/api/2d6a727f8e844a5d97055cb9b1701c00";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  httpClient: any;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get(postsList+"/posts");
  }

  addPost(post: Post): Observable<Post>{
    return this.http.post<Post>(postsList+"/posts", post);
  }

  deleteOnePost(id: String): Observable<{}> {
    const url = postsList+"/posts/"+id;
    return this.http.delete(url);
  }

  editPost(id: any, postEdited: Post){
    return this.http.put(`${postsList}/posts/${id}`, postEdited);
  }


  /*configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }*/
}

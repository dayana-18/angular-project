import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from './models/post';

const postsList = "https://crudcrud.com/api/385844deb8d848ffa6e5b25b4c6699ec";

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

  /*searchHeroes(term: string): Observable<Post[]>{

    const params = new HttpParams({fromString: 'name=term'});
      return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
   }*/
  /*configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }*/
}

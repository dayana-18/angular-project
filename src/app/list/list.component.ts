import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostServiceService } from '../@shared/post-service.service' ;
import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[] //= POSTS;

  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
    console.log("posts > ", this.posts);
  }

  addPost(newPost: Post){
    //this.posts.push(newPost);
    this.postService.addPost(newPost).subscribe( post => this.posts.unshift(post) );
    console.log(newPost.title);
  }

  getPost() {
    this.postService.getPosts().subscribe( posts => {this.posts = posts} );
  }

}

import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Post} from "../_model/post.model";

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(model) {
    this.http.get('http://localhost/yeasm-be/public/api/posts').subscribe(
      data  => {
        model.posts = data;
        }
    );
  }
}

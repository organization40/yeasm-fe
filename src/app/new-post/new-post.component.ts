import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Post} from '../_model/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  public Editor = ClassicEditor;

  public editorData = 'Aig guden';
  public posts: Post[];
  public message: string;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.udpatePosts();
  }

  /**
   * Functions
   */
  udpatePosts() {
    const self = this;
    // TODO: Confirm if there's a better way to do this then using <any>
    this.http.get<any>('http://localhost/yeasm-be/public/api/posts/depth/1')
      .subscribe(
          res => {
            if (res.status === 'ok') {
              self.posts = res.posts;
            }
        }
      );
  }

  /**
   * Events
   */
onClickMe() {
    const data = {title: 'Servus', postText: this.editorData};
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const self = this;
    this.http.post<any>('http://localhost/yeasm-be/public/api/post', data, config).subscribe(
      responseData  => {
          self.udpatePosts();
          self.editorData = '';
          if (responseData.status === 'ok') {
            this.message = 'Stored successfully';
          }
        }
    );
  }


}

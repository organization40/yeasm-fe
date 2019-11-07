import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'posts', component: NewPostComponent },
  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewPostComponent,
    PostComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

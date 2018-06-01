import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { PreventloginService } from './services/preventlogin.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './components/gallery/gallery.component'
import { TodosComponent } from './components/todos/todos.component'
import { PhotosComponent } from './components/photos/photos.component'

const routes: Routes = [
  { path: '', component: FeedComponent, canActivate:[AuthService] },
  { path: 'post/:id', component: PostComponent, canActivate:[AuthService] },
  { path: 'comments/:id', component: CommentsComponent, canActivate:[AuthService] },
  { path: 'user/:id', component: UserComponent, canActivate:[AuthService]  },
  { path: 'signin', component: LoginComponent, canActivate:[PreventloginService] },
  { path: '**', component: NotFoundComponent }
];

export const MyComponents = [
  AppComponent,
  PostComponent,
  FeedComponent,
  CommentsComponent,
  UserComponent,
  GalleryComponent,
  TodosComponent,
  PhotosComponent,
  LoginComponent,
  NotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

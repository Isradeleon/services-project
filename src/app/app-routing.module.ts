import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'comments/:id', component: CommentsComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'signin', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

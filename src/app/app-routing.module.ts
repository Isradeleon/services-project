import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './auth.service';
import { PreventloginService } from './preventlogin.service';

const routes: Routes = [
  { path: '', component: FeedComponent, canActivate:[AuthService] },
  { path: 'post/:id', component: PostComponent, canActivate:[AuthService] },
  { path: 'comments/:id', component: CommentsComponent, canActivate:[AuthService] },
  { path: 'user/:id', component: UserComponent, canActivate:[AuthService]  },
  { path: 'signin', component: LoginComponent, canActivate:[PreventloginService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

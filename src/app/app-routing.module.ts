import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodosComponent } from './todos/todos.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'todos', component: TodosComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent},
  
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
    { path: '',pathMatch :'full', redirectTo: 'home' },
    { path: 'login', component: LoginComponent },
    { path: 'header', component: HeaderComponent },
    { path: '**', pathMatch :'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

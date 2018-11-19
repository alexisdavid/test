import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { TestComponent } from './components/test/test.component';

import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'test', 
    component: TestComponent, 
  canActivate: [AuthGuardService]
 },

    { path: 'login', component: LoginComponent },
    { path: 'header', component: HeaderComponent },
    { path: '',pathMatch :'full', redirectTo: 'home' },
    { path: '**', pathMatch :'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

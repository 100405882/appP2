import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorarioComponent } from './horario/horario.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: '', redirectTo: '/principal', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'horario', component: HorarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

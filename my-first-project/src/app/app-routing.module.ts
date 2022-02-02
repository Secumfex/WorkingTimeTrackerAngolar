import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { ListComponentComponent } from './list-component/list-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // root will be redirected.
  { path: 'list', component: ListComponentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit/:id', component: InputComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

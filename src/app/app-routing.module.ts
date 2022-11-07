import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStarsComponent } from './list-stars/list-stars.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path: 'listrepositories', component: ListUsersComponent,
  },
  {
    path: 'listrepositoriesstars', component: ListStarsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

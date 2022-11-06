import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStarsRoutingModule } from './list-stars-routing.module';
import { ListStarsComponent } from './list-stars.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ListStarsComponent
  ],
  imports: [
    CommonModule,
    ListStarsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class ListStarsModule { }

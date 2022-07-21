import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SidenavComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexModule
  ],
  exports: [
    SidenavComponent,
    DashboardComponent
  ]
})
export class SharedModule { }

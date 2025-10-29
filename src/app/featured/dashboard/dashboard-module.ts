import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard';
import { Courses } from './courses/courses';
import { Home } from './home/home';
import { Students } from './students/students';
import { CoursesForm } from './courses/courses-form/courses-form';
import { CoursesTable } from './courses/courses-table/courses-table';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    Dashboard,
    Courses,
    Home,
    Students,
    CoursesForm,
    CoursesTable
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsertCourseComponent } from './insert-course/insert-course.component';
import { FindByNameComponent } from './find-by-name/find-by-name.component';
import { DBInitializeComponent } from './db-initialize/db-initialize.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path: 'insert', component: InsertCourseComponent },
  { path: 'findByName', component: FindByNameComponent},
  { path: 'dbInitialize', component:DBInitializeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

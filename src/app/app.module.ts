import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule } from '@angular/forms';
import { OpenLinkInNewWindowDirective } from './olinw.directive';

import { AppComponent } from './app.component';
import {taskService } from './taskTracker';
import { homeComponent } from './homePage/home';
import { positionComponent } from './position/position';
import { taskComponent } from './task/task';
const appRoutes = [
{path: 'home', component: homeComponent},
{path: 'position', component: positionComponent},
{path: 'task', component: taskComponent},
{path: '**', component: homeComponent}
];

@NgModule({
  declarations: [
    AppComponent, homeComponent, positionComponent, taskComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule
  ],
  providers: [{ provide: Window, useValue: window }, taskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

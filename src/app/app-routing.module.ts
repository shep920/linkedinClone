import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './navbarComponents/jobs/jobs.component';
import { NetworkComponent } from './navbarComponents/network/network.component';
import { NotificationsComponent } from './navbarComponents/notifications/notifications.component';
import { MeComponent } from './navbarComponents/me/me.component';

const routes:Routes =[
  {
    path: '', component: HomeComponent
  },
  {
    path: 'Home', component: HomeComponent
  },
  {
    path:'Chat',component: ChatComponent
  },
  {
    path:'Jobs',component: JobsComponent
  },
  {
    path:'Network',component: NetworkComponent
  },
  {
    path:'Notifications',component: NotificationsComponent
  },
  {
    path:'Me',component: MeComponent

  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

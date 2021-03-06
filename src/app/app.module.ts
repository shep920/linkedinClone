import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { TestbarComponent } from './navigation/testbar/testbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { MakePostComponent } from './cards/make-post/make-post.component';
import { ViewCardComponent } from './viewCard/viewCard.component';
import { PostComponent } from './cards/post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './navbarComponents/network/network.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { JobsComponent } from './navbarComponents/jobs/jobs.component';
import { JobSidecardComponent } from './components/job-sidecard/job-sidecard.component';
import { JobRightWidgetComponent } from './components/job-right-widget/job-right-widget.component';
import { NetworkMessageComponent } from './components/network-message/network-message.component';
import { NewtowrkLeftWidgetComponent } from './components/newtowrk-left-widget/newtowrk-left-widget.component';
import { NetworkRightWidgetComponent } from './components/network-right-widget/network-right-widget.component';
import { NetworkOtherWidgetComponent } from './components/network-other-widget/network-other-widget.component';

import { HttpClientModule } from '@angular/common/http'
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddPostComponent } from './home/add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HeaderComponent,
    SidebarComponent,
    TestbarComponent,
    FooterComponent,
    MakePostComponent,
      ViewCardComponent,
      PostComponent,
      HomeComponent,
      NetworkComponent,
      JobCardComponent,
      JobsComponent,
      JobSidecardComponent,
      JobRightWidgetComponent,
      NetworkMessageComponent,
      NewtowrkLeftWidgetComponent,
      NetworkRightWidgetComponent,
      NetworkOtherWidgetComponent,
      UserInfoComponent,
      AddPostComponent,
      AuthenticationComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

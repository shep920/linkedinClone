import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { TestbarComponent } from './navigation/testbar/testbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { MakePostComponent } from './cards/make-post/make-post.component';
import { ViewCardComponent } from './viewCard/viewCard.component';

@NgModule({
  declarations: [	
    AppComponent,
    TopNavBarComponent,
    HeaderComponent,
    SidebarComponent,
    TestbarComponent,
    FooterComponent,
    MakePostComponent,
      ViewCardComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

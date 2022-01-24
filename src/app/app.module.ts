import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/topnavbar/topnavbar.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { TestbarComponent } from './navigation/testbar/testbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    HeaderComponent,
    SidebarComponent,
    TestbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ChatsMessageComponent } from './components/chats-message/chats-message.component';
import { ChatsHomeComponent } from './components/chats-home/chats-home.component';
import { LoginComponent } from './components/login/login.component';
import { ComponentsComponent } from './components/components.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatsMessageComponent,
    ChatsHomeComponent,
    LoginComponent,
    ComponentsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

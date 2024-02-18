import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TerminalModule } from 'primeng/terminal';
import { TreeModule } from 'primeng/tree';

import { Header } from './components/header/header.component';
import { SideBar } from './components/sidebar/sidebar.component';
import { Terminal } from './components/terminal/terminal.component';
import { Shop } from './components/shop/shop.component';
import { Device } from './components/device/device.component';

import { ChanceService } from './services/chanceService.service';
import { ServerService } from './services/serverService.service';
@NgModule({
  declarations: [
    AppComponent,
    Header,
    SideBar,
    Terminal,
    Shop,
    Device,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    TerminalModule,
    TreeModule,
    HttpClientModule,
  ],
  providers: [
    ChanceService,
    ServerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

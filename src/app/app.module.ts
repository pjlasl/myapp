import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TerminalModule } from 'primeng/terminal';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressBarModule } from 'primeng/progressbar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RatingModule } from 'primeng/rating';
import { DividerModule } from 'primeng/divider';
import { InputSwitchModule } from 'primeng/inputswitch';

import { Intro } from './components/intro/intro.component';
import { Header } from './components/header/header.component';
import { SideBar } from './components/sidebar/sidebar.component';
import { Terminal } from './components/terminal/terminal.component';
import { Shop } from './components/shop/shop.component';
import { ShopItemDetail } from './components/shop/itemDetail/itemDetail.component';
import { DeviceConsole } from './components/terminal/device/device.component';
import { MyComputer } from './components/terminal/myComputer/myComputer.component';

import { LoginModal } from './components/intro/login/login.component';
import { EmailModal } from './components/email/modal/email.component';

import { ChanceService } from './services/chanceService.service';
import { ServerService } from './services/serverService.service';
import { ComponentBridgeService } from './services/componentBridgeService.service';
import { StorageService } from './services/storageService.service';
import { NetworkService } from './services/networkService.service';
import { ShopService } from './services/shopService.service';
import { UserService } from './services/userService.service';
import { MissionService } from './services/missionService.service';

@NgModule({
  declarations: [
    AppComponent,
    Intro,
    Header,
    SideBar,
    Terminal,
    Shop,
    ShopItemDetail,
    DeviceConsole,
    EmailModal,
    MyComputer,
    LoginModal,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    TerminalModule,
    TreeModule,
    HttpClientModule,
    TableModule,
    TagModule,
    TooltipModule,
    ProgressBarModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    RatingModule,
    DividerModule,
    InputSwitchModule,
  ],
  providers: [
    ChanceService,
    ServerService,
    ComponentBridgeService,
    StorageService,
    NetworkService,
    ShopService,
    UserService,
    MissionService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

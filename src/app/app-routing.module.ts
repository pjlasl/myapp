import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Terminal } from './components/terminal/terminal.component';
import { Shop } from './components/shop/shop.component';
import { EmailClient } from './components/email/emailClient.component';

const routes: Routes = [
  {path: 'terminal', component: Terminal},
  {path: 'shop', component: Shop},
  {path: 'emailClient', component: EmailClient},
  {path: '', redirectTo: '/terminal', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

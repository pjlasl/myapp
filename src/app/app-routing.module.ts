import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Terminal } from './components/terminal/terminal.component';
import { Shop } from './components/shop/shop.component';

const routes: Routes = [
  {path: 'terminal', component: Terminal},
  {path: 'shop', component: Shop},
  {path: '', redirectTo: '/terminal', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { HelloComponent } from './component/hello/hello.component';
import {AppRoutingModule} from './app-routing.module';
import { UsersComponent } from './user-module/component/users/users.component';


// const router: Routes = [
//   {path: 'showMenu', outlet: 'menu', component: MenuComponent},
//   {path: 'showFooter', outlet: 'footer', component: FooterComponent},
// ];



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

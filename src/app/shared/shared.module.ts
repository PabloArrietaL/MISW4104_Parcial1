import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: []
})
export class SharedModule { }
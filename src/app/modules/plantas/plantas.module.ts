import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './components/plantas/plantas.component';
import { PlantasRoutingModule } from './plantas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlantasComponent,
    PlantasRoutingModule
  ]
})
export class PlantasModule { }

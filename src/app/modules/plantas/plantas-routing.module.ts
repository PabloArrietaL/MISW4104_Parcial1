import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantasComponent } from './components/plantas/plantas.component';

const routes: Routes = [
  {
    path: 'plantas',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: PlantasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantasRoutingModule {}

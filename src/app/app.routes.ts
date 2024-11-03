import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'plantas',
        pathMatch: 'full'
    },
    {
        path: 'plantas',
        loadChildren: () => import('./modules/plantas/plantas.module').then(
            (m) => m.PlantasModule
        )
    }
];

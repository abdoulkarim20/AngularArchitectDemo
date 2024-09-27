import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'frontoffice', loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule)
    },
    {
        path: 'backoffice', loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule)
    },
    /* Default Path if path is bad redirect user to home page : FRONT OFFICE*/
    {
        path: '', redirectTo: '/frontoffice', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/frontoffice'
    }
];

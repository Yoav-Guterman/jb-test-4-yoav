import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { ListComponent } from './components/operations/list/list.component';
import { NewComponent } from './components/operations/new/new.component';

export const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'new', component: NewComponent },
    { path: '**', component: NotFoundComponent }
];

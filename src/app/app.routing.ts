import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './principal/layout/layout.component';


export const AppRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LayoutComponent
    },
    {
        path: 'principal',
        component: LayoutComponent
    }


]
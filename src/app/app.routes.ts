import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'createUser',
        component: CreateUserComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'solutions/:questionId',
        component: SolutionsComponent
    }
];

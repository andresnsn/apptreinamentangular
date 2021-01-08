import { Routes } from '@angular/router';
import { CardsImagensComponent } from './imagens/cards-imagens/cards-imagens.component';
import { AuthGuardService } from './login/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';

export const rootRouterConfig: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'usuarios', component: ListaUsuariosComponent, canActivate: [AuthGuardService] },
    { path: 'imagens', component: CardsImagensComponent, canActivate: [AuthGuardService] },

];
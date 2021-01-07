import { Routes } from '@angular/router';
import { CardsImagensComponent } from './imagens/cards-imagens/cards-imagens.component';
import { LoginComponent } from './login/login.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';



export const rootRouterConfig: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'usuarios', component: ListaUsuariosComponent },
    { path: 'imagens', component: CardsImagensComponent },

];
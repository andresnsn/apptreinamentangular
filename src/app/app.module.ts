import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { UsuarioService } from './usuarios/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CardsImagensComponent } from './imagens/cards-imagens/cards-imagens.component';
import { ImagemService } from './imagens/imagem.service';
import { AuthGuardService } from './login/auth-guard.service';
import { HttpClient } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaUsuariosComponent,
    CardsImagensComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],

  ],
  providers: [
    UsuarioService,
    ImagemService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

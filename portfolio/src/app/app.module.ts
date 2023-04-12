import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { MenuComponent } from './menu/menu.component';
import { IntroducaoComponent } from './apresentacao/introducao/introducao.component';
import { SobreMimComponent } from './apresentacao/sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    ApresentacaoComponent,
    MenuComponent,
    IntroducaoComponent,
    SobreMimComponent,
    ProjetosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

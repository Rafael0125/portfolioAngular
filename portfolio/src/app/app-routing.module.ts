import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { SobreMimComponent } from './apresentacao/sobre-mim/sobre-mim.component';

import { Projeto } from './projetos/projeto.model';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

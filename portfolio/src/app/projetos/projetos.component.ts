import { Component, OnInit } from '@angular/core';

import { Projeto } from './projeto.model';
import { PROJETOS } from './projeto.mock';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit{

  public projetos:Projeto[] = PROJETOS

  constructor(){ }

  ngOnInit(): void {
  }

}

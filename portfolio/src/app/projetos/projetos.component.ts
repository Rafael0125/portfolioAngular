import { Component,OnInit, ViewChildren,QueryList, ElementRef,AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

import { Projeto } from './projeto.model';
import { PROJETOS } from './projeto.mock';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit{

  @ViewChildren('carouselIcones')
  public carouselIcones!:QueryList<ElementRef>



  public projetos:Projeto[] = PROJETOS

  constructor(){ }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.carouselIcones.forEach((carouselIconesDiv:ElementRef<HTMLDivElement>) => {
      gsap.from(carouselIconesDiv.nativeElement,{rotation:0,x:-300,duration:10,delay:0}) // icones Linguagens
      gsap.to(carouselIconesDiv.nativeElement,{rotation:0,x:750,duration:10,delay: 0,repeat:-1, ease:'in-out'})
    })

  }


}

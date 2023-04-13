import { Component,OnInit, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css'],

})
export class SobreMimComponent implements OnInit {


  @ViewChild('teste')
  public teste!:ElementRef<HTMLDivElement>

  public imagens:string[] = [
    "../../../assets/icoLingProg/html.svg", 
    "../../../assets/icoLingProg/css.svg",
    "../../../assets/icoLingProg/javascript.svg",
    "../../../assets/icoLingProg/bootstrap-5.svg",
    "../../../assets/icoLingProg/angular.svg",
    "../../../assets/icoLingProg/typescript.svg",
  ]


  constructor(){}

  ngOnInit(): void { }

  ngAfterViewInit(): void {

    gsap.from(this.teste.nativeElement,{rotation:0,x:-1000,duration:10,delay:0}) // icones Linguagens
    gsap.to(this.teste.nativeElement,{rotation:0,x:1000,duration:10,delay: 0,repeat:-1, ease:'in-out'})

  
    
  }

}

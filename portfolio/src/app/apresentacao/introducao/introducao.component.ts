import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { gsap } from 'gsap';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css'],
})
export class IntroducaoComponent implements OnInit, AfterViewInit {

  public ola:string = 'Olá, Mundo'
  public fraseMeio:string = 'Sejam bem vindos, meu nome é'
  public nome:string = 'Rafael Navarro'

  @ViewChild('box')
  public box !: ElementRef<HTMLDivElement>
  @ViewChild('meuNome')
  public meuNome!: ElementRef<HTMLSpanElement>
  @ViewChild('frase')
  public frase!: ElementRef<HTMLSpanElement>
  


  
  ngAfterViewInit(): void {

    gsap.from(this.box.nativeElement,{rotation:0,x:-500,duration:5,delay:0}) // Ola mundo
    gsap.to(this.box.nativeElement,{rotation:0,x:20,duration:5,delay: 0, ease:'back'})
    
    gsap.from(this.frase.nativeElement,{opacity:0,rotation:0,x:50,duration:5,delay:1}) // Meu nome é
    gsap.to(this.frase.nativeElement,{opacity:1,x:50,duration:5,delay:1})
    
    gsap.from(this.meuNome.nativeElement,{opacity:0,rotation:0,x:50,duration:5,delay:4}) // Rafel Navarro
    gsap.to(this.meuNome.nativeElement,{opacity:1,x:50,duration:5,delay:4})

    
  }

  constructor (){ }

  ngOnInit(): void {
    
  }

}

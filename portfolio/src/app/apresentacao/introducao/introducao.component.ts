import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { gsap } from 'gsap';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css'],
})
export class IntroducaoComponent implements OnInit, AfterViewInit {

  public teste:Array<string> = ['Olá, Mundo']

  @ViewChildren('box')
  public box !: QueryList<ElementRef>
  @ViewChild('meuNome')
  public meuNome!: ElementRef<HTMLSpanElement>
  @ViewChild('frase')
  public frase!: ElementRef<HTMLSpanElement>


  
  ngAfterViewInit(): void {
    console.log(this.box)

    this.box.forEach((boxDiv:ElementRef<HTMLDivElement>) => {

      gsap.from(boxDiv.nativeElement,{rotation:0,x:-500,duration:5,delay:0}) // Ola mundo
      gsap.to(boxDiv.nativeElement,{rotation:0,x:20,duration:5,delay: 0, ease:'back'})
      
      gsap.from(this.frase.nativeElement,{opacity:0,rotation:0,x:50,duration:5,delay:1}) // Meu nome é
      gsap.to(this.frase.nativeElement,{opacity:1,x:50,duration:5,delay:1})
      
      gsap.from(this.meuNome.nativeElement,{opacity:0,rotation:0,x:50,duration:5,delay:4}) // Rafel Navarro
      gsap.to(this.meuNome.nativeElement,{opacity:1,x:50,duration:5,delay:4})

    });
  }

  constructor (){ }

  ngOnInit(): void {
    
  }

}

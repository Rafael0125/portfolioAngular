import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css'],
  animations: [
    trigger('entradaLetra',[
      transition(':enter',[
        style({
          transform:'translateX(-100%)'
        }),
        animate('500ms',style({
          transform:'translateX(0%)'
        }))
      ])
    ])
  ]
})
export class IntroducaoComponent implements OnInit {

  public teste:Array<string> = ['O','l','á',',','M','u','n','d','o']

  constructor (){ }

  ngOnInit(): void {
    
  }

}

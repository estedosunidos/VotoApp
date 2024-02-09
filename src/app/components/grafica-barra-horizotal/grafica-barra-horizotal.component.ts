import { Component, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-grafica-barra-horizotal',
  templateUrl: './grafica-barra-horizotal.component.html',
  styleUrls: ['./grafica-barra-horizotal.component.css']
})
export class GraficaBarraHorizotalComponent implements OnDestroy{

 result:any[] =[
  {
    "name": "juego1",
    "value": 20
  },
  {
    "name": "juego2",
    "value": 50
  },
  {
    "name": "juego5",
    "value": 4
  }
];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juego';
  showYAxisLabel = true;
  yAxisLabel = 'Voto';

  colorScheme = 'nightLights';
  intervalo;

  constructor() {

    this.intervalo=setInterval(() => {
      const newResult=[...this.result]
      for(let i in newResult){
        newResult[i].value=( Math.round(Math.random()*500))
      }
      this.result=[...newResult]
    },1500)

  }
  ngOnDestroy(): void {
   clearInterval(this.intervalo)
  }

  onSelect(event:any) {
    console.log(event);
  }

}

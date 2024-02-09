import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-gotty',
  templateUrl: './gotty.component.html',
  styleUrls: ['./gotty.component.css']
})
export class GottyComponent implements OnInit {
  juegos:Game[]=[]
  constructor(private game:GameService){

  }
  ngOnInit(): void {
    this.game.getNominado().subscribe(res=>{
       console.log(this.juegos)

    })
  }

}

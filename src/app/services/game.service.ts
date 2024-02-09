import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {enviroment} from '../../environments/environment'
import { Game } from '../interfaces/interface';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }
  getNominado(){
    return this.http.get<Game>(`${ enviroment.url }/api/goty`);
  }
}

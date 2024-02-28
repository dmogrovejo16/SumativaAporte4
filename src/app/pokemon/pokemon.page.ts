import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../Services/apiservice.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
pokemonName: any;
pokemonName2: any;
abilities:any;
height:any;
txtt:string=" ";
experience:any;
img:any;
id:any;
  constructor(private api: APIServiceService) { }

  ngOnInit() {
    this.pokemonName=localStorage.getItem("name")?.toUpperCase();
    this.pokemonName2=localStorage.getItem("name");
    this.abilities=localStorage.getItem("abilities");
    this.experience=localStorage.getItem("experience");
    this.height=localStorage.getItem("height");
    this.img=localStorage.getItem("img");
    this.id=localStorage.getItem("id");

      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
    

  }

}

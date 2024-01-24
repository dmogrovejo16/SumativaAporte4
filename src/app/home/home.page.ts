import { Component } from '@angular/core';
import { APIServiceService } from './../Services/apiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idABuscar: number = 0;
  idABuscarItem: number = 0;
  nombreABuscar: string="";
  nombreABuscarItem: string="";
  pokemon: string | undefined;
  item: string | undefined;
  pokemon2: string | undefined;
  item2: string | undefined;
  pokemonImg: string | undefined;
  ItemImg: string | undefined;
  ItemImg2: string | undefined;
  pokemonImg2: string | undefined;
  idItem:number | undefined;
  idPokemon:number | undefined;

  constructor(private api: APIServiceService) {}
  getPokemonDataID(id: number) {
    try {
      let idABuscar;
   // Declara una variable local para almacenar el nombre del Pokémon.
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemonID(this.idABuscar).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.pokemon = response.name;
this.pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + '.png';
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.pokemon);

      }));

      

      
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }

  getPokemonDataName(nombre: string) {
    try {
   // Declara una variable local para almacenar el nombre del Pokémon.
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemonName(this.nombreABuscar).subscribe((response2 => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.pokemon2 = response2.name;
        let id=response2.id;
       this.idPokemon=id;
this.pokemonImg2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + '.png';
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.pokemon);

      }));

      

      
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }

  getItemDataId(id: number) {
    try {
   // Declara una variable local para almacenar el nombre del Pokémon.
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getItemID(this.idABuscarItem).subscribe((response2 => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.item = response2.name;
        let id=response2.id;
this.ItemImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/" + this.item + '.png';
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.item);

      }));

      

      
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }

  getItemDataName(nombre: string) {
    try {
   // Declara una variable local para almacenar el nombre del Pokémon.
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getItemNAME(this.nombreABuscarItem).subscribe((response2 => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.item2 = response2.name;
        let id=response2.id;
        this.idItem=id;
this.ItemImg2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/" + this.item2 + '.png';
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.item2);

      }));

      

      
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }
}

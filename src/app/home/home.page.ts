import { Component } from '@angular/core';
import { APIServiceService } from './../Services/apiservice.service';
import { HttpClient } from '@angular/common/http';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
color:any;
tipo:any;
color2:any;
tipo2:any;

  isDisabled1:boolean=true;
  isDisabled2:boolean=true;
  isDisabled3:boolean=true;
  isDisabled4:boolean=true;
  pokemonName:any;
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
rutaTabla:any;
type:any;
type2:any;

  constructor(private api: APIServiceService,private db:Firestore, private http: HttpClient) {}

async subida(){
  this.rutaTabla = doc(this.db,'pokemon','Pokemon');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutaTabla, { tipo: this.tipo});//CAMBIA EL ATRIBUTO DE LA TABLA
}
  getPokemonDataID(id: number) {
    try {
      let idABuscar;
   // Declara una variable local para almacenar el nombre del Pokémon.
      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemonID(this.idABuscar).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
   
  
        this.pokemon = response.name;
        this.isDisabled1=false;
        this.pokemonName=response.name;
        localStorage.setItem("name", this.pokemonName);
this.pokemonImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + '.png';
localStorage.setItem("img", this.pokemonImg);
localStorage.setItem("id", id+"");
localStorage.setItem("abilities", response.abilities);
localStorage.setItem("experience", response.base_experience);
localStorage.setItem("height", response.height);
this.type=response.types[0].type.name;
if(this.type=="fire"){
  this.color="red";
  this.tipo="fuego";
  this.subida();

}else if (this.type=="grass"){
  this.color="green";
  this.tipo="planta";
  this.subida();

}else if (this.type=="bug"){
  this.color="purple";
  this.tipo="insecto";
  this.subida();

}else if (this.type=="water"){
  this.color="blue";
  this.tipo="agua";
  this.subida();

}else if (this.type=="steel"){
  this.color="gray";
  this.tipo="hierro";
  this.subida();

}else if (this.type=="dragon"){
  this.color="orange";
  this.tipo="dragon";
  this.subida();

}else if (this.type=="fairy"){
  this.color="lightblue";
  this.tipo="hada";
  this.subida();

}else if (this.type=="ice"){
  this.color="skyblue";
  this.tipo="hielo";
  this.subida();

}else if (this.type=="fight"){
  this.color="brown";
  this.tipo="lucha";
  this.subida();

}else if (this.type=="psychic"){
  this.color="aqua";
  this.tipo="psiquico";
  this.subida();

}else if (this.type=="rock"){
  this.color="brown";
  this.tipo="piedra";
  this.subida();

}else if (this.type=="dark"){
  this.color="darkgrey";
  this.tipo="oscuro";
  this.subida();

}else if (this.type=="flying"){
  this.color="gold";
  this.tipo="volador";
  this.subida();

}else if (this.type=="poison"){
  this.color="plum";
  this.tipo="veneno";
  this.subida();

}else if (this.type=="electric"){
  this.color="yellow";
  this.tipo="electrico";
  this.subida();

}else if (this.type=="ghost"){
  this.color="white";
  this.tipo="fantasma";
  this.subida();

}else if (this.type=="normal"){
  this.color="lightcoral";
  this.tipo="normal";
  this.subida();

}else{
  this.tipo="No hay :("
  this.color="cyan";
  this.subida();

}
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.pokemon);
        console.log(response.types[0].type.name);

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
        this.isDisabled2=false;
       this.idPokemon=id;
       this.pokemonName=response2.name;
       localStorage.setItem("name", this.pokemonName);

       this.type=response2.types[0].type.name;
       if(this.type=="fire"){
         this.color2="red";
         this.tipo2="fuego";
       }else if (this.type=="grass"){
         this.color2="green";
         this.tipo2="planta";
       }else if (this.type=="bug"){
         this.color2="purple";
         this.tipo2="insecto";
       
       }else if (this.type=="water"){
         this.color2="blue";
         this.tipo2="agua";
       }else if (this.type=="steel"){
         this.color2="gray";
         this.tipo2="hierro";
       }else if (this.type=="dragon"){
         this.color2="orange";
         this.tipo2="dragon";
       }else if (this.type=="fairy"){
         this.color2="lightblue";
         this.tipo2="hada";
       }else if (this.type=="ice"){
         this.color2="skyblue";
         this.tipo2="hielo";
       }else if (this.type=="fight"){
         this.color2="brown";
         this.tipo2="lucha";
       }else if (this.type=="psychic"){
         this.color2="aqua";
         this.tipo2="psiquico";
       }else if (this.type=="rock"){
         this.color2="brown";
         this.tipo2="piedra";
       }else if (this.type=="dark"){
         this.color2="darkgrey";
         this.tipo2="oscuro";
       }else if (this.type=="flying"){
         this.color2="gold";
         this.tipo2="volador";
       }else if (this.type=="poison"){
         this.color2="plum";
         this.tipo2="veneno";
       }else if (this.type=="electric"){
         this.color2="yellow";
         this.tipo2="electrico";
       }else if (this.type=="ghost"){
         this.color2="white";
         this.tipo2="fantasma";
       }else if (this.type=="normal"){
         this.color2="lightcoral";
         this.tipo2="normal";
       }else{
         this.tipo2="No hay :("
         this.color2="cyan";
       }
this.pokemonImg2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + '.png';
localStorage.setItem("img", this.pokemonImg2);
localStorage.setItem("id", response2.id);
localStorage.setItem("abilities", response2.abilities);
localStorage.setItem("experience", response2.base_experience);
localStorage.setItem("height", response2.height);
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.type);

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
        this.pokemonName=response2.name;

        this.isDisabled3=false;      
         localStorage.setItem("name", this.pokemonName);

         localStorage.setItem("id", response2.id);
         localStorage.setItem("abilities", response2.abilities);
         localStorage.setItem("experience", response2.base_experience);
         localStorage.setItem("height", response2.height);
this.ItemImg="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/" + this.item + '.png';
localStorage.setItem("img", this.ItemImg);

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
        this.pokemonName=response2.name;
        localStorage.setItem("name", this.pokemonName);
        localStorage.setItem("id", response2.id);

        this.isDisabled4=false;

        this.idItem=id;
this.ItemImg2="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/" + this.item2 + '.png';
localStorage.setItem("img", this.ItemImg2);
localStorage.setItem("abilities", response2.abilities);
localStorage.setItem("experience", response2.base_experience);
localStorage.setItem("height", response2.height);
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.item2);

      }));

      

      
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }
}

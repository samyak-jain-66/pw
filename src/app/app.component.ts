import { Component } from '@angular/core';
import { ApiService } from './apiService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw';
  query:any;
  pokemons:any[]=[];

  constructor(private ApiService:ApiService) {
    this.query={
      limit:15,
      offset:0
    }
  }
  ngOnInit(){
    this.pokemonList(this.query);
  }
  pokemonList(query:any){
    this.pokemons.splice(0);
    this.ApiService.getData(query).subscribe(
      (serverData:any)=>{
        console.log(serverData);
        this.pokemons=serverData.results;
        console.log(this.pokemons)
      }
    )
  }
  previous(){
    this.query.offset-=15;
    this.pokemonList(this.query);
  }
  next(){
    this.query.offset+=15;
    this.pokemonList(this.query);
  }
}

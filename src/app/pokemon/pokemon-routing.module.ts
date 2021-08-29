import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { BerriesComponent } from './pages/berries/berries.component';
import { TypesComponent } from './pages/types/types.component';


const routes: Routes = [
  {
    path:'pokemon',
    component:PokemonComponent
  },
  {
    path:'pokedex',
    component:PokedexComponent
  },
  {
    path:'berries',
    component:BerriesComponent
  },
  {
    path:'types',
    component:TypesComponent
  },
  {
    path:'**',
    redirectTo:'pokemon'
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PokemonRoutingModule { }


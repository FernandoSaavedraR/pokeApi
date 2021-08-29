import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { BerriesComponent } from './pages/berries/berries.component';
import { TypesComponent } from './pages/types/types.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokemonComponent,
    BerriesComponent,
    TypesComponent,
  ],
  imports: [CommonModule, PrimengModule, PokemonRoutingModule],
  exports: [],
})
export class PokemonModule {}

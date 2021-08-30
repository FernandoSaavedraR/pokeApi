import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';
import { HomeComponent } from './shared/home/home.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    
  },
  { path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'pokemon',
    loadChildren:()=>import('./pokemon/pokemon.module').then(m=>m.PokemonModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

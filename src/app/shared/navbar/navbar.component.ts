import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  private _logged: boolean = false;
  constructor( private authService:AuthService,private router:Router) {}

  get logged(): boolean {
    return this._logged;
  }
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this._logged = true;
    }
    this.authService.isLoggedIn().subscribe(resp=>
      {
        this._logged = resp;
        console.log(this._logged,resp)
      })
    this.items = [
      {
        label: 'Pokedex',
        icon: 'pi pi-fw pi-twitter',
        items: [
          {
            label: 'Pokelist',
            icon: 'pi pi-list',
            routerLink: ['./pokemon', 'pokedex'],
          },
          {
            label: 'Pokemon',
            icon: 'pi pi-star',
            routerLink: ['./pokemon', 'pokemon'],
          },
        ],
      },
      {
        label: 'Types',
        icon: 'pi pi-fw pi-tags',
        routerLink: ['./pokemon', 'types'],
      },
      {
        label: 'Berries',
        icon: 'pi pi-fw pi-apple',
        routerLink: ['./pokemon', 'berries'],
      },
    ];
  }
  logout(){
    console.log('logout')
    this.authService.logout();
    this.router.navigate(['./'])
  }
}

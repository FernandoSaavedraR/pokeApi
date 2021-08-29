import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pokedex',
        icon: 'pi pi-fw pi-twitter',
        items:[
          {
            label:'Pokelist',
            icon:'pi pi-list'
          },
          {
            label:'Pokemon',
            icon:'pi pi-star'
          }
        ]
      },
      {
        label: 'Types',
        icon: 'pi pi-fw pi-tags',
      },
      {
        label: 'Berries',
        icon: 'pi pi-fw pi-apple',
      },

    ];
  }
}

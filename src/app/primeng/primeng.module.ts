import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import {TabViewModule} from 'primeng/tabview';
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    MenubarModule,
    TabViewModule
  ],
})
export class PrimengModule {}

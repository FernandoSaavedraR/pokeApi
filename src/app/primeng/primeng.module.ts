import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ButtonModule,
    CardModule,
    DialogModule,
    InputTextModule,
    MenubarModule,
    PasswordModule,
    TabViewModule,
  ],
})
export class PrimengModule {}

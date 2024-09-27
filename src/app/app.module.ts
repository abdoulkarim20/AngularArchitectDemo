import { NgModule } from '@angular/core';
import { FrontofficeModule } from './frontoffice/frontoffice.module';
import { BackofficeModule } from './backoffice/backoffice.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    FrontofficeModule,
    BackofficeModule
  ]
})
export class AppModule { }

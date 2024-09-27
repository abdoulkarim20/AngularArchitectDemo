import { Component } from '@angular/core';
import {NavbarComponent} from "../frontoffice/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-backoffice',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet
  ],
  templateUrl: './backoffice.component.html',
  styleUrl: './backoffice.component.scss'
})
export class BackofficeComponent {

}

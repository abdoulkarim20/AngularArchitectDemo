import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { BackOfficeNavbarComponent } from "./back-office-navbar/back-office-navbar.component";
import { BackOfficeFooterComponent } from "./back-office-footer/back-office-footer.component";
import { ListeUsersComponent } from "./users/liste-users/liste-users.component";

@Component({
  selector: 'app-backoffice',
  standalone: true,
  imports: [
    RouterOutlet,
    BackOfficeNavbarComponent,
    BackOfficeFooterComponent,
    ListeUsersComponent
],
  templateUrl: './backoffice.component.html',
  styleUrl: './backoffice.component.scss'
})
export class BackofficeComponent {

}

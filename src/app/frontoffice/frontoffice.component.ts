import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {BannerComponent} from "./banner/banner.component";

@Component({
  selector: 'app-frontoffice',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent,BannerComponent],
  templateUrl: './frontoffice.component.html',
  styleUrl: './frontoffice.component.scss'
})
export class FrontofficeComponent {

}

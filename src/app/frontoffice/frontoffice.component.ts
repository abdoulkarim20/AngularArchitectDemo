import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontOfficeNavbarComponent } from "./layout/front-office-navbar/front-office-navbar.component";
import { FrontOfficeFooterComponent } from "./layout/front-office-footer/front-office-footer.component";
import { BannerComponent } from "./banner/banner.component";

@Component({
  selector: 'app-frontoffice',
  standalone: true,
  imports: [RouterModule, FrontOfficeNavbarComponent, FrontOfficeFooterComponent, BannerComponent],
  templateUrl: './frontoffice.component.html',
  styleUrl: './frontoffice.component.scss'
})
export class FrontofficeComponent {

}

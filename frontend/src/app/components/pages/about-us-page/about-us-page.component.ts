import { Component } from '@angular/core';
import { TitleComponent } from '../../partials/title/title.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [TitleComponent,RouterLink],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css'
})
export class AboutUsPageComponent {

}

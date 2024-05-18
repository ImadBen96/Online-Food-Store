import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/partials/header/header.component';
import { HeroComponent } from './components/partials/hero/hero.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { FooterComponent } from './components/partials/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HeroComponent,ToastrModule,LoadingComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private router:Router){}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}
}

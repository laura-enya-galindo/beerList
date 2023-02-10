import { Component, OnInit } from '@angular/core';
import { BeerService } from './services/beer.service';
import { Beer } from "../model/beer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public beers: Beer[] = [];
  public beer: any;
  public serviceError = false;

  constructor(private beerService: BeerService) {
    // récupère pour après afficher les données importées
  }

  public ngOnInit(): void {
    this.fetchBeers();
  }

  public fetchBeers() {
    this.beerService.fetchBeers()
      .subscribe({
        next: (res: Beer[]) => {
          this.beers = res.slice(0, 6);
          this.beer = this.beers[0];
        },
        error: (error) => {
          console.log(error);
          this.serviceError = true;
        }
      });
      
  }

}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Beer } from "../../model/beer";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit, OnDestroy {

  // @ts-ignore
  @Input() beer: Beer;

  constructor() { }

  ngOnInit(): void {
    console.log(`Init beer ${this.beer.id}`);
  }

  ngOnDestroy(): void {
    console.log(`Destroy beer ${this.beer.name}`);
  }

}

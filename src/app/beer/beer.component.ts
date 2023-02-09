import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Beer } from "../../model/beer";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit, OnDestroy {

  // @ts-ignore
  @Input() beer: Beer;

  @Output() addToCartReq = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(`Init beer ${this.beer.id}`);
  }

  ngOnDestroy(): void {
    console.log(`Destroy beer ${this.beer.title}`);
  }

  public addToCart() {
    this.addToCartReq.emit(this.beer.id);
  }

}

import {Component, Input} from '@angular/core';
import {BasketStorage} from "../../shared/services/basket-storage.service";
import {Observable} from "rxjs";
import {IBasketTotals} from "./basket-totals";

@Component({
  selector: 'app-order-totals[basketTotals]',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent {
  @Input() basketTotals!: IBasketTotals;
}

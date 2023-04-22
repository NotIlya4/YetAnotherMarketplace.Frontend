import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import {BasketRoutingModule} from "./basket-routing.module";
import {CoreModule} from "../core/core.module";
import { OrderTotalsComponent } from './order-totals/order-totals.component';
import { BasketItemsTableComponent } from './basket-items-table/basket-items-table.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "../shared/shared.module";
import { OrderTotalsSkeletonComponent } from './order-totals-skeleton/order-totals-skeleton.component';
import { BasketItemsTableSkeletonComponent } from './basket-items-table-skeleton/basket-items-table-skeleton.component';



@NgModule({
  declarations: [
    BasketComponent,
    OrderTotalsComponent,
    BasketItemsTableComponent,
    OrderTotalsSkeletonComponent,
    BasketItemsTableSkeletonComponent
  ],

  imports: [
    CommonModule,
    BasketRoutingModule,
    CoreModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class BasketModule { }

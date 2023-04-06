import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterLink} from "@angular/router";
import {WordPlaceholderComponent} from "./components/word-placeholder/word-placeholder.component";
import { TextContentPlaceholderComponent } from './components/text-content-placeholder/text-content-placeholder.component';
import { LazyTextComponent } from './components/lazy-text/lazy-text.component';
import {TabComponent} from "./components/tab/tab.component";
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { TextAutoPlaceholderComponent } from './components/text-auto-placeholder/text-auto-placeholder.component';
import { ProductLinkComponent } from './components/product-link/product-link.component';


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    SearchComponent,
    WordPlaceholderComponent,
    TextContentPlaceholderComponent,
    LazyTextComponent,
    TabComponent,
    PrimaryButtonComponent,
    TextAutoPlaceholderComponent,
    ProductLinkComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    FontAwesomeModule,
    RouterLink
  ],
  exports: [
    NgbPaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    SearchComponent,
    WordPlaceholderComponent,
    LazyTextComponent,
    TextContentPlaceholderComponent,
    TabComponent,
    PrimaryButtonComponent,
    TextAutoPlaceholderComponent,
    ProductLinkComponent
  ]
})
export class SharedModule { }

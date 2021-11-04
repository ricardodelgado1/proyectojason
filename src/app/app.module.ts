import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from  '@angular/platform-browser/animations';

import { MatInputModule} from '@angular/material/input';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

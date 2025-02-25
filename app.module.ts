import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookcreateComponent,
    BooklistComponent,
    BookdetailsComponent,
    BookeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

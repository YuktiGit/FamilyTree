import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { DetailsComponent } from './details/details.component';
import { PaternalComponent } from './paternal/paternal.component';
import { MaternalComponent } from './maternal/maternal.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    DetailsComponent,
    PaternalComponent,
    MaternalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

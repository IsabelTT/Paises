import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CountryViewComponent } from './components/country-view/country-view.component';
import { MonedaPipe } from './pipes/moneda.pipe';
import { LenguaPipe } from './pipes/lengua.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CountryViewComponent,
    MonedaPipe,
    LenguaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot(environment.googleMaps)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

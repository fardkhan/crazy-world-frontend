import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryService } from './services/country-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CountrydetailsComponent } from './components/countrydetails/countrydetails.component';
import { WorldFactsComponent } from './components/world-facts/world-facts.component';
import { PopulatedcountriesComponent } from './components/populatedcountries/populatedcountries.component';
import { HighestLifeExpectancyComponent } from './components/highest-life-expectancy/highest-life-expectancy.component';
import { UniqueGovernmentFormsComponent } from './components/unique-government-forms/unique-government-forms.component';
import { TopTenGnpCountriesComponent } from './components/top-ten-gnp-countries/top-ten-gnp-countries.component';
import { MaxPopulatedCityComponent } from './components/max-populated-city/max-populated-city.component';
import { TopTenPopulatedCitiesComponent } from './components/top-ten-populated-cities/top-ten-populated-cities.component';
import { CountryCitiesComponent } from './components/country-cities/country-cities.component';
import { PopulationInfoComponent } from './components/population-info/population-info.component';
import { FormsModule } from '@angular/forms';
import { CityListComponent } from './components/city-list/city-list.component';
import { RegionLanguagesComponent } from './components/region-languages/region-languages.component';
import { FirstTenCitiesComponent } from './components/first-ten-cities/first-ten-cities.component';
import { DistrictListComponent } from './components/district-list/district-list.component';
import { AllCitiesComponent } from './components/all-cities/all-cities.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutUsComponent,
    TermsOfUseComponent,
    HomePageComponent,
    HeaderComponent,
    CountryListComponent,
    CountrydetailsComponent,
    WorldFactsComponent,
    PopulatedcountriesComponent,
    HighestLifeExpectancyComponent,
    UniqueGovernmentFormsComponent,
    TopTenGnpCountriesComponent,
    MaxPopulatedCityComponent,
    TopTenPopulatedCitiesComponent,
    CountryCitiesComponent,
    PopulationInfoComponent,
    CityListComponent,
    RegionLanguagesComponent,
    FirstTenCitiesComponent,
    DistrictListComponent,
    AllCitiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

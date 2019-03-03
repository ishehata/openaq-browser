import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';
import { LocationsComponent } from './locations/locations.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { ParametersComponent } from './parameters/parameters.component';
import { SourcesComponent } from './sources/sources.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'cities', component: CitiesComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'measurements', component: MeasurementsComponent},
  {path: 'parameters', component: ParametersComponent},
  {path: 'sources', component: SourcesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

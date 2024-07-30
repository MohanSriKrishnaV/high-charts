import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighChartsRoutingModule } from './high-charts-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DoubleBarComponent } from './widgets/double-bar/double-bar.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    HomeComponent,
    DoubleBarComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HighChartsRoutingModule, FormsModule, ReactiveFormsModule, HighchartsChartModule
  ]
})
export class HighChartsModule { }

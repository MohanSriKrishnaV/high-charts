import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { FirstComponent } from './components/first/first.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { ThemesComponent } from './components/themes/themes.component';
import { UnderStandingHighChartComponent } from './components/under-standing-high-chart/under-standing-high-chart.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { SeriesComponent } from './components/series/series.component';
import { HomeComponent } from './components/home/home.component';

const ui: any[] = []
@NgModule({
  declarations: [
    FirstComponent,
    StockChartComponent,
    ThemesComponent,
    UnderStandingHighChartComponent,
    BubbleComponent,
    SeriesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  exports: [...ui]
})
export class UiModule { }

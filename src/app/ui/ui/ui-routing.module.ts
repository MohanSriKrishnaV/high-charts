import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { StockChartComponent } from './components/stock-chart/stock-chart.component';
import { ThemesComponent } from './components/themes/themes.component';
import { UnderStandingHighChartComponent } from './components/under-standing-high-chart/under-standing-high-chart.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { SeriesComponent } from './components/series/series.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "first", component: FirstComponent },
  { path: "StockChart", component: StockChartComponent },
  { path: "themes", component: ThemesComponent },
  { path: "UnderStandingHighChart", component: UnderStandingHighChartComponent },
  { path: "bubble", component: BubbleComponent },
  { path: "series", component: SeriesComponent },
  { path: "home", component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }

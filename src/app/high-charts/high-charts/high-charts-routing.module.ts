import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  // { path: "StockChart", component: StockChartComponent },
  // { path: "themes", component: ThemesComponent },
  // { path: "UnderStandingHighChart", component: UnderStandingHighChartComponent },
  // { path: "bubble", component: BubbleComponent },
  // { path: "series", component: SeriesComponent },
  // { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighChartsRoutingModule { }

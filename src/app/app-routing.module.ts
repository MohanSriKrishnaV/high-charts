import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ui',
    loadChildren: () => import('./ui/ui/ui.module').then(m => m.UiModule)
  },
  {
    path: 'hc',
    loadChildren: () => import('./high-charts/high-charts/high-charts.module').then(m => m.HighChartsModule)
  },
  { path: '', redirectTo: '/ui', pathMatch: 'full' },
  { path: '**', redirectTo: '/ui' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

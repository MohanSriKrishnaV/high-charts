import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighchartsService {

  constructor(private http: HttpClient) { }
  private menuItems = [
    // { name: 'Home', route: '/' },
    // { name: 'About', route: '/about' },
    // { name: 'Contact', route: '/contact' },
    { name: 'first chart', route: 'ui/first' },
    { name: 'Stock Chart', route: 'ui/StockChart' },
    { name: 'themes', route: 'ui/themes' },
    { name: 'under standing high charts', route: 'ui/UnderStandingHighChart' },
    { name: 'bubble & scrolling', route: 'ui/bubble' },
    { name: 'series & tool tips', route: 'ui/series' },
    { name: 'home', route: 'hc/home' },


    // { path: "themes", component: ThemesComponent }

    // { path: "first", component: FirstComponent },
    // { path: "StockChart", component: StockChartComponent }
  ];

  getMenuItems() {
    return this.menuItems;
  }




  private getPointsapiUrl = 'https://demo-live-data.highcharts.com/aapl-c.json'; // Replace with your actual API endpoint

  getPoints(): Observable<any> {
    return this.http.get<any>(this.getPointsapiUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { HighchartsService } from '../services/highcharts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // menuItems: { name: string; route: string }[] = [];

  menuItems: any[] = [];
  currentRoute: string = '';

  constructor(private router: Router, private menuService: HighchartsService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
      // console.log(this.currentRoute, "currentRoute");
    });
  }

  navigateTo(route: string): void {
    console.log(route, "route");
    this.router.navigate([`${route}`]);
  }
  isActive(route: string): boolean {
    // console.log("this.currentRoute === `ui/${route}`", this.currentRoute === `ui/${route}`);
    // console.log(this.currentRoute, "this.currentRoute");
    // console.log(`${route}`, "`ui/${route}`");

    return this.currentRoute === `/${route}`;
  }
}

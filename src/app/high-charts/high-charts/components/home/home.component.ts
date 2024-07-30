import { Component, OnInit } from '@angular/core';
import { BaseWidget } from '../../helpers/widgetMappers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseWidget implements OnInit {


  // Call the constructor of the base class with the widget ID
  constructor() {
    super('widget1', 'filterSet1');  // Pass specific widget ID
  }

  ngOnInit(): void {
    // Example usage of base class methods
    this.appliedFilters$.subscribe(filters => {
      console.log('Applied filters:', filters);
    });
  }
}


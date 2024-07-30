import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getFilterById } from '../../helpers/filterMapper';
import { FilterResponse } from '../../models/models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filterData: any
  @Output() applyFilters = new EventEmitter<FilterResponse>();

  ngOnInit(): void {
    // Ensure `defaultValue` for checkbox groups is always an array
    if (this.filterData && Array.isArray(this.filterData.filters)) {
      this.filterData.filters.forEach((filter: any) => {
        if (filter.type === 'checkbox-group' && !Array.isArray(filter.defaultValue)) {
          filter.defaultValue = [];
        }
      });
    }
    // throw new Error('Method not implemented.');
  }

  onApply(): void {
    // Logic for applying the filters, e.g., emit an event or call a service
    console.log('Filters applied:', this.filterData);
    this.applyFilters.emit(this.filterData);

  }

  onCheckboxChange(filter: any, value: string, event: any): void {
    const isChecked = event.target.checked;

    if (!Array.isArray(filter.defaultValue)) {
      filter.defaultValue = [];
    }

    if (isChecked) {
      filter.defaultValue.push(value);
    } else {
      const index = filter.defaultValue.indexOf(value);
      if (index > -1) {
        filter.defaultValue.splice(index, 1);
      }
    }
  }

}
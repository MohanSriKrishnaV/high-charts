import { Subject, Observable } from 'rxjs';
import { getResponseById } from './widgetConfig';
import { getFilterById } from './filterMapper';

export abstract class BaseWidget {
    private appliedFiltersSubject = new Subject<any>();
    appliedFilters$: Observable<any> = this.appliedFiltersSubject.asObservable();
    widgetConfigs: any = {};  // Store widget configurations
    filterParam!: any;
    appliedFilter!: any
    constructor(protected pageId: string, protected filterId: string) {
        this.init();
    }

    // Initialize the widget configurations
    private init(): void {
        this.getDashboardConfig();
    }
    getDashboardConfig() {
        console.log(this.pageId, "pageId");
        console.log(this.filterId, "filterId");
        this.widgetConfigs = getResponseById(this.pageId)
        // console.log(widgetConfigs, "widgetConfig");
        this.filterParam = getFilterById(this.filterId)
        // console.log(filterConfig, "filterConfig");

        // throw new Error('Method not implemented.');
    }


    // Method to handle filter application
    protected handleApplyFilters(filterData: any): void {
        console.log('Handling filters in BaseWidget:', filterData);
        this.appliedFilter = filterData
        // this.filterService.applyFilters(filterData);
    }

    // Example of a method to process configuration based on widget ID

}

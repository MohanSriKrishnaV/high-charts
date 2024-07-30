export type FilterOption = {
    value: string;
    label: string;
};

export type FilterType = 'date' | 'single-select' | 'multi-select' | 'checkbox-group';

export type FilterResponse = {
    id: string;
    filters: Array<{
        id: string;
        type: FilterType;
        options?: FilterOption[];
        defaultValue?: any;
    }>;
};



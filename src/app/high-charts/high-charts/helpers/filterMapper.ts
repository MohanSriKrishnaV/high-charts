import { FilterResponse } from "../models/models";


export function getFilterById(id: string): FilterResponse {
    const filters: { [key: string]: FilterResponse } = {
        'filterSet1': {
            id: 'filterSet1',
            filters: [
                {
                    id: 'filter1',
                    type: 'date',
                    defaultValue: null
                },
                {
                    id: 'filter2',
                    type: 'single-select',
                    options: [
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' }
                    ],
                    defaultValue: '1'
                },
                {
                    id: 'filter3',
                    type: 'checkbox-group',
                    options: [
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' }
                    ],
                    defaultValue: [] // Initialize as empty array
                }
            ]
        },
        'filterSet2': {
            id: 'filterSet2',
            filters: [
                {
                    id: 'filter4',
                    type: 'multi-select',
                    options: [
                        { value: '1', label: 'Option 1' },
                        { value: '2', label: 'Option 2' }
                    ],
                    defaultValue: ['1']
                }
            ]
        },
        'default': {
            id: 'default',
            filters: [
                {
                    id: 'defaultFilter',
                    type: 'single-select',
                    options: [{ value: 'default', label: 'Default Option' }],
                    defaultValue: 'default'
                }
            ]
        }
    };

    return filters[id] || filters['default'];
}

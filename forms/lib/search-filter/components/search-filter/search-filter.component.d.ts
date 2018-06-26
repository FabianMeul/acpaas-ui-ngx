import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { FlyoutSize } from '@acpaas-ui/ngx-components/flyout';
import { SearchFilterChoice } from '../../types/search-filter.types';
export declare class SearchFilterComponent implements OnInit, OnChanges, ControlValueAccessor {
    id: string;
    name: string;
    flyoutSize: FlyoutSize;
    flyoutAlign: any;
    label: string;
    labelDeselect: string;
    labelResults: string;
    labelNoResults: string;
    choices: SearchFilterChoice[];
    remote: boolean;
    placeholder: string;
    inputDelay: number;
    showAllByDefault: boolean;
    search: EventEmitter<string>;
    query: string;
    selectedItems: string[];
    filteredChoices: SearchFilterChoice[];
    loading: boolean;
    filterDataFromSearch: (_any?) => {};
    constructor();
    updateModel: (_) => any;
    writeValue(value: string[]): void;
    registerOnChange(onChange: (_) => any): void;
    registerOnTouched(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    filterData(): void;
    clear(): void;
    toggleSelected(choice: string): void;
    private filterChoices();
}

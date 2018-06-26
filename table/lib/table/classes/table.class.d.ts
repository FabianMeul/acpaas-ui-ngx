import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Filter } from '@acpaas-ui/ngx-components/utils';
import { OrderBy } from '../types/table.types';
export declare class Table {
    private rawData;
    private rawColumns;
    filters: Filter[];
    page: any;
    limit: any;
    lastPage: any;
    orderBy: OrderBy;
    filteredData: BehaviorSubject<any[]>;
    rows: BehaviorSubject<any[]>;
    columns: BehaviorSubject<any[]>;
    constructor();
    setRawData(data: any[]): void;
    setRawColumns(columns: any): void;
    setFilters(filters: Filter[]): void;
    addFilter(filter: Filter): void;
    setPage(i: any): void;
    setLimit(i: number): void;
    setOrderBy(o: any): void;
    getOffset(): number;
    setLastPage(): void;
    updateRows(): void;
    updateColumns(): void;
    updateFilteredData(): void;
    filterData(data: any, filters: Filter[]): any;
    sortData(data: any, key: any, order?: string): any;
    selectData(data: any, limit: any, offset: any): any;
    filterHiddenColumns(columns: any): any;
}

import { Component, Input, Output, EventEmitter, InjectionToken, NgModule, Inject, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LabelsModule } from '@acpaas-ui/ngx-components/utils';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PaginationComponent {
    constructor() {
        this.ariaNavigationLabel = 'Paginering';
        this.ariaPreviousLabel = 'Ga naar de vorige pagina';
        this.ariaNextLabel = 'Ga naar de volgende pagina';
        this.display = 'basic';
        this.styling = 'outlined';
        this.update = new EventEmitter();
        this.totalPages = 0;
        this.numbers = [];
        this.instanceId = Math.random().toString(36).substr(2, 9);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setValues();
    }
    /**
     * @return {?}
     */
    next() {
        if (this.currentPage < this.totalPages) {
            this.onUpdate(this.currentPage + 1);
        }
        return false; //  prevent the href being followed
    }
    /**
     * @return {?}
     */
    prev() {
        if (this.currentPage > 1) {
            this.onUpdate(this.currentPage - 1);
        }
        return false; //  prevent the href being followed
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onUpdate(i) {
        this.update.emit(parseInt(/** @type {?} */ (i), 10)); // input from numbers array is a string
        return false; //  prevent the href being followed
    }
    /**
     * @return {?}
     */
    setValues() {
        if (this.totalValues && this.itemsPerPage) {
            this.totalPages = Math.ceil(this.totalValues / this.itemsPerPage);
            const /** @type {?} */ generateNumbers = Array(this.totalPages).fill('').map((e, i) => {
                return String(i + 1);
            });
            if (generateNumbers.length < 8) {
                return this.numbers = generateNumbers;
            }
            if (this.currentPage < 5) {
                this.numbers = generateNumbers.slice(0, 5);
            }
            else if (this.currentPage > this.totalPages - 4) {
                this.numbers = generateNumbers.slice(this.totalPages - 5);
            }
            else {
                this.numbers = generateNumbers.slice(this.currentPage - 2, this.currentPage + 1);
            }
            // First page
            if (this.numbers.indexOf('1') === -1) {
                this.numbers.unshift('1');
            }
            // Last Page
            if (this.numbers.indexOf(String(this.totalPages)) === -1) {
                this.numbers.push(String(this.totalPages));
            }
            // Add dots at the beginning
            if (this.numbers.indexOf('2') === -1) {
                this.numbers.splice(1, 0, '...');
            }
            // Add dots at the end
            if (this.numbers.indexOf(String(this.totalPages - 1)) === -1) {
                this.numbers.splice(this.numbers.length - 1, 0, '...');
            }
        }
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-pagination',
                template: `<nav *ngIf="totalPages > 1" role="navigation" [attr.aria-label]= ariaNavigationLabel>
    <!-- Basic -->
    <ul class="m-pagination" [ngClass]="{'m-pagination--outline': styling === 'outlined' }" *ngIf="display === 'basic'">
        <li class="m-pagination__prev">
            <a [ngClass]="{'is-disabled': currentPage <= 1 }" [attr.href]="currentPage > 1 ? '#' : null" id="pagination-{{ instanceId }}-prev-page" (click)="prev()" [attr.aria-label]= ariaPreviousLabel>
                <i aria-hidden="true" class="fa fa-angle-left"></i>
                <span class="u-screen-reader-only">Previous</span>
            </a>
        </li>
        <li class="m-pagination__next">
            <a [ngClass]="{'is-disabled': currentPage >= totalPages }" [attr.href]="currentPage < totalPages ? '#' : null" id="pagination-{{ instanceId }}-next-page" (click)="next()" [attr.aria-label]= ariaNextLabel>
                <i aria-hidden="true" class="fa fa-angle-right"></i>
                <span class="u-screen-reader-only">Next</span>
            </a>
        </li>
    </ul>

    <!-- Text -->
    <ul class="m-pagination" [ngClass]="{'m-pagination--outline': styling === 'outlined' }" *ngIf="display === 'text'">
        <li class="m-pagination__prev">
            <a [ngClass]="{'is-disabled': currentPage <= 1 }" [attr.href]="currentPage > 1 ? '#' : null" id="pagination-{{ instanceId }}-prev-page" (click)="prev()" [attr.aria-label]= ariaPreviousLabel>
                <i aria-hidden="true" class="fa fa-angle-left"></i>
                <span class="u-screen-reader-only">Previous</span>
            </a>
        </li>
        <li class="m-pagination__label">{{ currentPage }} - {{ totalPages }}</li>
        <li class="m-pagination__next">
            <a [ngClass]="{'is-disabled': currentPage >= totalPages }" [attr.href]="currentPage < totalPages ? '#' : null" id="pagination-{{ instanceId }}-next-page" (click)="next()" [attr.aria-label]= ariaNextLabel>
                <i aria-hidden="true" class="fa fa-angle-right"></i>
                <span class="u-screen-reader-only">Next</span>
            </a>
        </li>
    </ul>

    <!-- Numbers -->
    <ul class="m-pagination" [ngClass]="{'m-pagination--outline': styling === 'outlined' }" *ngIf="display === 'numbers'">
        <li class="m-pagination__prev">
            <a [ngClass]="{'is-disabled': currentPage <= 1 }" [attr.href]="currentPage > 1 ? '#' : null" id="pagination-{{ instanceId }}-prev-page" (click)="prev()" [attr.aria-label]= ariaPreviousLabel>
                <i aria-hidden="true" class="fa fa-angle-left"></i>
                <span class="u-screen-reader-only">Previous</span>
            </a>
        </li>
        <li *ngFor="let number of numbers; let i = index">
            <a [ngClass]="{'is-active': number === currentPage + '' }" href="#" id="pagination-{{ instanceId }}-button-{{ i }}" (click)="onUpdate(number)" [attr.aria-label]="'Pagina ' + number" [attr.aria-current]="number === currentPage + '' ? 'page' : null">{{ number }}</a>
        </li>
        <li class="m-pagination__next">
            <a [ngClass]="{'is-disabled': currentPage >= totalPages }" [attr.href]="currentPage < totalPages ? '#' : null" id="pagination-{{ instanceId }}-next-page" (click)="next()" [attr.aria-label]= ariaNextLabel>
                <i aria-hidden="true" class="fa fa-angle-right"></i>
                <span class="u-screen-reader-only">Next</span>
            </a>
        </li>
    </ul>
</nav>
`,
            },] },
];
PaginationComponent.propDecorators = {
    ariaNavigationLabel: [{ type: Input }],
    ariaPreviousLabel: [{ type: Input }],
    ariaNextLabel: [{ type: Input }],
    currentPage: [{ type: Input }],
    display: [{ type: Input }],
    itemsPerPage: [{ type: Input }],
    styling: [{ type: Input }],
    totalValues: [{ type: Input }],
    update: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ PAGINATION_LABELS = new InjectionToken('paginationLabels');
const /** @type {?} */ PAGINATION_LABELS_DEFAULT = {
    PAGINATION_LABEL: '%{currentPage} of %{total}',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    PaginationComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = PAGINATION_LABELS_DEFAULT;
class PaginationModule {
    /**
     * @param {?} paginationLabels
     * @return {?}
     */
    static forChild(paginationLabels) {
        return {
            ngModule: PaginationModule,
            providers: [
                { provide: PAGINATION_LABELS, useValue: paginationLabels },
            ],
        };
    }
}
PaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
                ],
                providers: [
                    { provide: PAGINATION_LABELS, useValue: ɵ0 },
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ ITEM_COUNTER_LABEL = new InjectionToken('itemCounterLabels');
const /** @type {?} */ ITEMS_PER_PAGE_LABEL = new InjectionToken('itemsPerPageLabels');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ItemCounterComponent {
    /**
     * @param {?} label
     */
    constructor(label) {
        this.setClass = true;
        this.currentFrom = 1;
        this.currentTo = this.amountPerPage;
        if (label && !this.label) {
            this.label = label;
        }
        else if (!this.label) {
            this.label = {
                singular: '%{currentFrom} - %{currentTo} of %{totalAmount} item',
                plural: '%{currentFrom} - %{currentTo} of %{totalAmount} items',
            };
        }
    }
    /**
     * @return {?}
     */
    setFromTo() {
        this.currentFrom = (this.amountPerPage * (this.currentPage - 1)) + 1;
        /* tslint:disable:max-line-length */
        this.currentTo = (this.amountPerPage * this.currentPage) <= this.totalAmount ? this.amountPerPage * this.currentPage : this.totalAmount;
        /* tslint:enable:max-line-length */
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setFromTo();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setFromTo();
    }
}
ItemCounterComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-item-counter',
                template: `<div class="m-item-counter">
    {{ label }}
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`:host{display:inline-block;vertical-align:top}.m-item-counter{line-height:3rem}`],
            },] },
];
/** @nocollapse */
ItemCounterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ITEM_COUNTER_LABEL,] }] }
];
ItemCounterComponent.propDecorators = {
    setClass: [{ type: HostBinding, args: ['class.aui-item-counter',] }],
    currentPage: [{ type: Input }],
    totalAmount: [{ type: Input }],
    amountPerPage: [{ type: Input }],
    label: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const sizes = {
    S: /** @type {?} */ ('S'),
    R: /** @type {?} */ ('R'),
    L: /** @type {?} */ ('L'),
};
class ItemsPerPageComponent {
    /**
     * @param {?} label
     */
    constructor(label) {
        this.inputSizes = {
            S: 'a-input--small',
            R: '',
            L: 'a-input--large',
        };
        this.setClass = true;
        this.size = sizes.R;
        this.returnAmount = new EventEmitter();
        if (label && !this.label) {
            this.label = label;
        }
        else if (!this.label) {
            this.label = {
                singular: 'item per page',
                plural: 'items per page',
            };
        }
    }
    /**
     * @param {?} changedValue
     * @return {?}
     */
    setAmount(changedValue) {
        this.amountPerPage = changedValue;
        this.returnAmount.emit(this.amountPerPage);
    }
}
ItemsPerPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-items-per-page',
                template: `<div class="m-items-per-page">
    <div class="a-input has-icon-right" [ngClass]="[inputSizes[size]]">
        <div class="a-input__wrapper">
            <select name="input-selected" id="input-select" [ngModel]="amountPerPage" (ngModelChange)="setAmount($event)">
                <option *ngFor="let amountOption of selectOptions" [value]="amountOption">{{ amountOption }}</option>
            </select>
            <span class="fa fa-angle-down"></span>
        </div>

        <label class="a-input__label" for="input-text">{{ label }}</label>
    </div>
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`:host{display:inline-block;vertical-align:top}.m-items-per-page .a-input .a-input__wrapper{display:inline-block;margin-right:.5rem}`],
            },] },
];
/** @nocollapse */
ItemsPerPageComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ITEMS_PER_PAGE_LABEL,] }] }
];
ItemsPerPageComponent.propDecorators = {
    setClass: [{ type: HostBinding, args: ['class.aui-items-per-page',] }],
    label: [{ type: Input }],
    size: [{ type: Input }],
    selectOptions: [{ type: Input }],
    amountPerPage: [{ type: Input }],
    returnAmount: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components$1 = [
    ItemCounterComponent,
    ItemsPerPageComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0$1 = undefined, ɵ1 = undefined;
class ItemCounterModule {
    /**
     * @param {?} itemCounterLabel
     * @param {?} itemsPerPageLabel
     * @return {?}
     */
    static forChild(itemCounterLabel, itemsPerPageLabel) {
        return {
            ngModule: ItemCounterModule,
            providers: [
                { provide: ITEM_COUNTER_LABEL, useValue: itemCounterLabel },
                { provide: ITEMS_PER_PAGE_LABEL, useValue: itemsPerPageLabel },
            ],
        };
    }
}
ItemCounterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    LabelsModule,
                ],
                declarations: [
                    ...Components$1,
                ],
                exports: [
                    ...Components$1,
                ],
                providers: [
                    { provide: ITEM_COUNTER_LABEL, useValue: ɵ0$1 },
                    { provide: ITEMS_PER_PAGE_LABEL, useValue: ɵ1 },
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { PaginationComponent, PAGINATION_LABELS, PAGINATION_LABELS_DEFAULT, PaginationModule, ItemCounterComponent, ItemsPerPageComponent, ITEM_COUNTER_LABEL, ITEMS_PER_PAGE_LABEL, ItemCounterModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcGFnaW5hdGlvbi9saWIvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb25mLnRzIiwibmc6Ly9wYWdpbmF0aW9uL2xpYi9wYWdpbmF0aW9uL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29uZi50cyIsIm5nOi8vcGFnaW5hdGlvbi9saWIvaXRlbS1jb3VudGVyL2NvbXBvbmVudHMvaXRlbS1jb3VudGVyL2l0ZW0tY291bnRlci5jb21wb25lbnQudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL2l0ZW0tY291bnRlci9jb21wb25lbnRzL2l0ZW1zLXBlci1wYWdlL2l0ZW1zLXBlci1wYWdlLmNvbXBvbmVudC50cyIsIm5nOi8vcGFnaW5hdGlvbi9saWIvaXRlbS1jb3VudGVyL2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3BhZ2luYXRpb24vbGliL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5hdGlvbkRpc3BsYXkgfSBmcm9tICcuLi8uLi90eXBlcy9wYWdpbmF0aW9uLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXBhZ2luYXRpb24nLFxuXHR0ZW1wbGF0ZTogYDxuYXYgKm5nSWY9XCJ0b3RhbFBhZ2VzID4gMVwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFOYXZpZ2F0aW9uTGFiZWw+XG4gICAgPCEtLSBCYXNpYyAtLT5cbiAgICA8dWwgY2xhc3M9XCJtLXBhZ2luYXRpb25cIiBbbmdDbGFzc109XCJ7J20tcGFnaW5hdGlvbi0tb3V0bGluZSc6IHN0eWxpbmcgPT09ICdvdXRsaW5lZCcgfVwiICpuZ0lmPVwiZGlzcGxheSA9PT0gJ2Jhc2ljJ1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX3ByZXZcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA8PSAxIH1cIiBbYXR0ci5ocmVmXT1cImN1cnJlbnRQYWdlID4gMSA/ICcjJyA6IG51bGxcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1wcmV2LXBhZ2VcIiAoY2xpY2spPVwicHJldigpXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFQcmV2aW91c0xhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInUtc2NyZWVuLXJlYWRlci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm0tcGFnaW5hdGlvbl9fbmV4dFwiPlxuICAgICAgICAgICAgPGEgW25nQ2xhc3NdPVwieydpcy1kaXNhYmxlZCc6IGN1cnJlbnRQYWdlID49IHRvdGFsUGFnZXMgfVwiIFthdHRyLmhyZWZdPVwiY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzID8gJyMnIDogbnVsbFwiIGlkPVwicGFnaW5hdGlvbi17eyBpbnN0YW5jZUlkIH19LW5leHQtcGFnZVwiIChjbGljayk9XCJuZXh0KClcIiBbYXR0ci5hcmlhLWxhYmVsXT0gYXJpYU5leHRMYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidS1zY3JlZW4tcmVhZGVyLW9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG5cbiAgICA8IS0tIFRleHQgLS0+XG4gICAgPHVsIGNsYXNzPVwibS1wYWdpbmF0aW9uXCIgW25nQ2xhc3NdPVwieydtLXBhZ2luYXRpb24tLW91dGxpbmUnOiBzdHlsaW5nID09PSAnb3V0bGluZWQnIH1cIiAqbmdJZj1cImRpc3BsYXkgPT09ICd0ZXh0J1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX3ByZXZcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA8PSAxIH1cIiBbYXR0ci5ocmVmXT1cImN1cnJlbnRQYWdlID4gMSA/ICcjJyA6IG51bGxcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1wcmV2LXBhZ2VcIiAoY2xpY2spPVwicHJldigpXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFQcmV2aW91c0xhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInUtc2NyZWVuLXJlYWRlci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm0tcGFnaW5hdGlvbl9fbGFiZWxcIj57eyBjdXJyZW50UGFnZSB9fSAtIHt7IHRvdGFsUGFnZXMgfX08L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX25leHRcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzIH1cIiBbYXR0ci5ocmVmXT1cImN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcyA/ICcjJyA6IG51bGxcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1uZXh0LXBhZ2VcIiAoY2xpY2spPVwibmV4dCgpXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFOZXh0TGFiZWw+XG4gICAgICAgICAgICAgICAgPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInUtc2NyZWVuLXJlYWRlci1vbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuXG4gICAgPCEtLSBOdW1iZXJzIC0tPlxuICAgIDx1bCBjbGFzcz1cIm0tcGFnaW5hdGlvblwiIFtuZ0NsYXNzXT1cInsnbS1wYWdpbmF0aW9uLS1vdXRsaW5lJzogc3R5bGluZyA9PT0gJ291dGxpbmVkJyB9XCIgKm5nSWY9XCJkaXNwbGF5ID09PSAnbnVtYmVycydcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwibS1wYWdpbmF0aW9uX19wcmV2XCI+XG4gICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7J2lzLWRpc2FibGVkJzogY3VycmVudFBhZ2UgPD0gMSB9XCIgW2F0dHIuaHJlZl09XCJjdXJyZW50UGFnZSA+IDEgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tcHJldi1wYWdlXCIgKGNsaWNrKT1cInByZXYoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhUHJldmlvdXNMYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IG51bWJlciBvZiBudW1iZXJzOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7J2lzLWFjdGl2ZSc6IG51bWJlciA9PT0gY3VycmVudFBhZ2UgKyAnJyB9XCIgaHJlZj1cIiNcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1idXR0b24te3sgaSB9fVwiIChjbGljayk9XCJvblVwZGF0ZShudW1iZXIpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCInUGFnaW5hICcgKyBudW1iZXJcIiBbYXR0ci5hcmlhLWN1cnJlbnRdPVwibnVtYmVyID09PSBjdXJyZW50UGFnZSArICcnID8gJ3BhZ2UnIDogbnVsbFwiPnt7IG51bWJlciB9fTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibS1wYWdpbmF0aW9uX19uZXh0XCI+XG4gICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7J2lzLWRpc2FibGVkJzogY3VycmVudFBhZ2UgPj0gdG90YWxQYWdlcyB9XCIgW2F0dHIuaHJlZl09XCJjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tbmV4dC1wYWdlXCIgKGNsaWNrKT1cIm5leHQoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhTmV4dExhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbjwvbmF2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdEBJbnB1dCgpIHB1YmxpYyBhcmlhTmF2aWdhdGlvbkxhYmVsID0gJ1BhZ2luZXJpbmcnO1xuXHRASW5wdXQoKSBwdWJsaWMgYXJpYVByZXZpb3VzTGFiZWwgPSAnR2EgbmFhciBkZSB2b3JpZ2UgcGFnaW5hJztcblx0QElucHV0KCkgcHVibGljIGFyaWFOZXh0TGFiZWwgPSAnR2EgbmFhciBkZSB2b2xnZW5kZSBwYWdpbmEnO1xuXHRASW5wdXQoKSBwdWJsaWMgY3VycmVudFBhZ2U6IG51bWJlcjtcblx0QElucHV0KCkgcHVibGljIGRpc3BsYXk6IFBhZ2luYXRpb25EaXNwbGF5ID0gJ2Jhc2ljJztcblx0QElucHV0KCkgcHVibGljIGl0ZW1zUGVyUGFnZTogbnVtYmVyO1xuXHRASW5wdXQoKSBwdWJsaWMgc3R5bGluZyA9ICdvdXRsaW5lZCc7XG5cdEBJbnB1dCgpIHB1YmxpYyB0b3RhbFZhbHVlczogbnVtYmVyO1xuXHRAT3V0cHV0KCkgcHVibGljIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgdG90YWxQYWdlcyA9IDA7XG5cdHB1YmxpYyBudW1iZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHQvLyBVc2UgdGhpcyB0byBoYXZlIHVuaXF1ZSBpZHMgd2l0aCBtdWx0aXBsZSBwYWdpbmF0aW9uIGluc3RhbmNlcyBvbiBvbmUgcGFnZS5cblx0cHVibGljIGluc3RhbmNlSWQ6IHN0cmluZyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoKTtcblx0fVxuXG5cdHB1YmxpYyBuZXh0KCkge1xuXHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlIDwgdGhpcy50b3RhbFBhZ2VzKSB7XG5cdFx0XHR0aGlzLm9uVXBkYXRlKHRoaXMuY3VycmVudFBhZ2UgKyAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyAgcHJldmVudCB0aGUgaHJlZiBiZWluZyBmb2xsb3dlZFxuXHR9XG5cblx0cHVibGljIHByZXYoKSB7XG5cdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPiAxKSB7XG5cdFx0XHR0aGlzLm9uVXBkYXRlKHRoaXMuY3VycmVudFBhZ2UgLSAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyAgcHJldmVudCB0aGUgaHJlZiBiZWluZyBmb2xsb3dlZFxuXHR9XG5cblx0cHVibGljIG9uVXBkYXRlKGk6IG51bWJlcnxzdHJpbmcpIHtcblx0XHR0aGlzLnVwZGF0ZS5lbWl0KHBhcnNlSW50KGkgYXMgc3RyaW5nLCAxMCkpOyAvLyBpbnB1dCBmcm9tIG51bWJlcnMgYXJyYXkgaXMgYSBzdHJpbmdcblx0XHRyZXR1cm4gZmFsc2U7IC8vICBwcmV2ZW50IHRoZSBocmVmIGJlaW5nIGZvbGxvd2VkXG5cdH1cblxuXHRwcml2YXRlIHNldFZhbHVlcygpIHtcblx0XHRpZiAodGhpcy50b3RhbFZhbHVlcyAmJiB0aGlzLml0ZW1zUGVyUGFnZSkge1xuXHRcdFx0dGhpcy50b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHRoaXMudG90YWxWYWx1ZXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XG5cblx0XHRcdGNvbnN0IGdlbmVyYXRlTnVtYmVycyA9IEFycmF5KHRoaXMudG90YWxQYWdlcykuZmlsbCgnJykubWFwKChlLCBpKSA9PiB7XG5cdFx0XHRcdHJldHVybiBTdHJpbmcoaSArIDEpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChnZW5lcmF0ZU51bWJlcnMubGVuZ3RoIDwgOCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1iZXJzID0gZ2VuZXJhdGVOdW1iZXJzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA8IDUpIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzID0gZ2VuZXJhdGVOdW1iZXJzLnNsaWNlKDAsIDUpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmN1cnJlbnRQYWdlID4gdGhpcy50b3RhbFBhZ2VzIC0gNCkge1xuXHRcdFx0XHR0aGlzLm51bWJlcnMgPSBnZW5lcmF0ZU51bWJlcnMuc2xpY2UodGhpcy50b3RhbFBhZ2VzIC0gNSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm51bWJlcnMgPSBnZW5lcmF0ZU51bWJlcnMuc2xpY2UodGhpcy5jdXJyZW50UGFnZSAtIDIsIHRoaXMuY3VycmVudFBhZ2UgKyAxKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlyc3QgcGFnZVxuXHRcdFx0aWYgKHRoaXMubnVtYmVycy5pbmRleE9mKCcxJykgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMubnVtYmVycy51bnNoaWZ0KCcxJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIExhc3QgUGFnZVxuXHRcdFx0aWYgKHRoaXMubnVtYmVycy5pbmRleE9mKFN0cmluZyh0aGlzLnRvdGFsUGFnZXMpKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzLnB1c2goU3RyaW5nKHRoaXMudG90YWxQYWdlcykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZG90cyBhdCB0aGUgYmVnaW5uaW5nXG5cdFx0XHRpZiAodGhpcy5udW1iZXJzLmluZGV4T2YoJzInKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzLnNwbGljZSgxLCAwLCAnLi4uJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBkb3RzIGF0IHRoZSBlbmRcblx0XHRcdGlmICh0aGlzLm51bWJlcnMuaW5kZXhPZihTdHJpbmcodGhpcy50b3RhbFBhZ2VzIC0gMSkpID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLm51bWJlcnMuc3BsaWNlKHRoaXMubnVtYmVycy5sZW5ndGggLSAxLCAwLCAnLi4uJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmF0aW9uTGFiZWxzIH0gZnJvbSAnLi90eXBlcy9wYWdpbmF0aW9uLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fTEFCRUxTID0gbmV3IEluamVjdGlvblRva2VuPFBhZ2luYXRpb25MYWJlbHM+KCdwYWdpbmF0aW9uTGFiZWxzJyk7XG5cbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX0xBQkVMU19ERUZBVUxUOiBQYWdpbmF0aW9uTGFiZWxzID0ge1xuXHRQQUdJTkFUSU9OX0xBQkVMOiAnJXtjdXJyZW50UGFnZX0gb2YgJXt0b3RhbH0nLFxufTtcbiIsImltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0UGFnaW5hdGlvbkNvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uTGFiZWxzIH0gZnJvbSAnLi90eXBlcy9wYWdpbmF0aW9uLnR5cGVzJztcbmltcG9ydCB7IFBBR0lOQVRJT05fTEFCRUxTLCBQQUdJTkFUSU9OX0xBQkVMU19ERUZBVUxUIH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbmYnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBQQUdJTkFUSU9OX0xBQkVMUywgdXNlVmFsdWU6IFBBR0lOQVRJT05fTEFCRUxTX0RFRkFVTFQgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk1vZHVsZSB7XG5cdHN0YXRpYyBmb3JDaGlsZChcblx0XHRwYWdpbmF0aW9uTGFiZWxzOiBQYWdpbmF0aW9uTGFiZWxzXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogUGFnaW5hdGlvbk1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7IHByb3ZpZGU6IFBBR0lOQVRJT05fTEFCRUxTLCB1c2VWYWx1ZTogcGFnaW5hdGlvbkxhYmVscyB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgSVRFTV9DT1VOVEVSX0xBQkVMID0gbmV3IEluamVjdGlvblRva2VuPExhYmVsPignaXRlbUNvdW50ZXJMYWJlbHMnKTtcbmV4cG9ydCBjb25zdCBJVEVNU19QRVJfUEFHRV9MQUJFTCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMYWJlbD4oJ2l0ZW1zUGVyUGFnZUxhYmVscycpO1xuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPbkluaXQsXG5cdE9uQ2hhbmdlcyxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJVEVNX0NPVU5URVJfTEFCRUwgfSBmcm9tICcuLi8uLi9pdGVtLWNvdW50ZXIuY29uZic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1pdGVtLWNvdW50ZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLWl0ZW0tY291bnRlclwiPlxuICAgIHt7IGxhYmVsIH19XG48L2Rpdj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wfS5tLWl0ZW0tY291bnRlcntsaW5lLWhlaWdodDozcmVtfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ291bnRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktaXRlbS1jb3VudGVyJykgc2V0Q2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGN1cnJlbnRQYWdlOiBudW1iZXI7XG5cdEBJbnB1dCgpIHRvdGFsQW1vdW50OiBudW1iZXI7XG5cdEBJbnB1dCgpIGFtb3VudFBlclBhZ2U6IG51bWJlcjtcblx0QElucHV0KCkgbGFiZWw6IGFueTtcblxuXHRwdWJsaWMgY3VycmVudEZyb20gPSAxO1xuXHRwdWJsaWMgY3VycmVudFRvID0gdGhpcy5hbW91bnRQZXJQYWdlO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoSVRFTV9DT1VOVEVSX0xBQkVMKSBsYWJlbDogYW55KSB7XG5cdFx0aWYgKGxhYmVsICYmICF0aGlzLmxhYmVsKSB7XG5cdFx0XHR0aGlzLmxhYmVsID0gbGFiZWw7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5sYWJlbCkge1xuXHRcdFx0dGhpcy5sYWJlbCA9IHtcblx0XHRcdFx0c2luZ3VsYXI6ICcle2N1cnJlbnRGcm9tfSAtICV7Y3VycmVudFRvfSBvZiAle3RvdGFsQW1vdW50fSBpdGVtJyxcblx0XHRcdFx0cGx1cmFsOiAnJXtjdXJyZW50RnJvbX0gLSAle2N1cnJlbnRUb30gb2YgJXt0b3RhbEFtb3VudH0gaXRlbXMnLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgc2V0RnJvbVRvKCkge1xuXHRcdHRoaXMuY3VycmVudEZyb20gPSAodGhpcy5hbW91bnRQZXJQYWdlICogKHRoaXMuY3VycmVudFBhZ2UgLSAxKSkgKyAxO1xuXHRcdC8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXHRcdHRoaXMuY3VycmVudFRvID0gKHRoaXMuYW1vdW50UGVyUGFnZSAqIHRoaXMuY3VycmVudFBhZ2UpIDw9IHRoaXMudG90YWxBbW91bnQgPyB0aGlzLmFtb3VudFBlclBhZ2UgKiB0aGlzLmN1cnJlbnRQYWdlIDogdGhpcy50b3RhbEFtb3VudDtcblx0XHQvKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXHR9XG5cblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc2V0RnJvbVRvKCk7XG5cdH1cblxuXHRwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG5cdFx0dGhpcy5zZXRGcm9tVG8oKTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbmplY3QsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRV9MQUJFTCB9IGZyb20gJy4uLy4uL2l0ZW0tY291bnRlci5jb25mJztcblxuZXhwb3J0IGVudW0gc2l6ZXMge1xuXHRTID0gPGFueT4nUycsXG5cdFIgPSA8YW55PidSJyxcblx0TCA9IDxhbnk+J0wnLFxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktaXRlbXMtcGVyLXBhZ2UnLFxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtLWl0ZW1zLXBlci1wYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cImEtaW5wdXQgaGFzLWljb24tcmlnaHRcIiBbbmdDbGFzc109XCJbaW5wdXRTaXplc1tzaXplXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImEtaW5wdXRfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImlucHV0LXNlbGVjdGVkXCIgaWQ9XCJpbnB1dC1zZWxlY3RcIiBbbmdNb2RlbF09XCJhbW91bnRQZXJQYWdlXCIgKG5nTW9kZWxDaGFuZ2UpPVwic2V0QW1vdW50KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBhbW91bnRPcHRpb24gb2Ygc2VsZWN0T3B0aW9uc1wiIFt2YWx1ZV09XCJhbW91bnRPcHRpb25cIj57eyBhbW91bnRPcHRpb24gfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1hbmdsZS1kb3duXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJhLWlucHV0X19sYWJlbFwiIGZvcj1cImlucHV0LXRleHRcIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgPC9kaXY+XG48L2Rpdj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wfS5tLWl0ZW1zLXBlci1wYWdlIC5hLWlucHV0IC5hLWlucHV0X193cmFwcGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDouNXJlbX1gXSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNQZXJQYWdlQ29tcG9uZW50IHtcblx0cHVibGljIGlucHV0U2l6ZXMgPSB7XG5cdFx0UzogJ2EtaW5wdXQtLXNtYWxsJyxcblx0XHRSOiAnJyxcblx0XHRMOiAnYS1pbnB1dC0tbGFyZ2UnLFxuXHR9O1xuXG5cdEBIb3N0QmluZGluZygnY2xhc3MuYXVpLWl0ZW1zLXBlci1wYWdlJykgc2V0Q2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGxhYmVsOiBhbnk7XG5cdEBJbnB1dCgpIHNpemU6IHNpemVzID0gc2l6ZXMuUjtcblx0QElucHV0KCkgc2VsZWN0T3B0aW9uczogbnVtYmVyW107XG5cdEBJbnB1dCgpIGFtb3VudFBlclBhZ2U6IG51bWJlcjtcblx0QE91dHB1dCgpIHJldHVybkFtb3VudDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KElURU1TX1BFUl9QQUdFX0xBQkVMKSBsYWJlbFxuXHQpIHtcblx0XHRpZiAobGFiZWwgJiYgIXRoaXMubGFiZWwpIHtcblx0XHRcdHRoaXMubGFiZWwgPSBsYWJlbDtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmxhYmVsKSB7XG5cdFx0XHR0aGlzLmxhYmVsID0ge1xuXHRcdFx0XHRzaW5ndWxhcjogJ2l0ZW0gcGVyIHBhZ2UnLFxuXHRcdFx0XHRwbHVyYWw6ICdpdGVtcyBwZXIgcGFnZScsXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBzZXRBbW91bnQoY2hhbmdlZFZhbHVlKSB7XG5cdFx0dGhpcy5hbW91bnRQZXJQYWdlID0gY2hhbmdlZFZhbHVlO1xuXHRcdHRoaXMucmV0dXJuQW1vdW50LmVtaXQodGhpcy5hbW91bnRQZXJQYWdlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSXRlbUNvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tY291bnRlci9pdGVtLWNvdW50ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1zUGVyUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbXMtcGVyLXBhZ2UvaXRlbXMtcGVyLXBhZ2UuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudHMgPSBbXG5cdEl0ZW1Db3VudGVyQ29tcG9uZW50LFxuXHRJdGVtc1BlclBhZ2VDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IExhYmVsc01vZHVsZSwgTGFiZWwgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbmltcG9ydCB7IElURU1fQ09VTlRFUl9MQUJFTCwgSVRFTVNfUEVSX1BBR0VfTEFCRUwgfSBmcm9tICcuL2l0ZW0tY291bnRlci5jb25mJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRMYWJlbHNNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IElURU1fQ09VTlRFUl9MQUJFTCwgdXNlVmFsdWU6IHVuZGVmaW5lZCB9LFxuXHRcdHsgcHJvdmlkZTogSVRFTVNfUEVSX1BBR0VfTEFCRUwsIHVzZVZhbHVlOiB1bmRlZmluZWQgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvdW50ZXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0aXRlbUNvdW50ZXJMYWJlbDogTGFiZWwsXG5cdFx0aXRlbXNQZXJQYWdlTGFiZWw6IExhYmVsXG5cdCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSXRlbUNvdW50ZXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBJVEVNX0NPVU5URVJfTEFCRUwsIHVzZVZhbHVlOiBpdGVtQ291bnRlckxhYmVsIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogSVRFTVNfUEVSX1BBR0VfTEFCRUwsIHVzZVZhbHVlOiBpdGVtc1BlclBhZ2VMYWJlbCB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O21DQThEdUMsWUFBWTtpQ0FDZCwwQkFBMEI7NkJBQzlCLDRCQUE0Qjt1QkFFZixPQUFPO3VCQUUxQixVQUFVO3NCQUVWLElBQUksWUFBWSxFQUFFOzBCQUV4QixDQUFDO3VCQUNNLEVBQUU7MEJBRUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Ozs7SUFFNUQsV0FBVztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Ozs7O0lBR1gsSUFBSTtRQUNWLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sS0FBSyxDQUFDOzs7OztJQUdQLElBQUk7UUFDVixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sS0FBSyxDQUFDOzs7Ozs7SUFHUCxRQUFRLENBQUMsQ0FBZ0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxtQkFBQyxDQUFXLEdBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxPQUFPLEtBQUssQ0FBQzs7Ozs7SUFHTixTQUFTO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFD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
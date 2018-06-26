import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef, Directive, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectableListComponent {
    constructor() {
        this.index = 0;
        this.selected = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        this.selected.emit(item);
    }
    /**
     * @param {?} input
     * @return {?}
     */
    formatLabel(input) {
        const /** @type {?} */ inputString = (this.label ? input[this.label] : input);
        if (!this.search) {
            return inputString;
        }
        const /** @type {?} */ regEx = new RegExp(this.search, 'ig');
        return inputString.replace(regEx, '<b>' + this.search + '</b>');
    }
}
SelectableListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-selectable-list',
                template: `<ul class="aui-selectable-list m-selectable-list m-selectable-list--no-border">
    <li class="m-selectable-list__item" *ngFor="let item of items; let i=index;"  (click)="selectItem(item)" [ngClass]="i === index ? 'm-selectable-list__item--active' : ''">
        <span *ngIf="!template && !itemTemplate" [innerHTML]="formatLabel(item)"></span>
        <ng-template *ngIf="template" [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{ item: item }"></ng-template>
        <ng-template *ngIf="itemTemplate" [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{ $implicit: item }"></ng-template>
    </li>
</ul>
`,
            },] },
];
SelectableListComponent.propDecorators = {
    items: [{ type: Input }],
    index: [{ type: Input }],
    search: [{ type: Input }],
    label: [{ type: Input }],
    itemTemplate: [{ type: Input }],
    selected: [{ type: Output }],
    template: [{ type: ContentChild, args: [TemplateRef,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectableActionsDirective {
    constructor() {
        this.keyArrowUp = new EventEmitter();
        this.keyArrowDown = new EventEmitter();
        this.keyEnter = new EventEmitter();
        this.keyEscape = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        switch (e.key) {
            case 'ArrowUp':
                // UP
                e.preventDefault(); // Do not change cursor pos
                this.keyArrowUp.emit(e);
                break;
            case 'ArrowDown':
                // DOWN
                e.preventDefault(); // Do not change cursor pos
                this.keyArrowDown.emit(e);
                break;
            case 'Enter':
                // ENTER
                this.keyEnter.emit(e);
                break;
            case 'Escape':
                // ESCAPE
                this.keyEscape.emit(e);
                break;
        }
    }
}
SelectableActionsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auiSelectableActions]',
                exportAs: 'auiSelectableActions',
            },] },
];
SelectableActionsDirective.propDecorators = {
    keyArrowUp: [{ type: Output }],
    keyArrowDown: [{ type: Output }],
    keyEnter: [{ type: Output }],
    keyEscape: [{ type: Output }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Components = [
    SelectableListComponent,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ Directives = [
    SelectableActionsDirective,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectableListModule {
}
SelectableListModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    Components,
                    Directives,
                ],
                exports: [
                    Components,
                    Directives,
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

export { SelectableListComponent, SelectableActionsDirective, SelectableListModule, Components as ɵa, Directives as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1saXN0LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zZWxlY3RhYmxlLWxpc3QvbGliL3NlbGVjdGFibGUtbGlzdC9jb21wb25lbnRzL3NlbGVjdGFibGUtbGlzdC9zZWxlY3RhYmxlLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9zZWxlY3RhYmxlLWxpc3QvbGliL3NlbGVjdGFibGUtbGlzdC9kaXJlY3RpdmVzL3NlbGVjdGFibGUtYWN0aW9ucy5kaXJlY3RpdmUudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9saWIvc2VsZWN0YWJsZS1saXN0L2NvbXBvbmVudHMvaW5kZXgudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9saWIvc2VsZWN0YWJsZS1saXN0L2RpcmVjdGl2ZXMvaW5kZXgudHMiLCJuZzovL3NlbGVjdGFibGUtbGlzdC9saWIvc2VsZWN0YWJsZS1saXN0L3NlbGVjdGFibGUtbGlzdC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNlbGVjdGFibGUtbGlzdCcsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwiYXVpLXNlbGVjdGFibGUtbGlzdCBtLXNlbGVjdGFibGUtbGlzdCBtLXNlbGVjdGFibGUtbGlzdC0tbm8tYm9yZGVyXCI+XG4gICAgPGxpIGNsYXNzPVwibS1zZWxlY3RhYmxlLWxpc3RfX2l0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGk9aW5kZXg7XCIgIChjbGljayk9XCJzZWxlY3RJdGVtKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaSA9PT0gaW5kZXggPyAnbS1zZWxlY3RhYmxlLWxpc3RfX2l0ZW0tLWFjdGl2ZScgOiAnJ1wiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZSAmJiAhaXRlbVRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXRMYWJlbChpdGVtKVwiPjwvc3Bhbj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICpuZ0lmPVwidGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGl0ZW06IGl0ZW0gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdJZj1cIml0ZW1UZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW1UZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2xpPlxuPC91bD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGFibGVMaXN0Q29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGl0ZW1zOiBhbnlbXTtcblx0QElucHV0KCkgcHVibGljIGluZGV4ID0gMDtcblx0QElucHV0KCkgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0cHVibGljIHNlbGVjdEl0ZW0oaXRlbSkge1xuXHRcdHRoaXMuc2VsZWN0ZWQuZW1pdChpdGVtKTtcblx0fVxuXG5cdHB1YmxpYyBmb3JtYXRMYWJlbChpbnB1dDogYW55KSB7XG5cdFx0Y29uc3QgaW5wdXRTdHJpbmcgPSAodGhpcy5sYWJlbCA/IGlucHV0W3RoaXMubGFiZWxdIDogaW5wdXQpO1xuXG5cdFx0aWYgKCF0aGlzLnNlYXJjaCkge1xuXHRcdFx0cmV0dXJuIGlucHV0U3RyaW5nO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlZ0V4ID0gbmV3IFJlZ0V4cCh0aGlzLnNlYXJjaCwgJ2lnJyk7XG5cdFx0cmV0dXJuIGlucHV0U3RyaW5nLnJlcGxhY2UocmVnRXgsICc8Yj4nICsgdGhpcy5zZWFyY2ggKyAnPC9iPicpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aVNlbGVjdGFibGVBY3Rpb25zXScsXG5cdGV4cG9ydEFzOiAnYXVpU2VsZWN0YWJsZUFjdGlvbnMnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RhYmxlQWN0aW9uc0RpcmVjdGl2ZSB7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5QXJyb3dVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHB1YmxpYyBrZXlBcnJvd0Rvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5RW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5RXNjYXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuXHRwdWJsaWMgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2ggKGUua2V5KSB7XG5cdFx0XHRjYXNlICdBcnJvd1VwJzogLy8gVVBcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBEbyBub3QgY2hhbmdlIGN1cnNvciBwb3Ncblx0XHRcdFx0dGhpcy5rZXlBcnJvd1VwLmVtaXQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dEb3duJzogLy8gRE9XTlxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7IC8vIERvIG5vdCBjaGFuZ2UgY3Vyc29yIHBvc1xuXHRcdFx0XHR0aGlzLmtleUFycm93RG93bi5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0VudGVyJzogLy8gRU5URVJcblx0XHRcdFx0dGhpcy5rZXlFbnRlci5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0VzY2FwZSc6IC8vIEVTQ0FQRVxuXHRcdFx0XHR0aGlzLmtleUVzY2FwZS5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IFNlbGVjdGFibGVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRzID0gW1xuXHRTZWxlY3RhYmxlTGlzdENvbXBvbmVudCxcbl07XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlQWN0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vc2VsZWN0YWJsZS1hY3Rpb25zLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBEaXJlY3RpdmVzID0gW1xuXHRTZWxlY3RhYmxlQWN0aW9uc0RpcmVjdGl2ZSxcbl07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgeyBEaXJlY3RpdmVzIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XHREaXJlY3RpdmVzLFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RhYmxlTGlzdE1vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O3FCQWV5QixDQUFDO3dCQUtzQixJQUFJLFlBQVksRUFBRTs7Ozs7O0lBSTFELFVBQVUsQ0FBQyxJQUFJO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFHbkIsV0FBVyxDQUFDLEtBQVU7UUFDNUIsdUJBQU0sV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPLFdBQVcsQ0FBQztTQUNuQjtRQUVELHVCQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7Ozs7WUFsQ2pFLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Q0FPVjthQUNBOzs7b0JBRUMsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUVMLE1BQU07dUJBRU4sWUFBWSxTQUFDLFdBQVc7Ozs7Ozs7QUN0QjFCOzswQkFPK0IsSUFBSSxZQUFZLEVBQUU7NEJBQ2hCLElBQUksWUFBWSxFQUFFO3dCQUN0QixJQUFJLFlBQVksRUFBRTt5QkFDakIsSUFBSSxZQUFZLEVBQUU7Ozs7OztJQUd4QyxTQUFTLENBQUMsQ0FBZ0I7UUFDaEMsUUFBUSxDQUFDLENBQUMsR0FBRztZQUNaLEtBQUssU0FBUzs7Z0JBQ2IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsTUFBTTtZQUNQLEtBQUssV0FBVzs7Z0JBQ2YsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsTUFBTTtZQUNQLEtBQUssT0FBTzs7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU07WUFDUCxLQUFLLFFBQVE7O2dCQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNO1NBQ1A7S0FDRDs7O1lBNUJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsc0JBQXNCO2FBQ2hDOzs7eUJBRUMsTUFBTTsyQkFDTixNQUFNO3VCQUNOLE1BQU07d0JBQ04sTUFBTTt3QkFFTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0FDWnBDLHVCQUVhLFVBQVUsR0FBRztJQUN6Qix1QkFBdUI7Q0FDdkI7Ozs7OztBQ0pELHVCQUVhLFVBQVUsR0FBRztJQUN6QiwwQkFBMEI7Q0FDMUI7Ozs7OztBQ0pEOzs7WUFNQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLFVBQVU7b0JBQ1YsVUFBVTtpQkFDVjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsVUFBVTtvQkFDVixVQUFVO2lCQUNWO2FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
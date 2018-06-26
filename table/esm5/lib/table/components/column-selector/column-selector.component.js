/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableHelperService } from '../../services/table-helper.service';
/**
 * Used to generate unique ID's for each column selector component (idea from Angular Material --> tab-group component)
 */
var /** @type {?} */ nextId = 0;
var ColumnSelectorComponent = /** @class */ (function () {
    function ColumnSelectorComponent(tableHelper) {
        this.tableHelper = tableHelper;
        this.update = new EventEmitter();
        this.id = nextId++;
    }
    /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    ColumnSelectorComponent.prototype.updateDisplay = /**
     * @param {?} e
     * @param {?} index
     * @return {?}
     */
    function (e, index) {
        if (e.target.checked) {
            this.columns[index].hidden = false;
            this.enableChildren(this.columns[index]);
        }
        else {
            this.columns[index].hidden = true;
            this.disableChildren(this.columns[index]);
        }
        this.emitColumns();
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    ColumnSelectorComponent.prototype.enableChildren = /**
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        var _this = this;
        this.columns = this.columns.map(function (o) {
            if (o.parent && o.disabled && o.parent.indexOf(parent.value) !== -1) {
                o.disabled = false;
                _this.enableChildren(o);
            }
            return o;
        });
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    ColumnSelectorComponent.prototype.disableChildren = /**
     * @param {?} parent
     * @return {?}
     */
    function (parent) {
        var _this = this;
        this.columns = this.columns.map(function (o) {
            if (o.parent && !o.disabled && o.parent.indexOf(parent.value) !== -1) {
                o.disabled = true;
                o.hidden = true;
                _this.disableChildren(o);
            }
            return o;
        });
    };
    /**
     * @param {?} key
     * @param {?} i
     * @return {?}
     */
    ColumnSelectorComponent.prototype.move = /**
     * @param {?} key
     * @param {?} i
     * @return {?}
     */
    function (key, i) {
        var _this = this;
        var /** @type {?} */ index = this.columns.findIndex(function (o) {
            return _this.tableHelper.getValue(o) === _this.tableHelper.getValue(key);
        });
        var /** @type {?} */ target = index + i;
        if (target < 0 || target > this.columns.length - 1) {
            return;
        }
        this.columns.splice(index, 1); // Delete previous key position
        this.columns.splice(target, 0, key); // Add new position
        // Use timeout to fix re-rendering issue
        setTimeout(function () {
            _this.currentTarget = target;
        });
        this.emitColumns();
    };
    /**
     * @return {?}
     */
    ColumnSelectorComponent.prototype.emitColumns = /**
     * @return {?}
     */
    function () {
        this.update.emit(this.columns);
    };
    ColumnSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-column-selector',
                    template: "<ul class=\"a-list a-list--lined aui-column-selector\">\n\t<li *ngFor=\"let column of columns; let i = index; let isLast = last; let isFirst = first;\" class=\"animated\" [ngClass]=\"{show: i === currentTarget}\">\n\t\t<div class=\"a-input__checkbox a-input__checkbox--small\">\n\t\t\t<input type=\"checkbox\" id=\"checkbox-{{ id }}-{{ i }}-{{ tableHelper.getValue(column) }}\" name=\"checkbox-{{ tableHelper.getValue(column) }}\" [checked]=\"!column.hidden\" (change)=\"updateDisplay($event, i)\" [disabled]=\"column.disabled\">\n\t\t\t<label for=\"checkbox-{{ id }}-{{ i }}-{{ tableHelper.getValue(column) }}\">{{ tableHelper.getLabel(column) }}</label>\n\t\t</div>\n\t\t<div class=\"select-actions\">\n\t\t\t<button [disabled]=\"isFirst\" class=\"a-button-transparent a-button--tiny has-icon\" (click)=\"move(column, -1)\">\n\t\t\t\t<span class=\"fa fa-angle-up\"></span>\n\t\t\t</button>\n\t\t\t<button [disabled]=\"isLast\" class=\"a-button-transparent a-button--tiny has-icon\" (click)=\"move(column, 1)\">\n\t\t\t\t<span class=\"fa fa-angle-down\"></span>\n\t\t\t</button>\n\t\t</div>\n\t</li>\n<ul>\n",
                },] },
    ];
    /** @nocollapse */
    ColumnSelectorComponent.ctorParameters = function () { return [
        { type: TableHelperService }
    ]; };
    ColumnSelectorComponent.propDecorators = {
        columns: [{ type: Input }],
        update: [{ type: Output }]
    };
    return ColumnSelectorComponent;
}());
export { ColumnSelectorComponent };
function ColumnSelectorComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ColumnSelectorComponent.prototype.columns;
    /** @type {?} */
    ColumnSelectorComponent.prototype.update;
    /** @type {?} */
    ColumnSelectorComponent.prototype.id;
    /** @type {?} */
    ColumnSelectorComponent.prototype.currentTarget;
    /** @type {?} */
    ColumnSelectorComponent.prototype.tableHelper;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2NvbXBvbmVudHMvY29sdW1uLXNlbGVjdG9yL2NvbHVtbi1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7QUFHekUscUJBQUksTUFBTSxHQUFHLENBQUMsQ0FBQzs7SUE0QmQsaUNBQW1CLFdBQStCO1FBQS9CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtzQkFKL0IsSUFBSSxZQUFZLEVBQUU7UUFLcEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztLQUNuQjs7Ozs7O0lBRU0sK0NBQWE7Ozs7O2NBQUMsQ0FBQyxFQUFFLEtBQUs7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7Ozs7SUFHYixnREFBYzs7OztjQUFDLE1BQU07O1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRSxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDbkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QjtZQUVELE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDVCxDQUFDLENBQUM7Ozs7OztJQUdHLGlEQUFlOzs7O2NBQUMsTUFBTTs7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hCO1lBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNULENBQUMsQ0FBQzs7Ozs7OztJQUdHLHNDQUFJOzs7OztjQUFDLEdBQUcsRUFBRSxDQUFDOztRQUNqQixxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2RSxDQUFDLENBQUM7UUFDSCxxQkFBTSxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUV6QixFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQztTQUNQO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUcsR0FBRyxDQUFDLENBQUM7O1FBR3JDLFVBQVUsQ0FBQztZQUNWLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7Ozs7SUFHYiw2Q0FBVzs7OztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7OztnQkF2RmhDLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsc2xDQWdCVjtpQkFDQTs7OztnQkF4QlEsa0JBQWtCOzs7MEJBMEJ6QixLQUFLO3lCQUNMLE1BQU07O2tDQTVCUjs7U0EwQmEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlSGVscGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RhYmxlLWhlbHBlci5zZXJ2aWNlJztcblxuLyoqIFVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEJ3MgZm9yIGVhY2ggY29sdW1uIHNlbGVjdG9yIGNvbXBvbmVudCAoaWRlYSBmcm9tIEFuZ3VsYXIgTWF0ZXJpYWwgLS0+IHRhYi1ncm91cCBjb21wb25lbnQpICovXG5sZXQgbmV4dElkID0gMDtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNvbHVtbi1zZWxlY3RvcicsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwiYS1saXN0IGEtbGlzdC0tbGluZWQgYXVpLWNvbHVtbi1zZWxlY3RvclwiPlxuXHQ8bGkgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zOyBsZXQgaSA9IGluZGV4OyBsZXQgaXNMYXN0ID0gbGFzdDsgbGV0IGlzRmlyc3QgPSBmaXJzdDtcIiBjbGFzcz1cImFuaW1hdGVkXCIgW25nQ2xhc3NdPVwie3Nob3c6IGkgPT09IGN1cnJlbnRUYXJnZXR9XCI+XG5cdFx0PGRpdiBjbGFzcz1cImEtaW5wdXRfX2NoZWNrYm94IGEtaW5wdXRfX2NoZWNrYm94LS1zbWFsbFwiPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tib3gte3sgaWQgfX0te3sgaSB9fS17eyB0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pIH19XCIgbmFtZT1cImNoZWNrYm94LXt7IHRhYmxlSGVscGVyLmdldFZhbHVlKGNvbHVtbikgfX1cIiBbY2hlY2tlZF09XCIhY29sdW1uLmhpZGRlblwiIChjaGFuZ2UpPVwidXBkYXRlRGlzcGxheSgkZXZlbnQsIGkpXCIgW2Rpc2FibGVkXT1cImNvbHVtbi5kaXNhYmxlZFwiPlxuXHRcdFx0PGxhYmVsIGZvcj1cImNoZWNrYm94LXt7IGlkIH19LXt7IGkgfX0te3sgdGFibGVIZWxwZXIuZ2V0VmFsdWUoY29sdW1uKSB9fVwiPnt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX08L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJzZWxlY3QtYWN0aW9uc1wiPlxuXHRcdFx0PGJ1dHRvbiBbZGlzYWJsZWRdPVwiaXNGaXJzdFwiIGNsYXNzPVwiYS1idXR0b24tdHJhbnNwYXJlbnQgYS1idXR0b24tLXRpbnkgaGFzLWljb25cIiAoY2xpY2spPVwibW92ZShjb2x1bW4sIC0xKVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwXCI+PC9zcGFuPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8YnV0dG9uIFtkaXNhYmxlZF09XCJpc0xhc3RcIiBjbGFzcz1cImEtYnV0dG9uLXRyYW5zcGFyZW50IGEtYnV0dG9uLS10aW55IGhhcy1pY29uXCIgKGNsaWNrKT1cIm1vdmUoY29sdW1uLCAxKVwiPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIj48L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0PC9saT5cbjx1bD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIENvbHVtblNlbGVjdG9yQ29tcG9uZW50IHtcblx0QElucHV0KCkgY29sdW1ucztcblx0QE91dHB1dCgpIHVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0cHVibGljIGlkOiBudW1iZXI7XG5cdHB1YmxpYyBjdXJyZW50VGFyZ2V0O1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJsZUhlbHBlcjogVGFibGVIZWxwZXJTZXJ2aWNlKSB7XG5cdFx0dGhpcy5pZCA9IG5leHRJZCsrO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZURpc3BsYXkoZSwgaW5kZXgpIHtcblx0XHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0dGhpcy5jb2x1bW5zW2luZGV4XS5oaWRkZW4gPSBmYWxzZTtcblx0XHRcdHRoaXMuZW5hYmxlQ2hpbGRyZW4odGhpcy5jb2x1bW5zW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29sdW1uc1tpbmRleF0uaGlkZGVuID0gdHJ1ZTtcblx0XHRcdHRoaXMuZGlzYWJsZUNoaWxkcmVuKHRoaXMuY29sdW1uc1tpbmRleF0pO1xuXHRcdH1cblxuXHRcdHRoaXMuZW1pdENvbHVtbnMoKTtcblx0fVxuXG5cdHB1YmxpYyBlbmFibGVDaGlsZHJlbihwYXJlbnQpIHtcblx0XHR0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMubWFwKChvKSA9PiB7XG5cdFx0XHRpZiAoby5wYXJlbnQgJiYgby5kaXNhYmxlZCAmJiBvLnBhcmVudC5pbmRleE9mKHBhcmVudC52YWx1ZSkgIT09IC0xKSB7XG5cdFx0XHRcdG8uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5lbmFibGVDaGlsZHJlbihvKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG87XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZGlzYWJsZUNoaWxkcmVuKHBhcmVudCkge1xuXHRcdHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoKG8pID0+IHtcblx0XHRcdGlmIChvLnBhcmVudCAmJiAhby5kaXNhYmxlZCAmJiBvLnBhcmVudC5pbmRleE9mKHBhcmVudC52YWx1ZSkgIT09IC0xKSB7XG5cdFx0XHRcdG8uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRvLmhpZGRlbiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuZGlzYWJsZUNoaWxkcmVuKG8pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbztcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBtb3ZlKGtleSwgaSkge1xuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5jb2x1bW5zLmZpbmRJbmRleCgobykgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMudGFibGVIZWxwZXIuZ2V0VmFsdWUobykgPT09IHRoaXMudGFibGVIZWxwZXIuZ2V0VmFsdWUoa2V5KTtcblx0XHR9KTtcblx0XHRjb25zdCB0YXJnZXQgPSBpbmRleCArIGk7XG5cblx0XHRpZiAodGFyZ2V0IDwgMCB8fCB0YXJnZXQgPiB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuY29sdW1ucy5zcGxpY2UoaW5kZXgsIDEpOyAvLyBEZWxldGUgcHJldmlvdXMga2V5IHBvc2l0aW9uXG5cdFx0dGhpcy5jb2x1bW5zLnNwbGljZSh0YXJnZXQsIDAgLCBrZXkpOyAvLyBBZGQgbmV3IHBvc2l0aW9uXG5cblx0XHQvLyBVc2UgdGltZW91dCB0byBmaXggcmUtcmVuZGVyaW5nIGlzc3VlXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmVtaXRDb2x1bW5zKCk7XG5cdH1cblxuXHRwdWJsaWMgZW1pdENvbHVtbnMoKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdCh0aGlzLmNvbHVtbnMpO1xuXHR9XG59XG4iXX0=
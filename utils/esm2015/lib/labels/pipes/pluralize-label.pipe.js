/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class PluralizeLabelPipe {
    /**
     * @param {?} label
     * @param {?} count
     * @return {?}
     */
    transform(label, count) {
        if (!label || typeof label === 'string') {
            return /** @type {?} */ (label);
        }
        return count === 1 ? label.singular : label.plural;
    }
}
PluralizeLabelPipe.decorators = [
    { type: Pipe, args: [{
                name: 'pluralizeLabel',
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1cmFsaXplLWxhYmVsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91dGlscy8iLCJzb3VyY2VzIjpbImxpYi9sYWJlbHMvcGlwZXMvcGx1cmFsaXplLWxhYmVsLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBUXBELE1BQU07Ozs7OztJQUNMLFNBQVMsQ0FBQyxLQUFtQixFQUFFLEtBQWE7UUFDM0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6QyxNQUFNLG1CQUFDLEtBQWUsRUFBQztTQUN2QjtRQUVELE1BQU0sQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0tBQ25EOzs7WUFWRCxJQUFJLFNBQUM7Z0JBQ0wsSUFBSSxFQUFFLGdCQUFnQjthQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuLi90eXBlcy9sYWJlbHMudHlwZXMnO1xuXG5cbkBQaXBlKHtcblx0bmFtZTogJ3BsdXJhbGl6ZUxhYmVsJyxcbn0pXG5leHBvcnQgY2xhc3MgUGx1cmFsaXplTGFiZWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdHRyYW5zZm9ybShsYWJlbDogTGFiZWx8c3RyaW5nLCBjb3VudDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRpZiAoIWxhYmVsIHx8IHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBsYWJlbCBhcyBzdHJpbmc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvdW50ID09PSAxID8gbGFiZWwuc2luZ3VsYXIgOiBsYWJlbC5wbHVyYWw7XG5cdH1cbn1cbiJdfQ==
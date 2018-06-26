import { EventEmitter, TemplateRef, OnChanges } from '@angular/core';
import { EventInterface, WeekdayInterface, DAYS, HighLightInterface, DateRangeInterface, SlotInterface } from '../../types/agenda.types';
import { MonthViewSlotsService } from '../../services/month-view-slots.service';
import { DateHelperService } from '../../services/date-helper.service';
export declare class MonthViewComponent implements OnChanges {
    private monthViewSlotsService;
    private dateHelperService;
    cssClass: boolean;
    activeDate: Date;
    startDayOfWeek: DAYS;
    highlights: HighLightInterface;
    weekdays: DAYS[];
    events: EventInterface[];
    eventItemTemplate: TemplateRef<any>;
    displayRange: EventEmitter<DateRangeInterface>;
    selectRange: EventEmitter<DateRangeInterface>;
    selectDay: EventEmitter<Date>;
    selectEvent: EventEmitter<EventInterface>;
    clickMore: EventEmitter<{}>;
    slots: SlotInterface[];
    weeks: WeekdayInterface[][];
    selectedDay: Date;
    selectedRange: {
        from: any;
        to: any;
    };
    weekHeight: number;
    eventHeight: number;
    heightOffset: number;
    eventsByDay: any;
    availableSlots: number;
    constructor(monthViewSlotsService: MonthViewSlotsService, dateHelperService: DateHelperService);
    ngOnChanges(changes: any): void;
    onSelectDay(day: Date): void;
    onSelectEvent(event: EventInterface): void;
    onChangeRowHeight(height: number): void;
    onClickMore(day: Date): void;
    onSelectRange(range: DateRangeInterface): void;
    onDragRange(range: any): void;
    private setSlotsAndWeeks();
    private calculateMonthWeeks(date, startOfWeek, highlights);
    private emitDisplayRange(weeks);
}

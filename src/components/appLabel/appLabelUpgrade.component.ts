import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
    selector: 'app-label'
})
export class AppLabelDirective extends UpgradeComponent {

    @Input() text: String;
    @Input() value: String;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('appLabel', elementRef, injector);
    }
}
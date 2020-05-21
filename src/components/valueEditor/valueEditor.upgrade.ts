import { Directive, ElementRef, Injector, Input, EventEmitter, Output } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
    selector: 'value-editor'
})
export class ValueEditorDirective extends UpgradeComponent {

    _model: String;

    @Input()
    get model() {
        return this._model;
    }

    @Output() modelChange = new EventEmitter();
    set model(val) {
        this._model = val;
        this.modelChange.emit(this._model);
    }

    @Input() text: String;
    @Input() required?: String; 

    constructor(elementRef: ElementRef, injector: Injector) {
        super('valueEditorWrapper', elementRef, injector);
    }
}
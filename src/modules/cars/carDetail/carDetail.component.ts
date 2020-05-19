import { Component, Input } from "@angular/core";
import template from "./carDetail.view.html";

@Component({
	selector: 'carDetail',
	template: template
})
export class CarDetail {
	
    @Input() car;
    
	constructor () { }
}
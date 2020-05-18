import { Component } from "@angular/core";
import template from "./carsList.view.html";

/**
 * This component renders the contacts submodule.
 *
 * On the left is the list of contacts.
 * On the right is the ui-view viewport where contact details appear.
 */
@Component({
  selector: 'cars',
  template: template
})
export class CarsList {}
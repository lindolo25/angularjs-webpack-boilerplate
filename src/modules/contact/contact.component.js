"use strict";

import contactTemplate from "./contact.view.html";

var contactComponent = {
    bindings: { },
    template: contactTemplate,
    controller: contactController
}

contactController.$inject = ['$scope', '$log'];

export default contactComponent;

function contactController($scope, $log) {

    let ctrl = this;
    ctrl.title = "Contact?";
    
    ctrl.$onInit = function () { }

}
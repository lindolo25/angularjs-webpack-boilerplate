"use strict";

import personTemplate from "./person.view.html";

var personComponent = {
    bindings: {
        person: '<'
    },
    template: personTemplate,
    controller: personController
}

personController.$inject = ['$scope', '$log'];

export default personComponent;

function personController($scope, $log) {

    let ctrl = this;
    ctrl.title = 'person';

    ctrl.$onInit = function () { }

}
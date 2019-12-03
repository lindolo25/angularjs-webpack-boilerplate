"use strict";

import angular from "angular";
import contactComponent from "./contact.component";

debugger;
let contactModule = angular.module('app.contactModule', [])
    .component("app.contactComponent", contactComponent);

export default contactModule;
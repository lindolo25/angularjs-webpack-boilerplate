import { Ng2StateDeclaration } from "@uirouter/angular";
import { CarsList } from "./carsList.component";

export const carsListState: Ng2StateDeclaration = {
    name: "cars",
    url: "/cars",
    component: CarsList
};
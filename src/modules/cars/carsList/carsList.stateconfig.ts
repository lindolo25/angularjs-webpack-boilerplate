import { Ng2StateDeclaration } from "@uirouter/angular";
import { CarsList } from "./carsList.component";
import { CarsService } from "../../../services/cars.service";

export const carsListState: Ng2StateDeclaration = {
    name: "cars",
    url: "/cars",
    resolve: [{
        token: 'cars',
        deps: [CarsService],
        resolveFn: function (carsService: CarsService) {
            return carsService.getCars();
        }
    }],
    component: CarsList
};
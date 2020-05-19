import { Ng2StateDeclaration } from "@uirouter/angular";
import { CarDetail } from "./carDetail.component";
import { CarsService } from "../../../services/cars.service";

export const carDetailState: Ng2StateDeclaration = {
    name: "cars.car",
    url: "/:carId",
    resolve: [{
        token: 'car',
        deps: [CarsService, '$transition$'],
        resolveFn: function (carsService: CarsService, $transition$) {
            return carsService.getCarById($transition$.params().carId);
        }
    }],
    component: CarDetail
};
import { routes } from './../app-routing/routes';
import { DishService } from './../services/dish.service';
import { Component, OnInit} from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Dish } from "../shared/dish";

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"],
})
export class DishdetailComponent implements OnInit {

  dish = Dish;

  constructor(private DishService: DishService,
    private route : ActivatedRoute,
    private location: Location) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dish = this.DishService.getDish(id);
  }
  goBack(): void{
    this.location.back();
  }


}

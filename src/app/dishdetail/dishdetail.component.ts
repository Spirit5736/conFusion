import { routes } from './../app-routing/routes';
import { DishService } from './../services/dish.service';
import { Component, OnInit, ViewChild, Inject} from "@angular/core";
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Dish } from "../shared/dish";
import { InitialStylingFlags } from '@angular/core/src/render3/interfaces/definition';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-dishdetail",
  templateUrl: "./dishdetail.component.html",
  styleUrls: ["./dishdetail.component.scss"],
})
export class DishdetailComponent implements OnInit {

  dish : Dish;

  constructor(private DishService: DishService,
    private route : ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {}

  ngOnInit() {
    this.createForm();
    this.DishService.getDishIds()
    .subscribe((dishIds) => this.dishIds = dishIds);
    this.route.params
    .pipe(switchMap((params: Params) => this.DishService.getDishIds()))

  }
  goBack(): void{
    this.location.back();
  }


}

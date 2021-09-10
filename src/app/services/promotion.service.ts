import { Injectable } from "@angular/core";
import { DISHES } from "../shared/dishes";
import { Promotion } from "../shared/promotion";
import { PROMOTIONS } from "../shared/promotions";
import {of} from "rxjs";
import {delay} from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PromotionService {

  getPromotion(id: string): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }
  getFeaturedPromotion(): Observable<Promotion[]> {
    return PROMOTIONS.filter((promo) => promo.featured)[0];
  }
}

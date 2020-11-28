import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private _calculatorDisplay: BehaviorSubject<Number> = new BehaviorSubject<Number>(5);

  public readonly number: Observable<Number> = this._calculatorDisplay.asObservable();
    
  //   private backend: BackendService,
  //   private logger: Logger) { }

  // getHeroes() {
  //   this.backend.getAll(Hero).then( (heroes: Hero[]) => {
  //     this.logger.log(`Fetched ${heroes.length} heroes.`);
  //     this.heroes.push(...heroes); // fill cache
  //   });
  //   return this.heroes;
  // }
}

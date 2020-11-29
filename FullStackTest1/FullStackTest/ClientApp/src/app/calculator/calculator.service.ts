import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private _calulatorValue: number = 0;
  private _calculatorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this._calulatorValue);

  public readonly number: Observable<number> = this._calculatorSubject.asObservable();
  
  private numberPress(keyContent: string) {
    if (this._calulatorValue === 0) {
      this._calulatorValue = Number(parseInt(keyContent, 10));
    } else {
      this._calulatorValue = Number(this._calulatorValue.toString() + keyContent);
    }
    this._calculatorSubject.next(this._calulatorValue);
  }

  keyPress(event: EventTarget) {
    const buttonEvent = <HTMLButtonElement>event;
    const action = buttonEvent.dataset.action;
    const keyContent = buttonEvent.textContent;

    if(!action) {
      this.numberPress(keyContent);
    }
  }
}

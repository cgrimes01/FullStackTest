import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, AfterViewInit {
  number: Number = 8;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.calculatorService.number.subscribe(number => this.number = number);
  }


  ngAfterViewInit() {
    // ...
  }
}

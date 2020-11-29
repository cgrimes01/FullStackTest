import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, AfterViewInit {
  number: number;

  @ViewChild('calckeys', {static: false}) calcKeys: ElementRef;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    this.calculatorService.number.subscribe(number => this.number = number);
  }

  ngAfterViewInit(): void {
    const buttons = this.calcKeys.nativeElement.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', this.onKeyPress.bind(this)));
  }

  onKeyPress(event?: MouseEvent): void {
    this.calculatorService.keyPress(event.target);
  }
}

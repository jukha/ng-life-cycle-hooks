import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
})
export class TemperatureComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() value: string = '';
  constructor() {
    console.log('Constructor called!');
    console.log(this.value);
  }
  ngOnChanges(change: SimpleChanges) {
    // Only called when the input properties are updated
    console.log('ngOnChanges is called!');
    console.log(this.value);
  }
  ngOnInit() {
    // Only called for the first change detection cycle
    console.log('ngOnInit called!');
    console.log(this.value);
  }
  ngDoCheck() {
    // Called everytime the change detection cycle runs
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit() {
    // Called when the component's projected content has been fully initialized. Only called once during the first change detection cycle
    console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked() {
    // Called everytime the change detection cycle runs or  the projected content gets updated
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit() {
    // Called when the component's view and all its child views are fully initialized. Only called once for the first change detection cycle
    console.log('ngAfterViewInit called!');
  }
  ngAfterViewChecked() {
    // Called everytime the change detction cycle runs
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy() {
    // Called just before the componet or directive gets destroyed
    console.log('ngOnDestroy called!');
  }
}

import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService],
})
export class AppComponent implements OnInit {
  inputText: string = 'default';
  showChild: boolean = true;
  ngOnInit() {}
  onSumbit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }
  DestroyChild() {
    this.showChild = false;
  }
}

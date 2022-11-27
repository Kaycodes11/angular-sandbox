import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() data = '';
  @Output() toParent = new EventEmitter<string>();

  @ViewChild('myInput', { static: false })
  myCustomInput?: ElementRef<HTMLElement>;

  numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() {
    console.log('ChildComponent constructor has ran');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('prev ', changes?.['data']['previousValue']);
    console.log('current ', changes?.['data']['currentValue']);
  }

  ngOnInit(): void {
    console.log('this runs after onchange');
    this.myCustomInput?.nativeElement.focus();
  }

  sendInput(input: HTMLInputElement, lang: HTMLParagraphElement) {
    console.log(input, input.value); // <input type="text" #myInput />
    console.log(lang, lang.innerText);
  }

  addNewName(value: string) {
    this.toParent.emit(value);
  }
}

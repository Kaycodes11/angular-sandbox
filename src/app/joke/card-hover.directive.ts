import {
  Directive,
  Renderer2,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[ccCardHover]',
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary') private isHovering!: boolean;

  @Input('ccCardHover') config = {
    querySelector: '.card-text',
  };

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // just comment out this when using host binding and host listener
    // renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    // let part = this.el.nativeElement.querySelector('.card-text');

    // when using input props
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(part, 'display', 'block');
    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    // let part = this.el.nativeElement.querySelector('.card-text');
    // when using input props
    let part = this.el.nativeElement.querySelector(this.config.querySelector);

    this.renderer.setStyle(part, 'display', 'none');
    this.isHovering = false;
  }
}

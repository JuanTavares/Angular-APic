import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[apDarkenOnHover]'
})
export class DarkenOnHoverDirective {
  
  constructor(
    private el: ElementRef,
    private render: Renderer) { }

  @HostListener('mouseover')
  DarkenOn() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%)');
  }
  @HostListener('mouseleave')
  DarkenOff() {
    this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}

import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBcolor]'
})
export class BcolorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
@HostListener('mouseenter')
add(){
  let par = this.el.nativeElement;
  this.renderer.setStyle(par, 'background-color', '#ccc');
}
@HostListener('mouseleave')
remove(){
  let par = this.el.nativeElement;
  this.renderer.removeStyle(par, 'background-color');
}
}

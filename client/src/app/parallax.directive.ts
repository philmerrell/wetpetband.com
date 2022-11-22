import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {
  @Input('ratio') parallaxRatio : number = 1
  initialTop : number = 0
  
  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event){
    this.eleRef.nativeElement.style.transform = `translateY(${window.scrollY * this.parallaxRatio}px)`
  }
}

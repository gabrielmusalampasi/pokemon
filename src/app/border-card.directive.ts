import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmmBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(180)
  }
  @Input()
  pkmmBorderCard: string | undefined

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.pkmmBorderCard || "#f5f5f5")
    console.log('border', this.pkmmBorderCard)
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5')
  }


  private setBorder(color : string){
    let border = 'solid 4px' + color
    this.el.nativeElement.style.border = border;
  }
  private setHeight(height: number){
    this.el.nativeElement.style.height = height + 'px'
  }
}

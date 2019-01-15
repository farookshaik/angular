import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myNumberOnly]'
})
export class NumberOnlyDirective {
  // Allow decimal numbers and negative values
  private regex: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
  // Allow key codes for special events. Reflect :
  // Backspace, tab, end, home
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];

  constructor(private el: ElementRef) {
  }

  // @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
  //   e.preventDefault();
  // }
  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedInput: string = event.clipboardData
      .getData('text/plain')
      .replace(/\D/g, ''); // get a digit-only string
    document.execCommand('insertText', false, pastedInput);
  }

  // @HostListener('drop', ['$event'])
  // onDrop(event: DragEvent) {
  //   event.preventDefault();
  //   const textData = event.dataTransfer
  //     .getData('text').replace(/\D/g, '');

  //   document.execCommand('insertText', false, textData);
  // }
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    // const current: string = this.el.nativeElement.value;
    // const next: string = current.concat(event.key);

    // if (next !== 'v' && !String(next).match(this.regex)) {
    //   event.preventDefault();
    // }
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (event.keyCode === 65 && (event.ctrlKey || event.metaKey)) ||
      // Allow: Ctrl+C
      (event.keyCode === 67 && (event.ctrlKey || event.metaKey)) ||
      // Allow: Ctrl+V
      (event.keyCode === 86 && (event.ctrlKey || event.metaKey)) ||
      // Allow: Ctrl+X
      (event.keyCode === 88 && (event.ctrlKey || event.metaKey)) ||
      // Allow: home, end, left, right
      (event.keyCode >= 35 && event.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
      event.preventDefault();
    }
  }
}

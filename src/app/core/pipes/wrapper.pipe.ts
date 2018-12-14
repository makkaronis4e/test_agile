import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'wrapper' })
export class WrapperPipe implements PipeTransform {

    transform(text: string) {
    const result = text.replace(/([^\s-.,;:!?()[\]{}<>"]+)/g, `<span>$1</span>`);
    return result;
  }
}


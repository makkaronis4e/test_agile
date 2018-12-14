import { Component } from '@angular/core';
import { TextService } from '../../text-redactor.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class AppTextComponent {

  public selected: HTMLElement;
  public synonyms: string[];
  color = "red";

  // tslint:disable-next-line:max-line-length
  public text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  constructor( private service: TextService) {}

  onSelect(ev: Event) {
    const element = <HTMLElement>ev.target;
    if (element.nodeName !== 'SPAN') {
      return;
    }

    if (this.selected === element) {
      this.clearSelection(element);
      return;
    }

    if (this.selected) {
      this.clearSelection(this.selected);
    }
    this.selected = element;
    this.highlight();
  }

  highlight() {
    this.selected.style.backgroundColor = '#ccc';
  }

  clearSelection(element: HTMLElement) {
    element.style.backgroundColor = null;
    this.selected = undefined;
    this.synonyms = null;
  }

  onclick(type: string) {
    const style = this.selected.style;
    switch (type) {
      case 'bold':
      style.fontWeight = style.fontWeight === '600' ? null :  '600';
      break;
      case 'underline':
        style.textDecoration = style.textDecoration === 'underline' ? null :  'underline';
      break;
      case 'italic':
        style.fontStyle = style.fontStyle === 'italic' ? null :  'italic';
      break;
    }
  }

  async getSynonyme() {
    this.synonyms = await this.service.getSynonyms(this.selected.textContent);
  }

  onColorChange(ev: any) {
    this.selected.style.color = ev;
  }

}

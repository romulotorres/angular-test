import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {

  @Input() txtSearch = "";
  @Output() onSearch = new EventEmitter<string>();

  placeholder = "Pesquisar colaboradores";
  
  onChangeTxt(event:Event): void {
    if (event && event.target) {
      const value = (event.target as HTMLTextAreaElement).value
      this.txtSearch = value;
      this.onSearch.emit(value);
    }
  }
}

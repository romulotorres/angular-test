import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() countPages!: number;
  @Input() currentPage = 0;
  @Output() onClick = new EventEmitter<number>();
  
  onClickPrevious():void {
    if (this.currentPage > 0) {
      this.currentPage = this.currentPage - 1;
      this.onClick.emit(this.currentPage);
    }
  }

  onClickNext():void {
    if (this.currentPage < this.countPages - 1) {
      this.currentPage = this.currentPage + 1;
      this.onClick.emit(this.currentPage);
    }
  }

  onClickPage(newPage:number):void {
    this.currentPage = newPage;
    this.onClick.emit(newPage);
  }

  counter(i: number):Array<null> {
    return new Array(i);
  }

}

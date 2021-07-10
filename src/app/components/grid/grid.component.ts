import { Component, Input } from '@angular/core';
import { ColaboratorList } from 'src/types/types';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {

  @Input() items!: ColaboratorList;

}

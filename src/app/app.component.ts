import { Component } from '@angular/core';
import {getData} from '../api/colaborators'
import { ColaboratorList } from '../types/types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  txtSearch = "";
  limit = 6;
  title = "Colaboradores";
  labelNewColaborador = "Cadastrar Colaborador";
  data: ColaboratorList = {list: [], count: 0};
  countPages = 0;
  currentPage = 0;
  
  async search(offset=0, limit=6 ): Promise<void> {
    const _data = await getData(this.txtSearch, offset, limit);
    this.countPages = Math.ceil(_data.count / limit)
    this.data = _data;
    this.currentPage = offset / limit;
  }

  onSearch(search:string):void {
    this.txtSearch = search;
    this.search(0, this.limit);
  }

  onClickNewColaborator():void {
    alert('Botão clicado');
  }

  onClickPage(page:number):void {
    this.currentPage = page;
    this.search(page * this.limit, this.limit);
  }

  ngOnInit(): void {
    this.search();
  }
}

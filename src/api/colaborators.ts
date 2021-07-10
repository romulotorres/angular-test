import { Colaborator, ColaboratorList } from "src/types/types";
import fakeData from "./MOCK_DATA";

function compare( a: Colaborator, b: Colaborator ):number {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

export const getData = (search = '', offset = 0, limit = 6): Promise<ColaboratorList> => {
  return new Promise((resolve) => {

    const _fakeData = [...fakeData].sort(compare).filter(
      (el) => el.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
    );

    setTimeout(() => {
      const _list: ColaboratorList = {
        list: _fakeData.slice(offset, offset + limit),
        count:  _fakeData.length
      }
      resolve(_list);
    }, 10);
  });
};

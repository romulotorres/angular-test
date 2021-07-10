export interface Colaborator {
  name: string;
  function: string;
  email: string;
}

export interface ColaboratorList {
  list: Colaborator[],
  count: number,
}
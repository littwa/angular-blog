export interface IEvidence {
  id: number;
  name: string;
  age: number;
  active: boolean;
  address: IAddress;
}

export interface IAddress {
  index: number;
  country: string;
  city: string;
}

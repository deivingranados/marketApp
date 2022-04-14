export interface AppContextType {
  state: StateType;
  setState: (state: StateType) => void;
}

export interface marletAllType {
  id: number;
  price: number;
  title: string;
  thumbnail: string;
  currency_id: string;
  address: {
    state_name: string;
  };
}
export interface Icategory {
  values: {};
}

export type Idescription = {
  plain_text: string;
};

export interface marketItemsDetails {
  price: any;
  title: string;
  thumbnail: string;
  descriptions: string;
  currency_id: string;
  sold_quantity: number;
  pictures: {
    [index: string]: any;
  };
}

export interface StateType {
  allList?: marletAllType[];
  listCategory?: Icategory[];
}

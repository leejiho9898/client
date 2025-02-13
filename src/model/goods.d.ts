export interface IRequestGoods {
  category: string;
  name: string;
  price: number;
  discount: number;
  detail: [];
  thumbnail: string;
}

export interface IRequestSizeInfo {
  stock: number;
  size: string;
  goodsId: number;
}

export interface IResponseSizeInfo {
  stock: number;
  size: string;
}

export interface IGoodsItem {
  id: string;
  category: string;
  name: string;
  price: number;
  discount: number;
  stock: number;
  detail: string[];
  thumbnail: string;
  sellnum: number;
  createAt: Date;
  status: string;
  sizeInfo: Array<IGoodsSizeInfo>;
}

export interface GoodsProps {
  item: IGoodsItem;
}

export interface IGoodsResponse {
  pageSize: number;
  totalCount: number;
  totalPage: number;
  items: Array<IGoodsItem>;
}

export interface IGoodsQuery {
  pageNo: number;
  pageSize?: number;
  name?: string;
  category?: string;
  sortBy?: SortMethod;
}

export interface IOrderItem {
  color: string;
  size: string;
  quantity: number;
  total: number;
}

export interface IdiscountPrice {
  discountPrice: number;
  discountPriceString: string;
}

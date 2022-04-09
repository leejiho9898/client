import { SortMethod } from 'model/enums';
import { IGoodsQuery } from 'model/goods';
import { ChangeEvent, MouseEvent, useState } from 'react';

export default function useGoodsQueryForm(
  q?: string | null,
  sort?: SortMethod,
  category?: string,
) {
  const [goodsQueryString, setGoodsQueryString] = useState<IGoodsQuery>({
    pageNo: 1,
    pageSize: 10,
    name: q || '',
    category: category || '',
    sortBy: sort || SortMethod.BEST,
  });

  const onChangeGoodsQS = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setGoodsQueryString((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Item sort 버튼에 적용할거
  const onClickGoodsQS = (e: MouseEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setGoodsQueryString((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { goodsQueryString, onChangeGoodsQS, onClickGoodsQS };
}

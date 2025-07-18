import { TCourcesResponse } from '../types';

export const uniqTags = (data: TCourcesResponse) => {
  return data.reduce((acc: string[], current) => {
    current.tags.forEach(item => {
      if (!acc.find(it => it === item)) {
        acc.push(item);
      }
    });

    return acc;
  }, []);
};

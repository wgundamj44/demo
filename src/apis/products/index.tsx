import client from '../utils';

export function getProducts(query?: any) {
  return client.get('/items', query)
    .then((res) => {
      return res.data.data;
    });
}

export function getProduct(id: string) {
  return client.get(`/item/${id}`);
}

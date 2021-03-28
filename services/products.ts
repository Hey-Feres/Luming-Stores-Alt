import api from './api'
import Product from '../dtos/Product'
import Meta from '../dtos/Meta'

interface IProductsIndexData {
  products: Product[]
  meta: Meta
}

const ProductsService = {
  index: (url: string) => {
    return api.get<IProductsIndexData>(url).then(response => response.data)
  },

  create: (product: FormData) => {
    return api.post<void>('/api/v1/admin/products', product)
  },

  update: (product: FormData) => {
    return api.put<void>(
      `/api/v1/admin/products/${product.get('product[id]')}`,
      product
    )
  },

  delete: (id: number) => {
    return api.delete<void>(`/api/v1/admin/products/${id}`)
  }
}

export default ProductsService

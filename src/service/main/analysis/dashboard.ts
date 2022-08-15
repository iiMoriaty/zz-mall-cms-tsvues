import hyRequest from '../../index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount(): any {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale(): any {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor(): any {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale(): any {
  return hyRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}

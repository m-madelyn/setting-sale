function ReturnSaleItems(saledata) {
  const discountamt = saledata.discount  !== 0 && saledata.discount !== undefined

  return discountamt
}

function selectSaleItems(items) {
return items.filter(ReturnSaleItems)
}

module.exports = selectSaleItems

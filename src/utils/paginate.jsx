import _ from 'lodash'
//This function returns products based on pageNumber(currentPage) and pageSize
export default function Paginate(products, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(products).slice(startIndex).take(pageSize).value(); 
}

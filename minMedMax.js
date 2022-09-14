const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  let min = n1 < n2 && n1 < n3 ? n1 : n2 < n3 ? n2 : n3;
  let max = n1 > n2 && n1 > n3 ? n1 : n2 > n3 ? n2 : n3;
  let  arr = [n1, n2, n2];
  arr.splice(arr.indexOf(min),1);
  arr.splice(arr.indexOf(max),1);
  let mid = arr[0];

  return{
    min : min, mid : mid, max : max};
}
module.exports = minMedMax

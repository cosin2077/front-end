function diff(arr1, arr2) {
  var newArr = [];
//  var barr = arr1.length>arr2.length?arr1:arr2;
//  var sarr = arr1.length<arr2.length?arr1:arr2;
  // Same, same; but different.
  for(var a of arr1){
    if(arr2.indexOf(a)===-1){
      newArr.push(a);
    }
  }
  for(var b of arr2){
    if(arr1.indexOf(b)===-1){
      newArr.push(b);
    }
  }
  
  console.log(newArr);
  return newArr;
}

diff([1, "calf", 3, "piglet"], [7, "filly"]);

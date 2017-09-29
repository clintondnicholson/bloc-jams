function forEach(arr, func) {
  for (i=0; i < arr.length; i++) {
    func(arr[i]);
    console.log (arr[i]);
  };
}

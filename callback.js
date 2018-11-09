var a = function(arr, callback) {
  console.log('arr', arr);

  return callback()
}

a([1], () => {
  console.log('callback');
})


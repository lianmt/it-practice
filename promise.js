function p(m) {
  return new Promise((reject, resolve) => {
    setTimeout(resolve, m)
  })
}
p(1000)

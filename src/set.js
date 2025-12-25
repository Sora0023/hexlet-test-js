const set = (obj, key, value1) => {
  if (!key) return false

  if (Object.hasOwn(obj, key)) return false

  Object.defineProperty(obj, key, {
    value: value1,
    writable: false,
    configurable: true,
    enumerable: false,
  })
}

export default set

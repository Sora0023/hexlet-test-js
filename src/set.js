const set = (obj, key, value) => {
  if (!key) return false

  if (Object.hasOwn(obj, key)) return false

  Object.defineProperty(obj, key, {
    value,
    writable: false,
    configurable: true,
    enumerable: true,
  })
}

export default set

const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var kit1 = [...kittens, name]
  return kit1
}

function prependKitten(name) {
  var kit1 = [name, ...kittens]
  return kit1
}

function removeLastKitten() {
  var kit1 = kittens.slice(0, -1)
  return kit1
}

function removeFirstKitten() {
  var kit1 = kittens.slice(1)
  return kit1
}

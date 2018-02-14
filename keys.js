var keyMap = {
   8: 'onBackspace',
  37: 'onArrowLeft',
  38: 'onArrowUp',
  39: 'onArrowRight',
  40: 'onArrowDown',
}

function isSpecialKey(keyCode) {
  if(keyMap[keyCode] !== undefined) return true
  return false
}
function handleSpecialKey(keyCode, nodesAndPos) {
  nodesAndPos = window[keyMap[keyCode]](nodesAndPos)
  return nodesAndPos
}
function onArrowDown(nodesAndPos) {
}
function onArrowLeft(nodesAndPos) {
  nodesAndPos = moveCursor(nodesAndPos, -1)
  return nodesAndPos
}
function onArrowRight(nodesAndPos) {
  nodesAndPos = moveCursor(nodesAndPos, 1)
  return nodesAndPos
}
function onArrowUp(nodesAndPos) {
}
function onBackspace(nodesAndPos) {
  var nodes = nodesAndPos[0]
  var pos = nodesAndPos[1]
  nodes[0].textContent = 
  nodes[0].textContent.slice(0, nodes[0].textContent.length-1)
  nodesAndPos = [nodes, pos-1]
  return nodesAndPos
}

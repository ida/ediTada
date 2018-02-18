function handleKeypress(eve, nodesAndPos) {
  if(isSpecialKey(eve.keyCode) === true) {
    nodesAndPos = handleSpecialKey(eve.keyCode, nodesAndPos)
  }
  else if(isSpecialKey(eve.keyCode) === false) {
    nodesAndPos = insertChar(eve, nodesAndPos)
  }
  return nodesAndPos
}
function handleSpecialKey(keyCode, nodesAndPos) {
  nodesAndPos = window[keyMap[keyCode]](nodesAndPos)
  return nodesAndPos
}
function insertChar(eve, nodesAndPos) {
  nodes = nodesAndPos[0]
  nodes[0].textContent += String.fromCharCode(eve.charCode)
  pos += 1
  nodesAndPos[1] = pos
  return nodesAndPos
}
function isSpecialKey(keyCode) {
  if(keyMap[keyCode] !== undefined) return true
  return false
}
var keyMap = {
   8: 'onBackspace',
  37: 'onArrowLeft',
  38: 'onArrowUp',
  39: 'onArrowRight',
  40: 'onArrowDown',
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

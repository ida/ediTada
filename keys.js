function onArrowDown(nodesAndPos) {
}
function onArrowLeft(nodesAndPos) {
  var nodes = nodesAndPos[0]
  var pos = 1
  pos -= nodesAndPos[1]
  nodesAndPos = moveCursor(nodesAndPos, -1)
  nodes = nodesAndPos[0]
  nodesAndPos = [nodes, pos]
  return nodesAndPos
}
function onArrowRight(nodesAndPos) {
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

/*
    if(eve.keyCode ==  8) { // backspace
      nodes[0].textContent = nodes[0].textContent.slice(
                                        0, nodes[0].textContent.length-1);
    }
    else if(eve.keyCode == 37) {
    }
    else if(eve.keyCode == 38) {
      nodesAndPos = moveCursor(nodesAndPos,  1)
      nodes = nodesAndPos[0]
    }
*/
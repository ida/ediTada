function insertCursor(node, startPos, endPos=startPos) {
  endPos+=1 // DEV: test selected text

  // Replace text-node with three new nodes representing:
  // - text from start to cursor
  // - cursor and selected text 
  // - text from cursor to end


  // Create nodes:
  var nodeStart  = document.createTextNode('')
  var nodeMiddle = document.createElement('span')
  var nodeEnd    = document.createTextNode('')

  // Fill nodes with content:
  nodeStart.nodeValue    = node.nodeValue.slice(0, startPos)
  nodeMiddle.textContent = node.nodeValue.slice(startPos, endPos)
  nodeEnd.nodeValue      = node.nodeValue.slice(endPos, node.nodeValue.length)

  // Insert nodes in DOM:
  node.parentNode.insertBefore(nodeStart, node)
  node.parentNode.insertBefore(nodeMiddle, node)
  node.parentNode.replaceChild(nodeEnd, node)

  return [nodeStart, nodeMiddle, nodeEnd]
}

function moveCursor(nodesAndPos, diff=1) {
  var nodes = nodesAndPos[0]
  var pos = nodesAndPos[1]
  var node = removeCursor(nodes)
  pos += diff
  // Position is lesser than first pos:
  if(pos < 0) {
    // No previous node exists:
    if(getPreviousNode(node) === null) {
      // Remain pos untouched, restore orig value:
      pos -= diff
    }
    // A previous node exists:
    else {
      // Switch context to it:
      node = getPreviousTextNode(node)
      // Set pos to last pos:
      pos = node.nodeValue.length-1
    }
  }
  // Position is greater than last pos:
  else if(pos > node.nodeValue.length-1) {
      node = getNextTextNode(node)
      pos = 0
  }
  nodes = insertCursor(node, pos)
  return [nodes, pos]
}

function removeCursor(nodes) {
  // Undo insertCursor(): Merge three nodes into one text-node.
  nodes[0].nodeValue += nodes[1].textContent += nodes[2].nodeValue
  nodes[1].remove()
  nodes[2].remove()
  return nodes[0]
}


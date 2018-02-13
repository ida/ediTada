document.addEventListener('DOMContentLoaded', function(eve) {
setInterval(function(){window.location.href=window.location.href},
7777) // Development-helper: Reload page every n ms.


  // Initiate app:
  var ele = document.getElementsByClassName('edita')[0]
  main(ele)


}); // DOM loaded




function main(ele) {
  // Turn passed ele-node and its content into a WYSIWYG-editor.
  // For that we need to do the following steps:

  // 0.) Sanitize passed html of ele:
  ele.innerHTML = removeSpaces(ele.innerHTML) // see helpers.js

  
  // 1.) Define a context-node, here the currently edited text-node.
  var node = getNextTextNode(ele)    // fetch first found text-node
  node = getNextTextNode(node) // DEV: test previous nodes
  
  // 2.) Split node into three nodes, insert cursor as a span-ele:
  var pos = 0
  var nodes = insertCursor(node, pos)  // see cursor.js

  
  // 3.) Move the cursor-pos on user-input and switch the context
  //     to next or previous text-node, if needed (= pos exceeds
  //     nodeValue.length, or is negative).    
  var nodesAndPos = [nodes, pos]
  ele.tabIndex = 0
  ele.focus()
  ele.onkeypress = function(eve) {
/*
console.log(eve)
console.log(eve.keyCode)
console.log(nodes)
*/
    if     (eve.keyCode ==  8) nodesAndPos = onBackspace(nodesAndPos)
    else if(eve.keyCode == 37) nodesAndPos = onArrowLeft(nodesAndPos)
    else if(eve.keyCode == 38) nodesAndPos = onArrowRight(nodesAndPos)
    else {
      nodes = nodesAndPos[0]
      nodes[0].textContent += String.fromCharCode(eve.charCode)
      pos += 1
      nodesAndPos[1] = pos
      nodesAndPos = [nodes, pos]
    }
  }

} // main
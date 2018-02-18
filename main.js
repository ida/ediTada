document.addEventListener('DOMContentLoaded', function(eve) {
setInterval(function(){window.location.href=window.location.href},
77777) // Development-helper: Reload page every n ms.


  // Initiate app:
  var ele = document.getElementsByClassName('edita')[0]
  main(ele)


}); // DOM loaded



function main(ele) {

  // Turn passed ele and its content into a WYSIWYG-editor.

  // Sanitize passed html of ele:
  ele.innerHTML = removeSpaces(ele.innerHTML)

  // Define a context-node, representing the currently edited text-node:
  var node = getNextTextNode(ele)

  // Split node into three nodes representing text-begin, cursor and text-end:
  var pos = 0
  var nodes = insertCursor(node, pos)
  var nodesAndPos = [nodes, pos]

  // Initially make ele clickable and set focus on it:
  ele.tabIndex = 0
  ele.focus()

  // Listen to user-input:
  ele.onclick = function(eve) {
    handleClick(eve)
  }
  ele.onkeypress = function(eve) {
    nodesAndPos = handleKeypress(eve, nodesAndPos)
  }

} // main

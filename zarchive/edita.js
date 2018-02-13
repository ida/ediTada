function addBlock(currentBlock, blockTagName) {

  
  var block = document.createElement(blockTagName)  
  currentBlock.appendChild(block)  

  
} // addBlock




function addCursor(ele, cursorPosis) {
// Passed ele is parent of cursor, aka current-ele.

  var startPos = cursorPosis[0]
  var endPos   = cursorPosis[1]
  

  // Prepare cursor-html:
  var cursorClassName ='cursor'
  var cursorOpeningTag ='<span class="' + cursorClassName + ' tabindex=0">'
  var cursorClosingTag = '</span>'

  
  // Remove old cursor:
  if(ele.getElementsByClassName(cursorClassName) > 0) {
    ele.getElementsByClassName(cursorClassName)[0].remove()
  }


  // Compose new html of posis:
  var html = removeSpaces(ele.innerHTML)
  var start  = html.slice(0, startPos)
  var middle = html.slice(startPos, endPos)
  var end    = html.slice(endPos, html.length)
  html = start + cursorOpeningTag + middle + cursorClosingTag + end


  // Set new cursor:
  ele.innerHTML = html


}

  
  
  
function ini(ele) {
    
  var block = null
  var blocks = ele.children
  var blockTagName = 'p'
  var current = null           // cursor-parent
  var cursorPosis = [0, 0]

  
  if(blocks.length > 0) {      // has blocks
    block = blocks[0]          // set block
  }                            //  no blocks
  else {                       // add block
    block = document.createElement(blockTagName)
    blocks.appendChild(blocks) // set block
  }
  
  
  if(block.children.length > 0) {   // has inline-child(s)
    var current = block.children[0] // inline is current
  }
  else {                            // no inline-childs
    var current = block             // block is current
  }
    
  
  cursorPosis = addCursor(current, cursorPosis)

  ele.tabIndex = 0
  ele.onkeypress = function(eve) { onKeyEvent(eve) }
  ele.onkeyup    = function(eve) { onKeyEvent(eve) }


} // ini
  
  
function main(ele) {
  ini(ele)
}

  

function onArrowRight(eve) {
  
}

  
  

function onKeyEvent(eve) {
console.log('keyeve')
  var key = eve.keyCode
  if(key==39) {  // arrow-right
    onArrowRight(eve)
  }
}

  

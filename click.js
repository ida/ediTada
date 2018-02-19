function getPosRight(ele) {
  return ele.getBoundingClientRect().right
}
function handleClick(eve) {
// Rerender text char by char and insert cursor when ele-width meets click-pos.
  var character = null
  var clickedEle = eve.target
  var clickPosis = [eve.clientX, eve.clientY]
  var foundPos = false
  var wrapperEle = null
  var text = null
  var texts = []
  // Collect and remove all texts of text-nodes:
  forEachTextNode( clickedEle, function(node) {
    texts.push(node.textContent)
    node.textContent = ''
  });
  // Create wrapper ele with display inline-block, so we can measure width:
  wrapperEle = document.createElement('span')
  wrapperEle.style.display = 'inline-block'
  // Move nodes of clickedEle into wrapperEle:
  moveChildren(clickedEle, wrapperEle)
  // Insert wrapperEle into clickedEle:
  clickedEle.appendChild(wrapperEle)
  // Refill text-nodes with texts until clickPosis are met:
  forEachTextNode( wrapperEle, function(node) {
    text = texts.shift() // remove and return first item of texts
    if(foundPos === false) {
      while(text.length > 0) {
        character = text.slice(0, 1) // get first character
        text = text.slice(1) // remove first character of text
        node.textContent += character
        if(posisAreMet(wrapperEle, clickPosis) === true) {
          // Insert cursor and rest of text, break loop on nodes:
          node.textContent += '|'
          node.textContent += text
          foundPos = true
          break
        }
      }
    }
    else if(foundPos === true) {
      node.textContent = text
    }
    // Lastly move nodes of wrapperEle into clickedEle:
//    moveChildren(wrapperEle, clickedEle)
    // And remove wrapperEle:
//    wrapperEle.remove()
  });
}
function posisAreMet(wrapperEle, clickPosis) {
  return getPosRight(wrapperEle) >= clickPosis[0]
}

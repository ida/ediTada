function getEleBottomPos(ele) {
  return ele.getBoundingClientRect().bottom
}
function getEleRightPos(ele) {
  return ele.getBoundingClientRect().right
}
function getCharPosInEleOfClickPos(eve) {
// Rerender ele char by char, insert cursor when posis are met.
// For now we assume ele has no child-eles, only text.

  var charPos = null
  var clickPosLeft = eve.clientX
  var clickPosTop = eve.clientX
  var ele = eve.target
console.log(ele)
  var html = ele.innerHTML


  // Empty ele:
  ele.innerHTML = '' // empty ele

  // Create wrapper ele with display inline-block so we can measure width:
  var wrapperEle = document.createElement('span')
  wrapperEle.style.display = 'inline-block'
  ele.appendChild(wrapperEle)

  // Refill ele char by char until clickPosis are met or exceeded:
  for(var i in html) {
console.log(i)
    var char = html[i]
console.log(getEleRightPos(ele))



    if(getEleRightPos(wrapperEle) >= clickPosLeft) {
	    return i
    }
    wrapperEle.innerHTML += char
  }
  ele.innerHTML = wrapperEle.innerHTML
//  return charPos
}

var wrapperEle = null
var clickedEle = null
var clickPosLeft = null
var posIsMet = false
var texts = []
var text = null
function removeAndStoreTextToTexts(textNode) {
  texts.push(textNode.textContent)
  textNode.textContent = ''
}
function refillTextUntilPosIsMet(node) {
  var character = null
  var textNode = null
  if(node instanceof Text) {
    textNode = node
    text = texts.shift()
  }
  else if(node instanceof Element) {
    textNode = node.firstChild
  }
  for(var j in text) {
    character = text[j]
    if(getEleRightPos(textNode.parentNode) >= clickPosLeft) {
      posIsMet = true
    }
    if(posIsMet == false) {
      textNode.textContent += character
    }
  }
}
function handleClick(clickEvent) {
/*
On a click, get the char-pos corresponding to click pos.
We need to empty the ele of text and refill it char by char,
so we can measure the current width and when it meets the
click-x-pos, insert the cursor.
*/

  clickedEle = clickEvent.target
  clickPosLeft = clickEvent.clientX
  posIsMet = false
  texts = []
  text = null
  wrapperEle = document.createElement('span')


  // Make wrapperEle dimensions measureable:
  wrapperEle.style.display = 'inline-block'
  // Move childNodes of clickedEle into wrapperEle:
  while(clickedEle.firstChild) wrapperEle.appendChild(clickedEle.firstChild)
  // Insert wrapperEle into clickedEle:
  clickedEle.appendChild(wrapperEle)
  

  forEachTextNode(clickedEle, removeAndStoreTextToTexts)
  forEachNode(clickedEle, refillTextUntilPosIsMet)


}

// EOF

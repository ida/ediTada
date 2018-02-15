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

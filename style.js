var background = 'black'
var color= 'lightblue'

var styleEle = document.createElement('style')
styleEle.innerHTML = `
body {
  color: ` + color + `;
  background: ` + background + `;
}
`
document.head.appendChild(styleEle)

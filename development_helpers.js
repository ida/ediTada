setInterval(function(){window.location.href=window.location.href},
7777) // Reload page every n ms.
function dev(msg='msg') {
  var msgEle = document.createElement('div')
  msgEle.innerHTML = msg
  document.body.insertBefore(msgEle, document.body.firstChild)
}

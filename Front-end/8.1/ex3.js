let clickCount = 0;
const countFun = () => {
  clickCount += 1;
  let p = document.getElementById('click-count')
  return p.innerHTML = clickCount
}

document.getElementById('button').addEventListener('click', countFun);
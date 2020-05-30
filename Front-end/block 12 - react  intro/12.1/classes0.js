class Pen {
  constructor(point, color, ink = 100) {
    this.point = point;
    this.color = color;
    this.ink = ink;
  }

  changeColor(color) {
    this.color = color;
  }

  loseInk(quant) {
    this.ink -= quant;
  }

  sign() {
    return `'I've signed a text with a ${this.color} pen. charge: ${this.ink}%'`;
  }

  wroteText(str) {
    this.loseInk(str.length);
    return `${str} ${this.sign()}%`;
  }
}
const blackPen = new Pen(0.7, 'black');
console.log(blackPen.wroteText('Olá, tudo bem? VQV!!!!!!!!!'));

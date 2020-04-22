estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
const select = document.getElementById('est');
function addOption() {
  for (estado in estados) {
    const opt = document.createElement('option');
    opt.innerHTML = estados[estado];
    select.appendChild(opt);
  }
}
new JustValidate('.js-form', {
  rules: {
    checkbox: {
      required: true
    },
    myField: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    password: {
      strength: {
        default: true,
      }
  },
  messages: {
    name: {
      minLength: 'My custom message about only minLength rule'
    },
    email: 'My custom message about error (one error message for all rules)'
  },

const date = document.getElementById('data');
document.getElementById('data').DatePickerX.init();

function addSlash() {
  date.value = date.value.replace(/^(\d\d)(\d)$/g, '$1/$2').replace(/^(\d\d\/\d\d)(\d+)$/g, '$1/$2').replace(/[^\d\/]/g, '')
}

function dateLimits() {
  let splitDate = data.value.split(" ", 2);
  if (splitDate > 31) {
    alert('Insira um valor menor que 31');
    date.value = '';
  }
  let splitDate2 = data.value.split("/");
  if (splitDate2[1] > 12) {
    alert('Insira um valor menor que 12');
    date.value = '';
  }
}

const buttonSubmit = document.getElementById('button');
const allInputs = document.querySelectorAll('input');
const allTextArea = document.querySelectorAll('textarea');

function formDiv() {
  const newDiv = document.createElement('div');
  document.body.appendChild(newDiv);
  for ( let i = 0; i < allInputs.length; i +=1 ) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = allInputs[i].value;
    newDiv.appendChild(paragraph);
  }
  for ( let k = 0; k < allTextArea.length; k +=1 ) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = allTextArea[k].value;
    newDiv.appendChild(paragraph);
  }
}

const buttonClear = document.getElementById('clear');
function clearForm() {
  for ( let i = 0; i < allInputs.length; i +=1 ) {
    allInputs[i].value = '';
  }
  for ( let k = 0; k < allTextArea.length; k +=1 ) {
    allTextArea[k].value = '';
  }
  while (document.querySelector('div')) {
    document.querySelector('div').remove();
  }
}

window.onload = function () {
  this.addOption();
  // date.addEventListener('keyup', function () {
  //   addSlash();
  //   dateLimits();
  // });
  buttonSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    formDiv();
  })
  buttonClear.addEventListener('click', this.clearForm)
}
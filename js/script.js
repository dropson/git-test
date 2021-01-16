

let button = document.querySelector('button');
let total = document.querySelector('.total');

let getDate = new Date();
let nowDate = getDate.getFullYear();
let eighteen = "18";
button.onclick = () => {

  let inputDate = +document.querySelector('.date').value;
  let userYears = nowDate - inputDate;
  
  if( userYears >= eighteen){
    total.innerHTML = ' Мужик';
  }else {
    total.innerHTML = 'Летычь';
  }

}
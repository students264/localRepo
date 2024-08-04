function calculate(){
let res=document.getElementById("put");
let status=document.getElementById("status");
let weight=Number(document.getElementById("kg").value);
let ft=Number(document.getElementById("ft").value);
let inc=Number(document.getElementById("in").value);
let inche=(ft*12)+inc;
let h=(inche*0.0254);
let bmi=(weight)/(h*h);
if(bmi<=18.4){
  res.innerText=bmi.toPrecision(3);
  status.innerText="Underweight";
}
else if(bmi>=18.5 && bmi<=24.9){
    res.innerText=bmi.toPrecision(3);
  status.innerText="Normal";
}
else if(bmi>=25.0 && bmi<=39.9){
    res.innerText=bmi.toPrecision(3);
  status.innerText="Overweight";
}
else{
    res.innerText=bmi.toPrecision(3);
  status.innerText="Obesity";
}
}

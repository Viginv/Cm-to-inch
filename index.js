function vigin(){
  let  cminch = Number(document.getElementById("valu").value);
  const inch = cminch/2.54;
  const result = document.getElementById("result");
  result.innerHTML = inch.toFixed(2) + "inches";
  
}


  
  



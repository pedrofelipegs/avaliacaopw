function corrigir(){ 
  // let row = document.querySelector('hr');
  // row.classList.add('show');
  
  let result = document.querySelector('#result');
  result.classList.remove('hide'); 
  result.classList.add('show'); 
  
  let corretas = 0; 
  
  let camText = document.getElementById("texto").value; 
  document.getElementById("camText").innerHTML = ("Nome: " + camText); 
  
  let QuesPri = document.getElementById("Q01").value; 
  document.getElementById("quespri").innerHTML = ("Resposta 1: " + QuesPri); 
  
  if(QuesPri == 2){ 
    corretas++
  } 
  
  let camText2 = document.getElementById("Q02").value; 
  document.getElementById("camText2").innerHTML = ("Resposta 2: " + camText2); 
  
  if(camText2 == "Adm,info e enf"){ 
    corretas++ 
  }
  
  let checkbox_octal = document.getElementById("check1").checked;
  let checkbox_binario = document.getElementById("check2").checked; 
  let checkbox_decimal = document.getElementById("check3").checked; 
  let checkbox_hexadecimal = document.getElementById("check4").checked; 
  
  if(checkbox_octal){ 
    document.getElementById("campoOctal").innerHTML = ("Resposta 3: Sistema Octal")
  }if(checkbox_binario){ 
    document.getElementById("campoBinario").innerHTML = ("Resposta 3: Sistema Binário")
  }if(checkbox_decimal){ 
    document.getElementById("campoDecimal").innerHTML = ("Resposta 3: Sistema Decimal")
  }if(checkbox_hexadecimal){ 
    document.getElementById("campoHexadecimal").innerHTML = ("Resposta 3: Algarismos Hexadecimal")
  }
  
  if ((checkbox_binario)&&(checkbox_hexadecimal)){ 
    corretas++
    if ((checkbox_octal)||(checkbox_decimal)) { 
      corretas--
    }
  }
  
  if(document.getElementById("iso").checked){ 
    document.getElementById("camRadio").innerHTML = ("Resposta 4: Álcool Isopropílico");
  }else if(document.getElementById("con").checked){ 
    document.getElementById("camRadio").innerHTML = ("Resposta 4: Limpa Contato"); 
    corretas++
  }else if(document.getElementById("alc").checked){
    document.getElementById("camRadio").innerHTML = ("Resposta 4: Álcool 70%");
  }else if(document.getElementById("agu").checked){
    document.getElementById("camRadio").innerHTML = ("Resposta 4: Água");
  }
  
  if(document.getElementById("ver").checked){ 
    document.getElementById("camRadio2").innerHTML = ("Resposta 5: Verdadeira"); 
    corretas++
  }else if(document.getElementById("fal").checked){ 
    document.getElementById("camRadio2").innerHTML = ("Resposta 5: Falsa");
  } 
  
  let percent = (corretas/5)*100; 
  document.getElementById("corretas").innerHTML = ("Acertos: "+ corretas);
  document.getElementById("percentual").innerHTML = ("Percentual: "+ percent + "%");
}

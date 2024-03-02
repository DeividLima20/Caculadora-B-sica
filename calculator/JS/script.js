    
    
    idioma();
    idiomaTroca();

    $('#calculate').click(function(){
        $('.calculo').fadeIn()
    })

    $('.fechar').click((e)=>{
        var clear = document.getElementById('resultado');
        clear.innerHTML = '<span></span>';
        var f=document.getElementById("frm");
   var n1 = f.n1;
   var n2 = f.n2;
   n1.value = "";
   n2.value = "";
       
        $('.calculo').fadeOut();
        
    })

    $('.fechar1').click((e)=>{
       
        var clear = document.getElementById('resultado');
        clear.innerHTML = '<span></span>';
        var f=document.getElementById("frm");
   var n1 = f.n1;
   var n2 = f.n2;
   n1.value = "";
   n2.value = "";
        $('.error').fadeOut();
        $('.error_fundo').fadeOut();
       
        
    })

         $('#clear').click(()=>{
        var clear = document.getElementById('resultado');
        clear.innerHTML = '<span></span>';

    })
   
   
    
    function error() {
        $('.error_fundo').fadeIn();
        $('.error').fadeIn();
    }
    
   
    function calculate(valor){
        return valor.toLocaleString('pt-br')

         
    }

    function simbolError(){
        $('#simbol').click(()=>{
            var resul = document.getElementById('resultado').value;
            if(resul == undefined){
                error();
            }
        })
        $('#simbol1').click(()=>{
            var resul = document.getElementById('resultado').value;
            if(resul == undefined){
                error();
            }
        })
        $('#simbol2').click(()=>{
            var resul = document.getElementById('resultado').value;
            if(resul == undefined){
                error();
            }
        })
        $('#simbol3').click(()=>{
            var resul = document.getElementById('resultado').value;
            if(resul == undefined){
                error();
            }
        })
    }
    
    
    

    function calc(e) {
        var operacao = e.value;
   
   var n1=parseFloat(document.getElementById("n1").value);
   var n2=parseFloat(document.getElementById("n2").value);


   
   
   var calculo = eval(n1+operacao+n2);
  

        
  var calcR = document.getElementById('resultado').innerHTML = calculate(calculo);


      }


      function idioma(){

        $('#trocar_idioma2').click(()=>{
            $('.opcoes2').fadeIn();
        })
        $('.opcao1').click(()=>{
            $('.portugues').css("display", "block");
            $('.opcoes').css('display','none');
            $('.english').css("display", "none");
      })
      $('#trocar_idioma').click(()=>{
        $('.opcoes').fadeIn();
    })
      $('.opcao').click(()=>{
            $('.english').css("display", "block");
            $('.opcoes2').css('display','none');
            $('.portugues').css("display", "none");
            
      })
      
      }
   

      function portugues(){
        var logo = document.querySelector('.logo');
        var abrirCalc = document.querySelector('#calculate');
        var btnLimpar = document.querySelector('#clear');
        var tituloModal = document.querySelector('.calculo p')

        //LOGO
        logo.textContent = 'CALCULADORA';
        //BOTAO ABRIR CALCULADORA
        abrirCalc.value = 'Abrir Calculadora';
        //BOTAO LIMPAR
        btnLimpar.value = 'Limpar';
        //TITULO MODAL
        tituloModal.textContent = 'Escreva os numeros para ser calculados';
      }

      function english(){
        var logo = document.querySelector('.logo');
        var abrirCalc = document.querySelector('#calculate');
        var btnLimpar = document.querySelector('#clear');
        var tituloModal = document.querySelector('.calculo p')

        //LOGO
        logo.textContent = 'CALCULATOR';
        //BOTAO ABRIR CALCULADORA
        abrirCalc.value = 'Open Calculator';
        //BOTAO LIMPAR
        btnLimpar.value = 'Clear';
        //TITULO MODAL
        tituloModal.textContent = 'Write the numbers to be calculated';
      }

      function idiomaTroca(){
        var opcao1 = document.querySelector('.opcao1')
        var opcao = document.querySelector('.opcao')
        $(opcao1).click(()=>{
            portugues();
        })
        $(opcao).click(()=>{
            english();
        })
      }
    

    

  
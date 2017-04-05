/**
 * Created by victo_000 on 17/02/2017.
 */
var numeroIn = 0;
var resultado = 0;
var memory = 0;
var current = 0;
var operacion = 0;

//-------------------------------- ZONA DE OPERACIONES DE SUMA, RESTA E IGUAL ------------------------------------------
$(function () {

    // ALMACENAR VARIABLE EN SUMA / RESTA
    function almacenaMemoria() {
        //noinspection JSJQueryEfficiency
        current = parseInt($("#pantalla").val());
        memory = current;
        current = 0;
        $("#pantalla").val("");
    }

    // ZONA SUMA
    $("#suma").on("click",function(){
        // Hay una suma previa.
        switch(operacion){
            case 0:
                almacenaMemoria();
                operacion = 1;
                break;
            case 1:
                calculaSuma();
                $("#pantalla").val("");
                break;
            case 2:
                calculaResta();
                $("#pantalla").val("");
                operacion = 1;
                break;
        }
    });

    function calculaSuma(){
        if($("#pantalla").val() == "")
            current = 0;
        else
            current = parseInt($("#pantalla").val());
        resultado = eval(memory) + eval(current);
        memory = resultado;
    }

// ZONA RESTA

    $("#resta").on("click",function(){
        switch (operacion){
            case 0:
                almacenaMemoria();
                operacion = 2;
                break;
            case 1:
                calculaSuma();
                $("#pantalla").val("");
                operacion = 2;
                break;
            case 2:
                calculaResta();
                $("#pantalla").val("");
                break;

        }
    });

    function calculaResta(){
        if($("#pantalla").val() == "")
            current = 0;
        else
            current = parseInt($("#pantalla").val());

        resultado = eval(memory) - eval(current);
        memory = resultado;
    }

// FUNCION IGUAL

    $("#igual").on("click",function(){
        //resto de casos
        if($("#pantalla").val()==""){
            $("#pantalla").val("Error");
            operacion = 0;
        }

        else{
            switch (operacion){
                case 0:
                    numeroIn = parseInt($("#pantalla").val());
                    $("#pantalla").val(numeroIn);
                    break;
                case 1:
                    calculaSuma();
                    $("#pantalla").val(resultado);
                    current=0;
                    memory=0;
                    operacion = 0;
                    resultado = 0;
                    break;
                case 2:
                    calculaResta();
                    $("#pantalla").val(resultado);
                    current=0;
                    memory=0;
                    operacion = 0;
                    break;
            }
        }
    });

//----------------------------------- ZONA DE OPERACIONES DE UN OPERANDO -----------------------------------------------

// Cuadrado del número
    $("#cuadrado").on("click",function(){
        numeroIn = parseInt($("#pantalla").val());
        $("#pantalla").val(Math.pow(numeroIn,2));
    });

//  Inverso del número
    $("#inverso").on("click",function(){
        numeroIn = parseInt($("#pantalla").val());
        $("#pantalla").val(1/numeroIn);
    });

//  Raíz cuadrada
    $("#raiz").on("click",function(){
        numeroIn = parseInt($("#pantalla").val());
        // Suponiendo que no operamos con complejos, nos dara error al hacer la raiz de un negativo.
        if(numeroIn < 0){
            $("#pantalla").val("Error");
        }
        else{
            $("#pantalla").val(Math.sqrt(numeroIn));
        }
    });

//  Parte entera
    $("#pentera").on("click",function(){
        numeroIn = parseInt($("#pantalla").val());
       //Numero negativo
        if(numeroIn<0){
          -($("#pantalla").val(Math.ceil(x)));
        }
        //Numero positivo
        else
        $("#pantalla").val(Math.floor(x));
    });

//  Potencia base 2
    $("#potencia2").on("click",function(){
        numeroIn = parseInt($("#pantalla").val());
        $("#pantalla").val(Math.pow(2,numeroIn));
    });

//  Factorial
    $("#factorial").on("click",function(){
        numeroIn = parseInt($("#pantalla").val());
        //No podemos hacer el factorial de un numero negativo
        if(numeroIn < 0){
            $("#pantalla").val("Error");
        }
        // Algoritmo que calcula el factorial de un numero.
        else{
            var total = 1;
            for (i=1; i<=numeroIn; i++) {
                total = total * i;
            }
            $("#pantalla").val(total);
        }
    });

    //  Sumatorio
    $("#sumatorio").on("click",function(){
        var arrayIn = $("#pantalla").val().split(",");

        // Algoritmo que calcula el sumatorio de los numeros
        // pasados omo parametros CSV

        var acumulado=0, i = 0;
            while(i< arrayIn.length){
                acumulado = acumulado+ (parseInt(arrayIn[i]));
                i++;
            }
        $("#pantalla").val(acumulado);
    });


    //  Productorio
    $("#productorio").on("click",function(){
        var arrayIn = $("#pantalla").val().split(",");

        // Algoritmo que calcula el sumatorio de los numeros
        // pasados omo parametros CSV

        var acumulado=1, i = 0;
        while(i< arrayIn.length){
            acumulado = acumulado*(parseInt(arrayIn[i]));
            i++;
        }
        $("#pantalla").val(acumulado);
    });

// Limpia la pantalla
    $("#limpiar").on("click",function(){
        $("#pantalla").val("");
    });
// Limpiamos al hacer click en la pantallas
    $("#pantalla").on("click",function(){
        $("#pantalla").val("");
    });
});


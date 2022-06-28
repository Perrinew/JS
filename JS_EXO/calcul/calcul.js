function additionBy()
    {
            num1 = document.getElementById("boisson").value;
            num2 = document.getElementById("plat").value;
            num3 = document.getElementById("supplément").value;
            document.getElementById("result").innerHTML = (parseInt (num1) + parseInt (num2) + parseInt (num3));
    }
    
    function divideBy() 
    { 
            num1 = document.getElementById("firstNumber").value;
            num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
    }
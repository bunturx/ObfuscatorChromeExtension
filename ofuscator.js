document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("botonOfuscar").addEventListener("click", obfuscate);
    document.getElementById("botonDesofuscar").addEventListener("click", undoObfuscate);
    document.getElementById("clean").addEventListener("click", clean);
});
    /**
     * Method responsible for clear all inputs
     * @param
     * @return
     */
    function clean(evento){
        evento.preventDefault();
        document.getElementById("obfuscateValue").value = "";
        document.getElementById("undofuscateValue").value = "";       
    }

     /**
     * Method responsible for obfuscate a values
     * @param valor
     * @return valueObfuscated
     */ 
    function obfuscate(evento){
        evento.preventDefault();
        var ofus = document.getElementById("obfuscateValue").value;

        var halfIdTransaction = calculateHalfNumber(ofus.length);

        var firstPart = ofus.substring(0, halfIdTransaction);
        var reversedFirstPart = firstPart.split("").reverse().join("");

        var secondPart = ofus.substring(halfIdTransaction, ofus.length);
        var reversedSecondPart = secondPart.split("").reverse().join("");

        responseOfus = (plusOne(reversedFirstPart+reversedSecondPart));
        document.getElementById("obfuscateValue").value = responseOfus;
        console.log(responseOfus);
    }

    /**
     * Method responsible for find the half of the value
     * @param value
     * @return halfOfTheValue
     */
    function calculateHalfNumber(value){
        if(value % 2 == 0){
            return value / 2;
        }
        return (value / 2) + 1;
    }

    /**
     * Method responsible add one to each character of the value
     * @param value
     * @return numberPlusOne
     */
    function plusOne(value){
        var numberPlusOne = "";
        for(var i = 0; i < value.length; i++){
            let partValue = value.charAt(i);
            if(/^\d+$/.test(partValue)) {
                var x = parseInt(partValue) + 1;
                if(x == 10){
                    x = 0;
                }
                numberPlusOne +=x;
            }else {
                numberPlusOne +=partValue;
            }
        }

        return numberPlusOne;
    }

    /**
     * Method responsible for undo obfuscate of the value
     * @param value
     * @return valueUndoObfuscated
     */
    function undoObfuscate(evento){
        evento.preventDefault();

        var dofus = document.getElementById("undofuscateValue").value;
        var halfIdTransaction = calculateHalfNumber(dofus.length);

        var firstPart = dofus.substring(0, halfIdTransaction);
        var reversedFirstPart = firstPart.split("").reverse().join("");

        var secondPart = dofus.substring(halfIdTransaction, dofus.length);
        var reversedSecondPart = secondPart.split("").reverse().join("");

        var responseUndofus = (minusOne(reversedFirstPart+reversedSecondPart));
        document.getElementById("undofuscateValue").value = responseUndofus;
    }

    /**
     * Method responsible for subtract one to each character of the value
     * @param value
     * @return numberMinusOne
     */
    function minusOne( value){
        var numberMinusOne = "";
        for(var i = 0; i < value.length; i++){
            let partValue = value.charAt(i);
            if(/^\d+$/.test(partValue)) {
                var y = parseInt(partValue) - 1;
                if(y < 0){
                    y = 9;
                }
                numberMinusOne+=y;
            }else {
               numberMinusOne+=partValue;
            }

        }
        return numberMinusOne;
    }

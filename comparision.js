/* alt + arrow_keys : move line up or down */
/* In Javscript, euqality operator == and comparision operators <,>,=> works different. comparision operator converts the operands
so in this case null is converted to 0 during comparision */
console.log(null==0)
console.log(null>0)   
console.log(null>=0)
console.log()  

console.log(undefined==0)
console.log(undefined>0)   
console.log(undefined>=0)  
console.log()

/* The best practice is to use strict comparision i.e === that will compare not only the values but datatypes too */
console.log("3"==3)   /* "3" gets converted to number 3*/
console.log("3"===3)  /* no conversion happens i.e the datatype is compared too */


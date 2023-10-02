(function anything(){
    var name="mahesh Majhi";
    console.log("hello i'm "+ name)
})();   //always remeber to use ; in iif



/* arrow function in immediately invoked functions */
(()=>{
    console.log(`DB connected`)
})();


// passing parameters into the iif
((name)=>{
    console.log(`welcome to the course ${name}`)
})("mahesh")
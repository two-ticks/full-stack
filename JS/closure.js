// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

//closure -- function along with lexical scope

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }

//     return y;
// }

// var z = x(); //JS is synchronous so x() will be removed from call-stack after this line of execution

// console.log(z);

// z(); //still maintains its lexical scope

// gotcha

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a); //reference to 'a'
//     }
//     a = 100;
//     return y;
// }

// var z = x(); //JS is synchronous so x() will be removed from call-stack after this line of execution

// // console.log(z);
// z();

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b); //reference to 'a'
    }
    y();
  }
  x();
}

z();

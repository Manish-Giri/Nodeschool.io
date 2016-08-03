/**
 * Created by manishgiri on 8/3/16.
 */
//
// IIFE, Immediately Invoked Function Expression, is a common pattern for
//     creating local scopes example:
//
//     (function(){ // the function expression is surrounded by parenthesis
//         // variables defined here
//         // can't be accessed outside
//     })(); // the function is immediately invoked

var a = 1, b = 2, c = 3;

(function firstFunction(){
    var b = 5, c = 6;

    (function secondFunction(){
        var b = 8;
        console.log("a: "+a+", b: "+b+", c: "+c);

        (function thirdFunction(){
            var a = 7, c = 9;

            (function fourthFunction(){
                var a = 1, c = 8;

            })();
        })();
    })();
})();
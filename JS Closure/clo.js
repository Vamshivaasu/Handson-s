/* var globalVar = "xyz";

            (function outerFunc(outerArg) {
                var outerVar = 'a';
                
                (function innerFunc(innerArg) {
                var innerVar = 'b';
                
                console.log(
                    "outerArg = " + outerArg + "\n" +
                    "innerArg = " + innerArg + "\n" +
                    "outerVar = " + outerVar + "\n" +
                    "innerVar = " + innerVar + "\n" +
                    "globalVar = " + globalVar);
                
                })(456);
            })(123); */

/* 
            function outer() {
                let str = "GeeksforGeeks";
                function inner() {
                    console.log(str);
                }
                return inner;
            }
            const fun = outer();
            fun(); */


/* function areaRectangle(width, length)
    {
        let area = width * length;
        return area;
    }
    let width = 5;
    let length = 6;
    document.write("Area = " + areaRectangle(width, length) + "<br>"); */
    function outer(length){
        function inner(breadth){
            console.log(length*breadth)
        }
        inner(20)
    }
    outer(10);
    
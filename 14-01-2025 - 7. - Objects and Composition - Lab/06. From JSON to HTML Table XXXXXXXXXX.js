// From JSON to HTML Table

// You’re tasked with creating an HTML table of students and their scores. 
// You will receive a single string representing an array of objects, 
// the table’s headings should be equal to the object’s keys, while each object’s values should be a new entry in the table. 
// Any text values in an object should be escaped, to avoid introducing dangerous code into the HTML.

// Input
// The input comes with a single string argument (the array of objects).

// Output
// The output should be printed on the console – for each entry row in the input print the object representing it.
// Note: Objects’ keys will always be the same. Check more information for the HTML Entity here.

// HTML
// You are provided with an HTML file to test your table in the browser.

// index.html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>FromJSONToHTMLTable</title>
//     <style>

//         table,th{
//             border: groove;
//             border-collapse: collapse;
//         }
//         td{
//             border: 1px solid black;
//         }

//         td,th{
//             padding: 5px;
//         }

//     </style>
// </head>
// <body>
//     <div id="wrapper">
//     </div>
//     <script>

//         function fromJSONToHTMLTable(input){
//         //Write your code here

//     }
//     window.onload = function(){
//         let container = document.getElementById('wrapper');
//         container.innerHTML =
// fromJSONToHTMLTable(['[{"Name":"Stamat","Price":5.5},{"Name":"Rumen","Price":6}]']);
//     };
//     </script>
// </body>
// </html>
 

// Input   `[{"Name":"Stamat","Score":5.5}, 
// Output  <table> <tr><th>Name</th><th>Score</th></tr>

// Input   {"Name":"Rumen", "Score":6}]` 
// Output  <tr><td>Stamat</td><td>5.5</td></tr> <tr><td>Rumen</td><td>6</td></tr> </table>


// Input   `[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]` 
// Output  <table> <tr><th>Name</th><th>Score</th><th>Grade</th></tr> <tr><td>Pesho</td><td>4</td><td>8</td></tr> <tr><td>Gosho</td><td>5</td><td>8</td></tr> <tr><td>Angel</td><td>5.5</td><td>10</td></tr> </table>
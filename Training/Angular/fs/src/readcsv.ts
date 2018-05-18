import * as fs from 'fs';
//import * as parse from 'csv-parse';
var parse = require('csv-parse');
//require('should');

var inputFile = './data/order.csv';

var parser = parse({delimiter : ','}, (err, data) => {

    if(err) throw err;

    //index is an optional parameter which is the index of array data
    data.forEach((element,index) => {
        var num = element[0];
        var date = element[1];
        var amount = element[2];

        if (index > 0){
            var salesTax : number = Number(amount) * 0.125;
            console.log ('Date: ' + date + 
                       ', Total order for ' + num + 
                       ', is ' + amount + ', ' + 
                       ' Sales Tax BZD ' + salesTax.toFixed(2));
        }

    });
});

fs.createReadStream(inputFile).pipe(parser);

/*
var input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"';
parse(input, {comment: '#'}, function(err, output){
  output.should.eql([ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]);
});
*/

/*
var parse = require('csv-parse');
require('should');

var input = './data/order.csv';

parse(input, {comment: '#'}, function(err, output){
  output.should.eql([ [ '1', '2', '3', '4' ], [ 'a', 'b', 'c', 'd' ] ]);
});

*/
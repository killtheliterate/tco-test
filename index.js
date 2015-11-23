require('babel/register')

var tco = require('./src/tco')
var List = require('./src/list')

console.log('passes function test')

tco.test1(250000)
tco.test2(250000)

var list = List()

for(var i = 0; i < 250000; i = i +1) {
    list.add(i)
}

console.log('structure test')

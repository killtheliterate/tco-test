'use strict'

// credit to http://bit.ly/1QEsLy8

export function test1(n) {
    var tco = function(n, acc) {
        if (n == 0) {
            return acc
        } else {
            return tco(n-1, acc+1)
        }
    }

    return tco(n, 1)
}

export function test2(n, acc=1) {
    if (n == 0) {
        return acc
    } else {
        return test2(n-1, acc+1)
    }
}

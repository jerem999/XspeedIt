const nonOptimise = require('../fonction/nonOptimise')
const test1 = [ 1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3 ]
const resultat1 = '163/8/41/6/8/9/52/5/7/73'
test('[ 1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3 ] ==>  163/8/41/6/8/9/52/5/7/73', () => {
    expect(nonOptimise.nonOptimise(test1)).toBe(resultat1)
})
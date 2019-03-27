const optimise = require('../fonction/optimise')

// test 1
const test1 = [1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3]
const resultat1 = '91/82/81/73/73/64/6/55'
test('[1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3] ==>  91/82/81/73/73/64/6/55', () => {
    expect(optimise.optimise(test1)).toBe(resultat1)
})

// test 2
const test2 = [7, 8, 3, 2]
const resultat2 = '82/73'
test('[7, 8, 3, 2] ==>  82/73', () => {
    expect(optimise.optimise(test2)).toBe(resultat2)
})
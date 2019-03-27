exports.optimise = function(articleInt){
    const listArticleOptimise = []
    const maxArticle = 10
    const TriCroissant = articleInt.sort(function(a, b){return b-a})
    const tailleMax = TriCroissant.length
    while (TriCroissant.length > 0) {
        let articles = TriCroissant.shift()
        if (TriCroissant.length != tailleMax-1) {
            listArticleOptimise.push('/' + articles)
        } else {
            listArticleOptimise.push(articles)
        }
        const test = TriCroissant.map( x => {
            if (x <= maxArticle - articles) {
                articles = articles + x
                TriCroissant.splice(TriCroissant.indexOf(x), 1)
                return listArticleOptimise.push(x)
            }
        })
    }
    return listArticleOptimise.join('')
}
exports.optimise = function(articleInt){
    const listArticleOptimise = []
    const maxArticle = 10
    let TriCroissant = articleInt.sort(function(a, b){return b-a})
    const tailleMax = TriCroissant.length
    while (TriCroissant.length > 0) {
        let articles = TriCroissant.shift()
        if (TriCroissant.length != tailleMax-1) {
            listArticleOptimise.push('/' + articles)
        } else {
            listArticleOptimise.push(articles)
        }
        TriCroissant = TriCroissant.filter(x => {
            if (x <= maxArticle - articles) {
                articles = articles + x
                listArticleOptimise.push(x)
                return false                    // supprime l'élément de tricroissant et ajoute dans listArticleOptimisé
            }
            return true                         // laisse l'élément dans tricroissant car non modifier
        })
    }
    return listArticleOptimise.join('')
}
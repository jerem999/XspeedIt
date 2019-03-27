exports.nonOptimise = function(articleInt){
	let nbArticleBox = 0
    let i = 0
    const listArticleNonOptimise = articleInt.map(x => {
        if (i < articleInt.length) {
            i++
            nbArticleBox = nbArticleBox + x
            if (nbArticleBox > 9) {
                if (nbArticleBox > 10) {
                    nbArticleBox = x
                    return '/' + x
                } else {
                    nbArticleBox = 0
                    if (i == articleInt.length) {
                        return x
                    } return x + '/'
                }
            } return x
        }
        return x
    })
	return listArticleNonOptimise.join('')
}
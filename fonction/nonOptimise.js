exports.nonOptimise = function(ArticleInt){
	let nbArticleBox = 0
    let i = 0
    const listArticleNonOptimise = ArticleInt.map(x => {
        if (i < ArticleInt.length) {
            i++
            nbArticleBox = nbArticleBox + x
            if (nbArticleBox > 9) {
                if (nbArticleBox > 10) {
                    nbArticleBox = x
                    return '/' + x
                } else {
                    nbArticleBox = 0
                    if (i == ArticleInt.length) {
                        return x
                    } return x + '/'
                }
            } return x
        }
        return x
    });
	return listArticleNonOptimise;
};
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nonOptimise = require('./fonction/nonOptimise')
const optimise = require('./fonction/optimise')

app.set('engine view', 'ejs')
app.use(bodyParser.urlencoded ({extended : false}))
app.post('/', (req, res) => {
    
    // recupération de la saisie
    const article = req.body.article
    
    // passage de string en int
    const chaineArticle=article.split('')
    const articleInt = chaineArticle.map(x => {
        return parseInt(x)
    })

    // resultat robot non omptimisé
    const robotNonOptimise = nonOptimise.nonOptimise(articleInt)
    const nbBoxNonOptimise = robotNonOptimise.split('/').length

    // resultat robot non omptimisé
    const robotOptimise = optimise.optimise(articleInt)
    const nbBoxOptimise = robotOptimise.split('/').length

    //render dans le fichier XspeedIt.ejs
    res.render('XspeedIt.ejs',{ 
        article : article,
        robotNonOptimise : robotNonOptimise,
        robotOptimise : robotOptimise,
        nbBoxNonOptimise : nbBoxNonOptimise,
        nbBoxOptimise: nbBoxOptimise
    })
})

app.get('/', (req, res) => {article = 0
    res.render('XspeedIt.ejs')
})

app.listen(8080)
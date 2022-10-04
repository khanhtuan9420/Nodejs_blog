class NewsController {

    //Get /news
    index(req, res) {
        res.render('news')
    }

    //Get /news/:slug
    show(req,res) {
        res.send("haizz")
    }
}

module.exports = new NewsController;
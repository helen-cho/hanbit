var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', pageName: 'home.ejs'});
});

router.get('/posts', function(req, res) {
    res.render('index', {title:'게시글', pageName:'posts/list.ejs'});
});

//게시글 등록
router.get('/posts/write', function(req, res) {
    res.render('index', { title: '글쓰기',  pageName: 'posts/write.ejs' })
});

router.get('/posts/:id', function(req, res) {
    let id=req.params.id;
    res.render('index', { title: '글정보',  pageName: 'posts/read.ejs', id:id });
});

router.get('/posts/update/:id', function(req, res) {
    let id=req.params.id;
    res.render('index', { title: '글정보수정',  pageName: 'posts/update.ejs', id: id });
});

module.exports = router;

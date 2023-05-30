var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function (req, res, next) {
    res.render('index', { title: '로그인', pageName: 'users/login.ejs' });
});

router.get('/join', function(req, res) {
    res.render('index', { title: '회원가입', pageName: 'users/join.ejs' });
});

router.get('/cart', function(req, res) {
    res.render('index', { title: '장바구니', pageName: 'users/cart.ejs' });
});

//마이 페이지
router.get('/mypage', function(req, res) {
    res.render('index', { title: '회원정보', pageName: 'users/mypage.ejs' })
});

//회원 정보 수정
router.get('/update', function(req, res) {
    res.render('index', { title: '회원정보수정', pageName: 'users/update.ejs' })
});
module.exports = router;

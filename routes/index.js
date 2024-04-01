var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/actor1', function(req, res, next) {
  res.render('actor1', { title: 'Actor 1', actorName: 'Sidhu Moosewala', age: 28, occupation: 'Singer' });
});

router.get('/actor2', function(req, res, next) {
  res.render('actor2', { title: 'Actor 2', actorName: 'Shehnaaz Gill', age: 26, occupation: 'Actress' });
});

router.get('/actor3', function(req, res, next) {
  res.render('actor3', { title: 'Actor 3', actorName: 'Nimrat Khera', age: 25, occupation: 'Actress' });
});

router.get('/actor4', function(req, res, next) {
  res.render('actor4', { title: 'Actor 4', actorName: 'Navjot Brar', age: 22, occupation: 'Singer' });
});

module.exports = router;

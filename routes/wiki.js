const express = require('express')
const router = express.Router()
var models = require('../models');
var Page = models.Page; 
var User = models.User; 


router.get('/', function(req, res, next) {
    res.redirect('/');
});
  
router.post('/', function(req, res, next) {
    var page = Page.build({
        title: req.body.title,
        content: req.body['page-content']
      });
      //res.json for testing, res.redirect for actual functionality
      page.save().then(res.json(req.body));
});
  
router.get('/add', function(req, res) {
    res.render('addpage');
  });

module.exports = router
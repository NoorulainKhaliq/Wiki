const express = require('express')
const router = express.Router()

router.get('/users', function(req, res, next) {

});
  
router.get('/users/:id', function(req, res, next) {
    
});

router.post('/users', function(req, res, next) {
    
});

router.put('/users/:id', function(req, res, next) {
    
});

router.delete('/users/:id', function(req, res, next) {
    
});

router.get('/users', function(req, res, next) {
    
});

router.post('/', function(req, res, next) {
    res.send('got to POST /user/');
});
  
router.get('/add', function(req, res, next) {
    res.send('got to GET /user/add');
});

  module.exports = router
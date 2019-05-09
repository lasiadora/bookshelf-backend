const 
  express = require('express'),
  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'book' });
});

router.get('/:id', function(req, res, next) {
  res.send("tagId is set to " + req.params.id);
  console.log(req.params.id);
});



module.exports = router;

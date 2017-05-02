var express = require('express')
var router = express.Router()

router.use('/comments', require('./comments'))
router.use('/users', require('./users'))
router.use('/posts', require('./posts'))


router.get('/', function (req, res) {
  res.render('index')
})

module.exports = router
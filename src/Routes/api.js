const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
//blog functions
router.get('/blog', blogController.create)
router.get('/blog/read',blogController.read)
router.get('/blog/delete',blogController.delete)
router.get('/blog/update',blogController.update)

//comment functions

router.get('/comment', commentController.create)
router.get('/comment/read',commentController.read)
router.get('/comment/delete',commentController.delete)
router.get('/comment/update',commentController.update)

//message functions

router.get('/message', messageController.create)
router.get('/message/read',messageController.read)
router.get('/message/delete',messageController.delete)
router.get('/message/update',messageController.update)

//portfolio functions

router.get('/portfolio', portfolioController.create)
router.get('/portfolio/read',portfolioController.read)
router.get('/portfolio/delete',portfolioController.delete)
router.get('/portfolio/update',portfolioController.update)

//product functions

router.get('/product', productController.create)
router.get('/product/read',productController.read)
router.get('/product/delete',productController.delete)
router.get('/product/update',productController.update)

module.exports = router;
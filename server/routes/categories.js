const express = require('express');
const categoryCtrl = require('../controllers/categories');
const subcategoryCtrl = require('../controllers/subcategories');

const router = express.Router();

router.route('/').post(categoryCtrl.addCategory);
router.route('/').get(categoryCtrl.getAllCategories);
router.route('/:id').get(categoryCtrl.getCategoryById);

router.route('/:id/subcategory').post(subcategoryCtrl.addSubcategory);
router.route('/:id/subcategory/:id').get(subcategoryCtrl.getSubcategoryById);
module.exports = router;

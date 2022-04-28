var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var aeroplane_controller = require('../controllers/aeroplane');

// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// aeroplane ROUTES ///
// POST request for creating a aeroplane.
router.post('/aeroplanes', aeroplane_controller.aeroplane_create_post);
// DELETE request to delete aeroplane.
router.delete('/aeroplanes/:id', aeroplane_controller.aeroplane_delete);
// PUT request to update aeroplane.
router.put('/aeroplanes/:id', aeroplane_controller.aeroplane_update_put);
// GET request for one aeroplane.
router.get('/aeroplanes/:id', aeroplane_controller.aeroplane_detail);
// GET request for list of all aeroplane items.
router.get('/aeroplanes', aeroplane_controller.aeroplane_list);

/* GET detail aeroplane page */
router.get('/detail', aeroplane_controller.aeroplane_view_one_Page);

/* GET create aeroplane page */
router.get('/create', secured, aeroplane_controller.aeroplane_create_Page);

/* GET create update page */
router.get('/update', secured, aeroplane_controller.aeroplane_update_Page);

/* GET delete aeroplane page */
router.get('/delete', secured, aeroplane_controller.aeroplane_delete_Page);
module.exports = router;

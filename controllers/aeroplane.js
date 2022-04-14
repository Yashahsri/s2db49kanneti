var aeroplane = require('../models/aeroplane');
// List of all aeroplanes
exports.aeroplane_list = function(req, res) {
res.send('NOT IMPLEMENTED: aeroplane list');
};
// for a specific aeroplane.
exports.aeroplane_detail = function(req, res) {
res.send('NOT IMPLEMENTED: aeroplane detail: ' + req.params.id);
};
// Handle aeroplane create on POST.
exports.aeroplane_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: aeroplane create POST');
};
// Handle aeroplane delete form on DELETE.
exports.aeroplane_delete = function(req, res) {
res.send('NOT IMPLEMENTED: aeroplane delete DELETE ' + req.params.id);
};
// Handle aeroplane update form on PUT.
exports.aeroplane_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: aeroplane update PUT' + req.params.id);
};
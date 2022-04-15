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
//exports.aeroplane_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: aeroplane create POST');
//};
// Handle aeroplane delete form on DELETE.
exports.aeroplane_delete = function(req, res) {
res.send('NOT IMPLEMENTED: aeroplane delete DELETE ' + req.params.id);
};
// Handle aeroplane update form on PUT.
exports.aeroplane_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: aeroplane update PUT' + req.params.id);
};

// List of all Costumes
exports.aeroplane_list = async function(req, res) {
    try{
    theCostumes = await aeroplane.find();
    res.send(theCostumes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.aeroplane_view_all_Page = async function(req, res) {
    try{
    theCostumes = await aeroplane.find();
    res.render('aeroplane', { title: 'Aeroplane Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Costume create on POST.
exports.aeroplane_create_post = async function(req, res) {
    console.log(req.body)
    let document = new aeroplane();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.type = req.body.type;
    document.noofpassengers = req.body.noofpassengers;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
var file = require('file-system');
var fs = require('fs');

exports.get_landing = function (req, res, next) {
    res.render('landing');
}
exports.submit_lead = function (req, res, next) {

    // lundi
    let lundi_entre = req.body.lundientre;
    let lundi_plat = req.body.lundiplat;
    let lundi_dessert = req.body.lundidessert;

    // mardi
    let mardi_entre = req.body.mardientre;
    let mardi_plat = req.body.mardiplat;
    let mardi_dessert = req.body.mardidessert;

    // jeudi
    let jeudi_entre = req.body.jeudientre;
    let jeudi_plat = req.body.jeudiplat;
    let jeudi_dessert = req.body.jeudidessert;

    // vendredi
    let vendredi_entre = req.body.vendredientre;
    let vendredi_plat = req.body.vendrediplat;
    let vendredi_dessert = req.body.vendredidessert;


    let lundifull = lundi_entre + lundi_plat + lundi_dessert;
    let lundiJSON = JSON.stringify(lundifull);

    console.log(lundifull)
    console.log(lundiJSON)


    let mardifull = mardi_entre + mardi_plat + mardi_dessert;
    let mardiJSON = JSON.stringify(mardifull);

    let jeudifull = jeudi_entre + jeudi_plat + jeudi_dessert;
    let jeudiJSON = JSON.stringify(jeudifull);

    let vendredifull = vendredi_entre + vendredi_plat + vendredi_dessert;
    let vendrediJSON = JSON.stringify(vendredifull);



    res.redirect('/');
}


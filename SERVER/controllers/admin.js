exports.get_adminMenu = function (req, res, next) {
    res.render('admin_menu', { title: 'ADRI' });
}
exports.submit_adminMenu = function (req, res, next) {
    console.log("user email:", req.body.adminMenu);
    res.redirect('/');
}
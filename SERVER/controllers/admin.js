exports.get_adminMenu = function (req, res, next) {
    res.render('admin_menu', { title: 'ADRI' });
    console.log("test")
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Période 1', 'Période 2', 'Période 3', 'Période 4', 'Période 5'],
            datasets: [{
                borderColor: '#fb8d62',
                backgroundColor: ' #ffffff00 ',
                label: 'Bénéfice',
                yAxisID: 'A',
                data: [0, 100, 500, 126, 455]
            }, {
                backgroundColor: ' #ffffff00 ',
                borderColor: '#61d4b3',
                label: 'Utilisateurs',
                yAxisID: 'B',
                data: [0, 10, 40, 35, 55]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    id: 'A',
                    position: 'left',
                }, {
                    id: 'B',
                    position: 'right',

                }]
            }
        }
    });
}
exports.submit_adminMenu = function (req, res, next) {

}
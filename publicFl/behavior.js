

window.onload = function () {
    var canvas = document.getElementById('temp-tracking').getContext('2d'); 

    var chart = new Chart( canvas, {
        type: 'line',
        data: {
            labels:[12,9,34,30,45,1,22],
            datasets:[{
                label: '# of votes',
                data: [12,9,34,30,45,1,22],
                backgroundColor: '#EE1E00',
                borderColor:'#EE1E0080',
                fill: false
            }]
        },
        options: {

        }

    });
}
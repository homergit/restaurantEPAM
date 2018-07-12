
var advancedTime = [{
    "today": [{
            time: "14:00",
            available: ['table_1', 'table_3', 'table_4']
        },
        {
            time: "14:15",
            available: ['table_1', 'table_3', 'table_4']
        },
        {
            time: "14:30",
            available: ['table_1', 'table_3', 'table_4']
        },
        {
            time: "14:45",
            available: ['table_1', 'table_4']
        },
        {
            time: "15:00",
            available: ['table_2', 'table_4']
        },
        {
            time: "15:15",
            available: ['table_2', 'table_4']
        },
        {
            time: "15:30",
            available: ['table_2', 'table_4']
        },
        {
            time: "15:45",
            available: ['table_2', 'table_4']
        },
        {
            time: "16:00",
            available: ['table_2', 'table_4']
        },
        {
            time: "16:15",
            available: ['table_3', 'table_4']
        },
        {
            time: "16:30",
            available: ['table_3', 'table_4']
        },
        {
            time: "16:45",
            available: ['table_1', 'table_6', 'table_4']
        },
        {
            time: "17:00",
            available: ['table_1', 'table_6', 'table_4']
        },
        {
            time: "17:15",
            available: ['table_1', 'table_6', 'table_4']
        },
        {
            time: "17:30",
            available: ['table_1', 'table_6', 'table_4']
        },
        {
            time: "17:45",
            available: ['table_1', 'table_4']
        },
        {
            time: "18:00",
            available: ['table_1', 'table_4']
        },
        {
            time: "18:15",
            available: ['table_1', 'table_4']
        },
        {
            time: "18:30",
            available: ['table_3', 'table_4']
        },
        {
            time: "18:45",
            available: ['table_3', 'table_4']
        },
        {
            time: "19:00",
            available: ['table_3', 'table_4']
        },
        {
            time: "19:15",
            available: ['table_3', 'table_4']
        },
        {
            time: "19:30",
            available: ['table_1', 'table_3', 'table_4']
        },
        {
            time: "19:45",
            available: ['table_1', 'table_3', 'table_4']
        },
        {
            time: "20:00",
            available: ['table_1', 'table_3', 'table_4']
        },
        {
            time: "20:15",
            available: ['table_1', 'table_3', 'table_4']
        },
        {
            time: "20:30",
            available: ['table_1', 'table_6']
        },
        {
            time: "20:45",
            available: ['table_1', 'table_6']
        },
        {
            time: "21:00",
            available: ['table_1', 'table_6']
        }
    ],
    'week': [{
            time: "19:30",
            available: true,
            seats: 40
        },
        {
            time: "20:00",
            available: true,
            seats: 50
        },
        {
            time: "20:15",
            available: false,
            seats: 0
        },
        {
            time: "20:30",
            available: false,
            seats: 0
        },
        {
            time: "20:45",
            available: false,
            seats: 0
        },
        {
            time: "21:00",
            available: false,
            seats: 0
        },
        {
            time: "21:15",
            available: true,
            seats: 100
        },
        {
            time: "21:30",
            available: true,
            seats: 150
        },
        {
            time: "21:45",
            available: false,
            seats: 0
        },
        {
            time: "22:00",
            available: false,
            seats: 0
        },
    ]
}]
var select, value, text, current;
function changeDay(){
}
function changeTime() {
    select = document.getElementById("selectId1");
    value = select.options[select.selectedIndex].value;
    text = select.options[select.selectedIndex].text;

    var table1 = document.getElementById("table_1");
    var table2 = document.getElementById("table_2");
    var table3 = document.getElementById("table_3");
    var table4 = document.getElementById("table_4");
    var table5 = document.getElementById("table_5");
    var table6 = document.getElementById("table_5");
    value -= 1;
    var current = advancedTime[0].today[value].available;
    find(current);
    function find(array) {
        table1.disabled = true;
        table2.disabled = true;
        table3.disabled = true;
        table4.disabled = true;
        table5.disabled = true;
        table5.disabled = true;
        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).disabled = false;

        }
    }
}

function submitBooking(){
    var select = document.getElementById("selectId1"); 
    var value = select.options[select.selectedIndex].value;
    var current = advancedTime[0].today[value].available;
     var checkedTable =  document.querySelector('input[name="table"]:checked').id;
     document.querySelector('input[name="table"]:checked').disabled = true;
        var index = current.indexOf(checkedTable);
        if (index > -1) {
            advancedTime[0].today[value].available.splice(index, 1);
        }
    value = select.options[select.selectedIndex].value;
    function add(array) {

        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i]).disabled = false;

        }
    }
}
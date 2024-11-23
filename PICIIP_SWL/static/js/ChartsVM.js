var ChartsVM = function () {
    let me = this;

    me.initBarChart = function (data, divId) {
        let divBarContext = $("#" + divId).get(0).getContext("2d");
        let typeChart = new Chart(divBarContext, {
            type: "bar",
            data: data,
            options: {
                responsive: true
            }
        });
    }

    me.initPieChart = function (data, divId) {
        // Pie Chart
        var divPieContext = $("#" + divId).get(0).getContext("2d");
        var myChart5 = new Chart(divPieContext, {
            type: "pie",
            data: data,
            options: {
                responsive: true
            }
        });
    }


    me.getFieldUniqueValues = function (data, fieldName) {
        let uniqueValues = [];
        for (let i = 0; i < data.length; i++) {
            let fieldVal = data[i][fieldName];
            if (data.includes(fieldVal)) {
                console.log(fieldVal);
            } else {
                uniqueValues.push(fieldVal);
            }
        }
        return uniqueValues;
    };

    me.getAggregatedData = function (data, columnName, backColor) {
        var chartData = [];
        let kys = Object.keys(data);
        let vals = Object.values(data);
        return {
            labels: kys,
            datasets: [{
                label: columnName,
                data: [vals],
                backgroundColor: backColor,
                fill: true
            }]
        }
    };

    me.getBarChartData = function (data, columnName, backColor, nameKey, aggKey) {
        var dataKeys = [];
        var areaVals = [];
        for (let i = 0; i < data.length; i++) {
            let row = data[i];
            dataKeys.push(row[nameKey]);
            areaVals.push(row[aggKey]);
        }
        return {
            labels: dataKeys,
            datasets: [{
                label: columnName,
                data: areaVals,
                backgroundColor: backColor,
                fill: true
            }]
        }

    }

    me.getPieChartData = function (data) {
        var dataKeys = [], areaVals = [], colors = [];
        let trans = 1;
        for (let i = 0; i < data.length; i++) {
            let row = data[i];
            dataKeys.push(row["lu_upd"]);
            areaVals.push(row["area"]);
            colors.push('rgba(235, 22, 22, ' + trans + ')')
            trans -= 0.2;
        }
        return {
            labels: dataKeys,
            datasets: [{
                data: areaVals,
                backgroundColor: colors
            }]
        }

    }


}
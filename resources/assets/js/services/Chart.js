angular.module('expensesApp').factory('Chart', () => {
    "use strict";

    let service = {};

    /**
     * Config various global charts lib settings.
     */
    service.configChartLib = () => {
        Highcharts.setOptions({
            colors: ['#22223B', '#4A4E69', '#9A8C98', '#C9ADA7', '#F2E9E4', '#B8F3FF', '#8AC6D0', '#63768D', '#554971', '#36213E'],
            lang: {
                thousandsSep: ','
            }
        });
    };

    /**
     * Gets an expenses array, sums the amounts by type and returned in a highcharts format.
     * @param data
     * @returns {Array}
     */
    service.transformToSeries = data => {
        let sums = {}, series = [];

        // Sum amounts by expense type
        data.forEach(item => {
            sums[item.typeLabel] = sums[item.typeLabel] || 0;
            sums[item.typeLabel] += item.amount;
        });

        // Create array in highcharts format
        Object.keys(sums).forEach(key => {
            series.push({name: key, y: sums[key]});
        });

        return series;
    };

    return service;
});
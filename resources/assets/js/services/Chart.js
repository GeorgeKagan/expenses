angular.module('expensesApp').factory('Chart', () => {
    "use strict";

    let service = {};

    /**
     * Config various global charts lib settings.
     */
    service.configChartLib = () => {
        Highcharts.setOptions({
            colors: ['#2F4550', '#586F7C', '#B8DBD9', '#05668D', '#9BC53D', '#00A896', '#A9ACA9', '#60495A', '#3F3244', '#2F2235'],
            lang: {
                thousandsSep: ','
            }
        });

        // Add soft gradient to predefined (above) chart colors
        Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, color => {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7
                },
                stops: [
                    [0, color],
                    [1, Highcharts.Color(color).brighten(-0.1).get('rgb')] // darken
                ]
            };
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
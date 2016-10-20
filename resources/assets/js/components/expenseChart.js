angular.module('expensesApp').directive('expenseChart', (Expense, Chart, Settings) => {
    "use strict";

    const MIN_PERCENTAGE = 2;

    return {
        restrict: 'E',
        template: `<highchart config="chartConfig"></highchart>`,
        scope: {},
        controller: $scope => {
            $scope.$on('filterExpenses', () => {
                $scope.chartConfig.series[0].data = Chart.transformToSeries(Expense.getExpenses());
            });

            $scope.chartConfig = {
                options: {
                    chart: {
                        type: 'pie',
                        backgroundColor: null
                    },
                    plotOptions: {
                        pie: {
                            showInLegend: false,
                            allowPointSelect: false,
                            borderColor: null,
                            borderWidth: 1,
                            size: '100%',
                            cursor: 'default',
                            dataLabels: {
                                enabled: true,
                                useHTML: true,
                                distance: -40,
                                x: 0,
                                y: -8,
                                formatter: function() {
                                    if (this.percentage < MIN_PERCENTAGE) { return null; }
                                    return '<strong>' + Math.round(this.percentage) + '</strong><small>%</small>';
                                },
                                style: {
                                    color: 'contrast',
                                    fontSize: '19px',
                                    fontWeight: 'normal'
                                }
                            }
                        },
                        series: {
                            shadow: false
                        }
                    },
                    tooltip: {
                        useHTML: true,
                        backgroundColor: null,
                        borderWidth: 0,
                        borderRadius: 0,
                        shadow: false,
                        headerFormat: '<b>{point.key}</b> - ',
                        pointFormat: '<b>{point.y}</b> {series.name}',
                        valuePrefix: Settings.getCurrencySymbol(),
                    },
                    legend: {
                        itemMarginBottom: 12,
                        itemWidth: 100,
                    }
                },
                //The below properties are watched separately for changes.
                series: [{
                    name: 'total',
                    colorByPoint: true,
                    data: []
                }],
                title: {text: null},
                loading: false
            };
        },
        link: (scope, element) => {

        }
    }
});
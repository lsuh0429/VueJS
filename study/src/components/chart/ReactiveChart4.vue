<script>
    import {Line, } from 'vue-chartjs'
    
    export default {
        extends: Line,
        props: ["watch-data"],
        /* computed: {
            chartData() {

                return Object.assign({}, this.watchData)
            }
        }, */
        data () {
            return {
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: false
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [ {
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: true
                    },
                    responsive: true,
                    maintainAspectRatio: false
                },
                chartData: {
                    
                }
            }
        },
        mounted () {
            console.log("chartData: ", this.watchData)
            this.renderChart(this.watchData, this.options)
        },
        watch: {
            watchData: {
                deep:true,
                handler(nd, od) {
                    console.log("asdf",nd)
                    console.log("dddd",od)
                    //this.chartData = Object.assign({}, nd)
                    //this.$data_chart.destroy()
                    //

                }
            },
            chartData: {
                deep:true,
                handler(nd) {
                    this.renderChart(nd, this.options)
                }
            }
        }
    }
</script>

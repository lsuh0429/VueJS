<script>
    import {Bar, mixins} from 'vue-chartjs'
    
    const { reactiveData } = mixins
    export default {
        extends: Bar,
        mixins : [reactiveData], // chartData 
        data () {
            return {
                chartData: null,
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
                }
            }
        },
        created() {
            this.fillData()
        },
        mounted () {
            this.renderChart(this.chartData, this.options)

            setInterval(() => {
                this.fillData()
            }, 2000)
        },
        methods: {
            fillData() {
            this.chartData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#FFE0E6',
                        borderColor: '#FF829D',
                        borderWidth: 1,
                        data: [
                            this.getRandomInt(), 
                            this.getRandomInt(), 
                            this.getRandomInt(), 
                            this.getRandomInt(), 
                            this.getRandomInt(), 
                            this.getRandomInt(), 
                            this.getRandomInt(), 
                            this.getRandomInt(), 
                            this.getRandomInt(), 
                            this.getRandomInt(), 
                            this.getRandomInt(), 
                            this.getRandomInt()
                        ]
                    }
                ]
            }
        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        },
        }
    }
</script>

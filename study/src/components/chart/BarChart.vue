<script>
import {Bar} from 'vue-chartjs'
export default {
    extends: Bar,
    props: {},
    data() {
        return {
            datacollection: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#FFE0E6',
                        borderColor: '#FF829D',
                        borderWidth: 1,
                        barThickness: 15,
                        data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
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
  mounted() {
    this.renderChart(this.datacollection, this.options)
  }
}
</script>
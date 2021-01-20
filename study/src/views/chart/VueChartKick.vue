<template>
    <section class="container">
        <h1 class="title">vue-chartkick Demo</h1>
        <div class="columns">
            <div class="column">
                <h3 class="subtitle">Line Chart</h3>
                <line-chart :data="chartData"></line-chart>
            </div>
            <div class="column">
                <h3 class="subtitle">Bar Chart</h3>
                <bar-chart :data="[['Work', 1322], ['Play', 1492]]"></bar-chart>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <h3 class="subtitle">Scatter Chart</h3>
                <scatter-chart :data="[[174.0, 80.0], [176.5, 82.3], [180.3, 73.6]]"></scatter-chart>
            </div>
            <div class="column">
                <h3 class="subtitle">Downloadable Line Chart</h3>
                <line-chart :data="chartData" :download="true"></line-chart>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <h3 class="subtitle">Pie Chart</h3>
                <pie-chart :data="[['Blueberry', 44], ['Strawberry', 23], ['Banana', 23], ['Orange', 23]]"></pie-chart>
            </div>
            <div class="column">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'VueChartKick',
          data () {
              return {
                  chartData: [['Jan', 44], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]]
            }
        }
    }
</script>

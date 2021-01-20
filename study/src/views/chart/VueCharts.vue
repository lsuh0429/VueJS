<template>
    <section class="container">
        <h1 class="title">vue-charts Demo</h1>
        <div class="columns">
            <div class="column">
                <h3 class="subtitle">Line Chart</h3>
                <chartjs-line></chartjs-line>
            </div>
            <div class="column">
                <h3 class="subtitle">Bar Chart</h3>
                <chartjs-bar></chartjs-bar>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <h3 class="subtitle">Radar Chart</h3>
                <chartjs-radar></chartjs-radar>
            </div>
            <div class="column">
                <h3 class="subtitle">Data Binding Line Chart</h3>
                <form @submit.prevent="addData">
                    <input placeholder="Add a Data" v-model="dataentry">
                    <input placeholder="Add a Label" v-model="datalabel">
                    <button type="submit">Submit</button>
                </form>
                <chartjs-line :labels="labels" :data="dataset" :bind="true"></chartjs-line>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <h3 class="subtitle">Mixed Chart(Dataset)</h3>
                <canvas id="mix4" count="4"></canvas>
                <chartjs-line target="mix4" :data="[70, 40, 60, 80, 50]" :labels="['A', 'B', 'C', 'D', 'E']" :fill="true"></chartjs-line>
                <chartjs-bar target="mix4" :data="[20, 30, 20, 10, 5]" :labels="['A', 'B', 'C', 'D', 'E']" backgroundcolor="#b2dfdb"></chartjs-bar>
                <chartjs-bar target="mix4" :data="[20, 20, 40, 15, 60]" :labels="['A', 'B', 'C', 'D', 'E']" backgroundcolor="#333333"></chartjs-bar>
                <chartjs-bar target="mix4" :data="[50, 10, 60, 55, 35]" :labels="['A', 'B', 'C', 'D', 'E']" backgroundcolor="#bbdefb"></chartjs-bar>
            </div>
            <div class="column">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'VueCharts',
        data () {
            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                dataset: [65, 59, 80, 81, 56, 55, 40],
                dataentry: '',
                datalabel: ''
            }
        },
        methods: {
            addData () {
                this.dataset.push(this.dataentry)
                this.labels.push(this.datalabel)
                this.datalabel = ''
                this.dataentry = ''
            }
        }
    }
</script>

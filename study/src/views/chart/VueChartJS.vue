<template>
    <section class="container">
        <h2 class="title">vue-chartjs Demo</h2>
        <div class="columns">
            <div class="column">
                <h3 class="subtitle">Bar Chart</h3>
                <BarChart />
            </div>
            <div class="column">
                <h3 class="subtitle">Line(Area) Chart</h3>
                <LineChart />
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <h3 class="subtitle">Bubble Chart</h3>
                <BubbleChart />
            </div>
            <div class="column">
                <h3 class="subtitle">Reactive(Bar-random) Chart</h3>
                <ReactiveChart :chart-data="reactiveDatacollection" />
                <button class="button is-danger" @click="fillData()">Randomize</button>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <h3 class="subtitle">Reactive-props Chart</h3>
                    <input placeholder="Add a Data" v-model="dataEntry">
                    <input type="number" placeholder="Add a Label" v-model="dataLabel">
                    <button @click="add()">Submit</button>
                <ReactiveChart2 :chart-data="reactiveDatacollection2" />
            </div>
            <div class="column">
                <h3 class="subtitle">Reactive-single Chart</h3>
                <ReactiveChart3 />
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <h3 class="subtitle">Reactive-watch Chart</h3>
                    <input placeholder="Add a Data" v-model="dataEntry">
                    <input type="number" placeholder="Add a Label" v-model="dataLabel">
                    <button @click="addWatch()">Submit</button>
                <ReactiveChart4 :watch-data="reactiveDatacollection7" />
            </div>
            <div class="column">
            </div>
        </div>
            
    </section>
</template>

<script>
import BarChart from '@/components/chart/BarChart'
import LineChart from '@/components/chart/LineChart'
import BubbleChart from '@/components/chart/BubbleChart'
import ReactiveChart from '@/components/chart/ReactiveChart'
import ReactiveChart2 from '@/components/chart/ReactiveChart2'
import ReactiveChart3 from '@/components/chart/ReactiveChart3'
import ReactiveChart4 from '@/components/chart/ReactiveChart4'

export default {
    components: {
        BarChart,
        LineChart,
        BubbleChart,
        ReactiveChart,
        ReactiveChart2,
        ReactiveChart3,
        ReactiveChart4
    },
    data() {
        return {
            reactiveDatacollection: null,
            reactiveDatacollection2: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#FFE0E6',
                        borderColor: '#FF829D',
                        borderWidth: 1,
                        fill:false,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            },
            reactiveDatacollection5: [65, 59, 80, 81, 56, 55, 40],
            reactiveDatacollection6: ['January', 'February', 'March', 'April', 'May', 'June', 'July1'],
            
            reactiveDatacollection2Temp: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#FFE0E6',
                        borderColor: '#FF829D',
                        borderWidth: 1,
                        fill:false,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            },
            dataEntry: '',
            dataLabel: '',
            reactiveDatacollection7: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#FFE0E6',
                        borderColor: '#FF829D',
                        borderWidth: 1,
                        fill:false,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            }
        }
    },
    created() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.reactiveDatacollection = {
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
        addData () {
            let reactiveDatacollection3 = this.reactiveDatacollection2.datasets[0].data
            let reactiveDatacollection4 = this.reactiveDatacollection2.labels
            console.log(this.reactiveDatacollection2);
            this.reactiveDatacollection2 = {
                labels: reactiveDatacollection4,
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#FFE0E6',
                        borderColor: '#FF829D',
                        borderWidth: 1,
                        fill:false,
                        data: reactiveDatacollection3
                    }
                ]
            }
            // this.reactiveDatacollection2 = {
            //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            //     datasets: [
            //         {
            //             label: 'Data One',
            //             backgroundColor: '#FFE0E6',
            //             borderColor: '#FF829D',
            //             borderWidth: 1,
            //             fill:false,
            //             data: [65, 59, 80, 81, 56, 55, 40]
            //         }
            //     ]
            // }

            
        },
        add(){

            this.reactiveDatacollection2.datasets[0].data.push(this.dataLabel)
            this.reactiveDatacollection2.labels.push(this.dataEntry)
            // this.reactiveDatacollection5.push(this.dataLabel)
            // this.reactiveDatacollection6.push(this.dataEntry)
            this.dataLabel = ''
            this.dataEntry = ''
            this.addData ()


            
            
            // this.dataLabel = ''
            // this.dataEntry = ''
        },
        addWatch() {
            this.reactiveDatacollection7.datasets[0].data.push(this.dataLabel)
            this.reactiveDatacollection7.labels.push(this.dataEntry)
            this.dataLabel = ''
            this.dataEntry = ''
            console.log("reactive4",this.reactiveDatacollection7)
        }
    }
}
</script>

<style>

</style>
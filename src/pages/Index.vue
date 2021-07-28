<template>
  <q-page class='flex flex-center'>
    <div class="q-mr-lg">
      <div class="row justify-center title">Orders</div>
      <div class="row items-center item-row">
        <div class="flex">
          <div class="circle-pending q-mr-lg"></div>
          <div class="sub-title">Pending</div>
        </div>
        <div class="percent flex-grow">{{ orders.pending }}</div>
      </div>
      <div class="row items-center item-row">
        <div class="flex">
          <div class="circle-achive q-mr-lg"></div>
          <div class="sub-title">Achive</div>
        </div>
        <div class="percent">{{ orders.active }}</div>
      </div>
      <div class="row items-center item-row">
        <div class="flex">
          <div class="circle-filled q-mr-lg"></div>
          <div class="sub-title">Filled</div>
        </div>
        <div class="percent float-right">{{ orders.filled }}</div>
      </div>
      <div class="row items-center item-row">
        <div class="flex">
          <div class="circle-suspect q-mr-lg"></div>
          <div class="sub-title">Suspect</div>
        </div>
        <div class="percent">{{ orders.suspect }}</div>
      </div>
    </div>
    <v-chart :options='pie'/>
  </q-page>
</template>

<script>

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'

export default {
  name: 'PageIndex',
  preFetch ({ store }) {
    return Promise.all(store.dispatch('orders/getOrders'))
  },
  components: {
    'v-chart': ECharts
  },
  data: function () {
    return {
      orders: this.$store.state.orders.orders,
      pie: {
        title: {
          text: 'echarts demo'
        },
        tooltip: {
        },
        legend: {
          type: 'plain',
          orient: 'vertical',
          right: 10,
          top: 20
        },
        series: [{
          type: 'pie',
          data: [
            { name: 'Achive', value: this.$store.state.orders.orders.active },
            { name: 'Filled', value: this.$store.state.orders.orders.filled },
            { name: 'Pending', value: this.$store.state.orders.orders.pending },
            { name: 'Suspect', value: this.$store.state.orders.orders.suspect }
          ]
        }],
        color: ['darkorchid', 'lightgreen', 'lightblue', 'yellow']
      }
    }
  }
}
</script>

<style lang="scss">
.circle-pending {
  width: 40px;
  height: 40px;
  background: lightblue;
  border-radius: 50%;
}
.circle-achive {
  width: 40px;
  height: 40px;
  background: darkorchid;
  border-radius: 50%;
}
.circle-filled {
  width: 40px;
  height: 40px;
  background: lightgreen;
  border-radius: 50%;
}
.circle-suspect {
  width: 40px;
  height: 40px;
  background: peachpuff;
  border-radius: 50%;
}
.title {
  font-size: 36px
}
.item-row {
  width: 250px;
  display: flex;
  justify-content: space-between;
}
.sub-title {
  font-size: 30px;
}
.percent {
  font-size: 22px;
}
</style>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Daftar Crypto</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">

        <ion-button @click="getDataCoin" id="button">Get Data</ion-button>

        <table border="1">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Number</th>
              <th>Symbol</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="coin in coins" :key="coin.id" id="coin-row">
              <td>{{ coin.rank }}</td>
              <td>{{ coin.name }}</td>
              <td>{{ coin.symbol }}</td>
              <td>{{ coin.price_usd }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from 'vue'
import { CoinApiResponse, CoinType } from '@/types/cointType';

const coins = ref<CoinType[]>([])

async function getDataCoin(){
  try {
    const response = await fetch('/api-coin/api/tickers/')
    const data: CoinApiResponse = await response.json()
    console.log(data.data)
    coins.value = data.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }

}


</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
}

#button{
  margin-bottom: 20px;
  align-self: center;
}

#coin-row {
  text-align: center;
  transition: background-color 0.3s;

}

#coin-row:hover {
  background-color: #f0f0f0;
}

</style>

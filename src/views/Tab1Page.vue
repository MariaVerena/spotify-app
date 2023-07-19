<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="spotify-buttons">
        <ion-button @click="connect()">Mit Spotify verbinden</ion-button>
        <ion-button @click="disconnect()">Spotify Verbindung lösen</ion-button>
        <ion-button @click="test()">Test</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { connectWithSpotify, disconnectFromSpotify, spotifySearch } from '../spotify';

async function connect() {
  connectWithSpotify()
}

function disconnect() {
  disconnectFromSpotify()
}

async function test() {
  await spotifySearch()
}
</script>

<style>
#spotify-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;
}
</style>
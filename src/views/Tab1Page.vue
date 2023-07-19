<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <div id="lila-balken">
        <div class="burger-menu centered">
          <div  class="burger-icon">&#9776;</div>
        </div>
      </div>

      <div id="ellipse-menu">
        <p></p>
        <button><h5>Login</h5></button>
        <p></p>
        <button><h5>Analyze my spottify</h5></button>
        <p></p>
        <button><h5>Compare my spotify</h5></button>
      </div>
      <h1>Learn more about your music taste and compare it with your friends (or strangers)! </h1>


      <div id="login-ellipse" class="centered" >  
          <button> <h5>Login</h5> </button>

      </div>
    </ion-content>
  </ion-page>
</template>

<style>

#lila-balken {

  height: 47px;
  left: 0px;
  top: 40px;

  background: #7546B1;
}

#spotify-buttons {
  background-color:rgba (117, 70, 177,0.70);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;
}

.burger-menu {

  position: relative;
  width: 42px;
height: 42px;
flex-shrink: 0;

border-radius: 8px;
background: #BD96E3;
}

.burger-icon {

  cursor: pointer;
  font-size: 1.5rem;
}

#ellipse-menu {
  position: relative;
  width: 427px;
  height: 372px;

  overflow: hidden;
}

#ellipse-menu::before {
  display: block;
  position: absolute;
  content: "";
  width: 427px;
  height: 372px;
  left: -223px;
  border-radius:  0% 50% 50% 0  ;
  overflow: hidden;
  background: rgba(117, 70, 177, 0.70);

}

#login-ellipse {
  width: 100px;
  height: 100px;
  background-color: #BD96E3;
  border-radius: 50%;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

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
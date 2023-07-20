<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <Burger/>
      <div id="lila-balken2">
        <div id="profiles">
          
          
          <div class= "profile-picture">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png">
          </div>
          </div>
        

  </div>


<h3> Here are your most heard... </h3>
<p></p>
<h4>songs</h4>
<p></p>
<h4>albums</h4>
<p></p>
<h4>generes</h4>

    </ion-content>
  </ion-page>
</template>

<style>
  #lila-balken2 {
    flex-shrink: 0;
    background: #7546B1;
  }

  #profiles {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50% 50% 50% 50%;
    margin: 20px;
    margin-top: ;
  }


</style>


<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Burger from '../components/Burger.vue'


</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

<Burger/>
      <div id="lila-balken3">
        

        <div id="profiles">
          
          <div class="profile-picture">
            <img src="https://placekitten.com/400/400">
          </div>
          <h3> with </h3>
          <div class= "profile-picture">
            <img src="https://placekitten.com/400/400">
          </div>
        </div>
        

      </div>


      <p></p>
      <h4>analyzing common...</h4>
<h4>genres</h4>
<p></p>
<h4>songs</h4>
<p></p>
<h4>albums</h4>
    </ion-content>
  </ion-page>
</template>

<style>
  #lila-balken3 {
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Burger from '../components/Burger.vue'

</script>

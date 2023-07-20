<template>
    <div class="burger-menu centered" @click="toggleMenu">
        <div  class="burger-icon">&#9776;</div>
    </div>
    <div id="ellipse-menu" class="" :class="{'open': isMenuOpen}" >
        <p></p>
        <button><h5>Login</h5></button>
        <p></p>
        <button><h5>Analyze my spottify</h5></button>
        <p></p>
        <button><h5>Compare my spotify</h5></button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let isMenuOpen = ref(false)

function toggleMenu() {
    if (isMenuOpen.value == true){
        isMenuOpen.value = false
    } else {
        isMenuOpen.value = true 
    }
}

</script>

<style scoped>
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
  position: fixed;
  width: 427px;
  height: 372px;
  top: 200px;
  left: -220px;

  overflow: hidden;

  transition-property: left;
  transition-duration: 400ms;
  transition-timing-function: ease;
}


#ellipse-menu.open {
    left: 0;
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

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
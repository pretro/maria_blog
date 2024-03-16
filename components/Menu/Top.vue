<template>
  <nav class="fixed top-0 right-0 w-full px-4 py-6 bg-slate-50 z-50">
    <div class="container flex justify-between items-center gap-10">
      <!-- Logo -->
      <div class="flex items-center">
        <img src="/assets/Maria_logo.png" class="w-40 h-16" alt="Marias Profile">
      </div>
      <!-- Botón de hamburguesa -->
      <button @click="isOpen = !isOpen" class="ml-auto text-white lg:hidden">
        <svg :class="{ 'hidden': isOpen, 'block': !isOpen }" class="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg :class="{ 'hidden': !isOpen, 'block': isOpen }" class="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <!-- Menú -->
      <div :class="{ 'hidden': !isOpen, 'block': isOpen }" class="lg:flex lg:items-center lg:w-auto lg:ml-auto lg:mr-4">
        <div class="flex flex-col lg:flex-row">
          <ul class="inline-flex gap-2">
            <li><NuxtLink class="text-alice-blue font-medium py-2 block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-gray-300 mr-4" to="/">Hem</NuxtLink></li>
            <li><NuxtLink class="text-alice-blue font-medium py-2 block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-gray-300 mr-4" to="/categories">Kategorier</NuxtLink></li>
            <li><NuxtLink class="text-alice-blue font-medium py-2 block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-gray-300 mr-4" to="#">Texter</NuxtLink></li>
            <li><NuxtLink class="text-alice-blue font-medium py-2 block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-gray-300 mr-4" to="#">Böcker</NuxtLink></li>
            <li><NuxtLink class="text-alice-blue font-medium py-2 block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-gray-300 mr-4" to="#">Om Maria</NuxtLink></li>
            <li><NuxtLink class="text-alice-blue font-medium py-2 block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-gray-300 mr-4" to="#">Blogg</NuxtLink></li>
            <li><NuxtLink class="text-alice-blue font-medium py-2 block mt-4 lg:inline-block lg:mt-0 text-dark hover:text-gray-300 mr-4" to="#">Kontakta mig</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>


<style>
</style>

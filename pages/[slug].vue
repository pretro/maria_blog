<template>
  <main>
    <section class="header container py-12 sm:py-24">
        <!--Post Title-->
        <div class="post-title text-center mb-5">
            <h1 class="text-3xl sm:text-5xl font-bold">
                Journalistyrket har tagit mig till många platser i världen. 
            </h1>
        </div>
        <!--Post Meta-->
        <div class="post-meta text-center mb-10">
            <span class="mr-3">Written by Maria Hagström</span>
            <span class="mr-3">Publicerad 2024-02-14</span>
        </div>
        <!--Post Image-->
        <div class="w-full h-[250px] sm:h-[400px] relative shadow-xl rounded overflow-hidden mb-10">
            <img src="/assets/img/maria.jpeg" alt="blog Thumb" class="absolute w-full h-full object-cover"/>
        </div>
        <!--Post Content-->
        <div class="post-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Itaque voluptas incidunt minima commodi! Doloremque quod 
            eos natus voluptas beatae totam?
        </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const { params } = useRoute();
</script>



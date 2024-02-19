<template>
  <main>
    <section class="header container py-12 sm:py-24">
      <!--Post Title-->
      <div class="post-title text-center mb-5">
        <h1 class="text-3xl sm:text-5xl font-bold">
          <!-- {{ post.title.rendered }} -->
          Hej på dig!

        </h1>
      </div>
      <!--Post Meta-->
      <div class="post-meta text-center mb-10">
        <!-- <span class="mr-3">Written by {{ post._embedded["author"].name }}</span> -->
        <span class="mr-3">Written by Maria Hagström</span>

        <!-- <span class="mr-3">Publicerad {{post.date}}</span> -->
        <span class="mr-3">Publicerad by 2024-02-14 </span>

      </div>
      <!--Post Image-->
      <div
        class="w-full h-[250px] sm:h-[500px] relative shadow-xl rounded overflow-hidden mb-10"
      >
      
        <img
          src="/assets/img/maria.jpeg"
          alt="logo"
          class="absolute w-full h-full object-cover"
        />
      </div>
      <!--Post Content-->
      <div class="post-content">Hej på dig!
        <!-- <div v-html="post.content"></div> -->
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
const { params } = useRoute();
const { data: posts } = await useWpApi().getPost<any>(params.slug as string);
const post = posts.value[0];
</script>

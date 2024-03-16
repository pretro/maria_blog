<script lang="ts" setup>
defineProps<{
    title: string;
    image?:string;
    excerpt? :string;
    slug?: string;
}>();
</script>
<template>
   <div class="col-span-1 shadow-lg">
                <!--Blog image-->
                <div v-if="image" class="w-full h-[180px] relative">
                    <img :src="image" 
                        :alt="title" 
                        class="w-full h-full absolute object-cover"
                    />
                </div>
                <!--Blog Contents-->
                <div class="p-5">
                    <h3 class="text-xl font-semibold mb-3">
                        {{ title }}
                    </h3>
                    <p v-if="excerpt" class="text-sm mb-3">
                        {{ excerpt }}
                    </p>
                        <NuxtLink :to="`/${slug}`">Läs mer...</NuxtLink>
                </div>
            </div> 
            <!--alternative code 
            <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id" class="rounded-lg overflow-hidden bg-white shadow-lg">
          <img class="w-full h-64 object-cover" :src="post.image" :alt="post.title">
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ post.title }}</h3>
            <p class="text-gray-600 mb-4">{{ post.description }}</p>
            <div class="flex items-center">
              <img class="w-10 h-10 rounded-full mr-2" :src="post.author.avatar" :alt="post.author.name">
              <div>
                <p class="text-gray-800 font-semibold">{{ post.author.name }}</p>
                <p class="text-gray-600 text-sm">{{ post.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
</template>


<template>
   <PageHeader :title="`Archive: ${categories[0].name}`"/>
   <section class="blogs blogs-archive">
    <div class="container py-10">
      <div class="grid sm:grid-cols-3 gap-10">
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :excerpt="post.excerpt.rendered"
          :slug="post.slug"
        ></BlogCard>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute();
// Get Category ID
const { data: categories } = await useWpApi().get<any>(`categories?slug=${route.params.slug}`);

//Get post related to category Id
const { data:posts } = await useWpApi().getPosts<any>(categories.value[0].id); 
</script>

<style  scoped>

</style>
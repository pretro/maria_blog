<template>
  <main >
    <PageHeader>
        <div class="w-[200px] relative h-[200px] mr-5 rounded overflow-hidden shadow-md">
          <img
            src="/assets/img/maria.jpeg"
            class="w-full h-full absolute object-cover"
          />
        </div>
        <!--Header Text-->
        <div>
          <h1 class="text-4xl font-bold mb-2">Maria Hagström</h1>
          <p class="mb-3">
            Journalist och författare baserad i Stockholm, med särskilt fokus på
            socialreportage.
          </p>
          <a class="btn bg-sky-500 text-sky-50 py-2 px-4 rounded inline-block hover:bg-sky-600 duration-200"
          href="https://mariahagstrom.se/">Läs mer...</a>
        </div>
    </PageHeader>
    <!--Blog grid starts-->
    <section class="container py-16">
      <h1 class="text-3xl font-semibold text-gray-800 my-8">Senaste inlägg</h1>
        <div class="grid sm:grid-cols-3 gap-5 overflow-hidden bg-white shadow-lg rounded-lg">
            <BlogCard
            v-for="post in posts"
            :key="post.id"
            :title="post.title.rendered"
            :excerpt="post.excerpt.rendered"
            :image="post._embedded['wp:featuredmedia'][0]?.source_url"
            :slug="post.slug"
            class="rounded-lg"
            />
        </div>
    </section>
    
  </main>
  <Profile/>
  <Contact/>
  <Footer/>
</template>

<script lang="ts" setup>
  const {data:posts} = await useWpApi().getPosts<any>();
</script>

<style scoped></style>


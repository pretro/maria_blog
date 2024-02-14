<template>
  <main>
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
        <div class="grid sm:grid-cols-3 gap-5">
            <BlogCard
            v-for="i in 9"
            :key="i"
            title="Jag har alltid drivits av en stor nyfikenhet"
            excerpt="Journalistyrket har tagit mig till många platser i 
            världen och till människor med olika livsvillkor. 
            Fokus ligger på sociala frågor, men jag skriver även om annat. 
            Till exempel betong. "
            image="https://mariahagstrom.se/____impro/1/onewebmedia/IMG_1453.jpg?etag=%22c22b3-5e1071f1%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=405%2B270&extract=88%2B52%2B300%2B200&quality=85"
            slug="blog-1"
            />
        </div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped></style>

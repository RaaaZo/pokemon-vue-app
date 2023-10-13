<template>
  <div :class="$style[`home-wrapper`]">
    <section :class="$style[`content-wrapper`]">
      <h1>Discovering Pokemon and Unraveling Their Mysteries</h1>

      <p :class="$style[`content-paragraph`]" class="text--lg">
        Are you ready to embark on an exciting adventure to explore the vast world of Pokemon and
        uncover their captivating details? Whether you're a seasoned Pokemon Trainer or a rookie
        just starting your journey, this page is your ultimate resource for searching Pokemon and
        delving into the depths of their fascinating stories. With over 800 species of Pokemon to
        discover, each with its unique characteristics, abilities, and lore, the Pokemon universe
        offers an endless well of mysteries to uncover.
      </p>

      <p :class="$style[`content-paragraph`]" class="text--lg">
        Your quest begins with the fundamental tool of every Trainer: the Pokedex. In the palm of
        your hand, this indispensable device serves as your trusty guide in identifying and learning
        about Pokemon you encounter. From the electrifying Pikachu to the enigmatic Mewtwo, you can
        search for any Pokemon and access their essential information, such as their type, height,
        weight, abilities, and even their cry. With every discovery, you'll unlock a piece of the
        Pokemon world's rich history and mythology.
      </p>

      <p :class="$style[`content-paragraph`]" class="text--lg">
        This page goes beyond the basics, though. We're here to help you dive deeper into the
        Pokemon universe, sharing tips and tricks for locating rare and legendary Pokemon,
        unraveling the mysteries of Shiny variants, and understanding the intricate mechanics of
        battles and evolutions. Whether you're a collector aiming to catch 'em all or a competitive
        Trainer honing your skills, our comprehensive database and insightful articles will be your
        faithful companions throughout your journey of discovering and learning about Pokemon. So,
        grab your Pokedex, don your Trainer hat, and let's set off on a thrilling quest to seek,
        find, and understand the captivating world of Pokemon!
      </p>
    </section>

    <section>
      <img
        v-for="image in imagesList"
        :src="image.src"
        :alt="image.alt"
        :key="image.alt"
        :class="$style[`images-single-image`]"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import charizardImage from '@/assets/images/charizard.png'
import blastoiseImage from '@/assets/images/blastoise.png'
import venusaurImage from '@/assets/images/venusaur.png'

const imagesList = [
  {
    src: charizardImage,
    alt: 'Charizard avatar'
  },
  {
    src: blastoiseImage,
    alt: 'Blastoise avatar'
  },
  {
    src: venusaurImage,
    alt: 'Venusaur avatar'
  }
]
</script>

<style module>
.home-wrapper {
  display: grid;
  grid-template-columns: 1fr minmax(15rem, 45rem);
  gap: 2.4rem;
  padding-block: 2.4rem;
}

.images-single-image {
  width: 100%;
  height: 30rem;
  border-radius: 0.8rem;
  object-fit: contain;
  object-position: center;
}

.content-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.content-paragraph {
  max-width: 100ch;
}
</style>

<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://w7.pngwing.com/pngs/885/573/png-transparent-futurama-character-illustration-futurama-philip-j-fry-leela-bender-mom-futurama-fry-face-hat-heroes-thumbnail.png",
    };
  },
};
</script>

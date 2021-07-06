<template>
  <div class="px-4">
    <lightgallery :settings="{ speed: 500, plugins }" :onInit="onInit" class="flex flex-wrap justify-center">
      <a
          v-for="(image, imageIndex) in images"
          :href="image.src"
          :key="imageIndex"
          @click="index = imageIndex"
      >
        <img :src="image.thumb300"
             :alt="image.title"
             loading="lazy"
             class="m-3 rounded"
        >
      </a>
    </lightgallery>
  </div>
</template>

<script>
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity'
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity'
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'

import { nextTick, ref, watch } from 'vue'

import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default {
  name: 'HelloWorld',
  components: {
    Lightgallery
  },
  setup() {
    const region = 'us-east-1'
    const albumBucketName = 'petrichor.band'

    const s3Client = new S3Client({
      region: 'us-east-1',
      credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region }),
        identityPoolId: 'us-east-1:cdd3567b-4cbc-48b9-ab0f-1cc868ca9628'
      })
    })

    const albumPhotosKey = 'images/'

    const images = ref([])
    const lightGallery = ref(null)
    s3Client.send(
        new ListObjectsV2Command({
          Prefix: albumPhotosKey,
          Bucket: albumBucketName
        }))
        .then(data => {
          images.value = data.Contents
              .filter(photo => photo.Key !== 'images/')
              .map(photo => {
                return {
                  src: `https://petrichor.band/${photo.Key}`,
                  thumb250: `https://petrichor.band/${photo.Key.replace('images/', 'thumbnails/').replace('.jpg', 'w250.jpg')}`,
                  thumb350: `https://petrichor.band/${photo.Key.replace('images/', 'thumbnails/').replace('.jpg', 'w350.jpg')}`,
                  thumb300: `https://petrichor.band/${photo.Key.replace('images/', 'thumbnails/').replace('.jpg', 'h300.jpg')}`,
                  title: `https://petrichor.band/${photo.Key.replace('images/', '')}`
                }
              })
        })
        .catch(err => {
          if (err) {
            console.log(err)
          }
        })

    watch(images, () => {
      nextTick().then(() => {
        if (lightGallery.value) {
          lightGallery.value.refresh()
        }
      })
    })

    return {
      images,
      index: null,
      plugins: [lgThumbnail, lgZoom],
      onInit: detail => {
        lightGallery.value = detail.instance;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

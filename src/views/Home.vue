<template>
  <div class="home">
   <h1>Home</h1>
   <div v-if="error">{{ error }}</div>
   <div v-if="posts.length" class="layout">
        <PostList :posts="posts" />
        <TagCloud :posts="posts" />
   </div>
   <div v-else>
         <Spinner />
   </div>
 
  </div>
</template>

<script>
//import { ref } from 'vue'
// @ is an alias to /src
import PostList from '../components/PostList'
import TagCloud from '../components/TagCloud'
import getPosts from "../composables/getPosts"
import Spinner from "../components/Spinner"

export default {
  name: 'Home',
  components: {
    PostList, Spinner, TagCloud
  },
  setup(){

    // ==== Warp up this code to composible function for reuse code === START ====
       
        // const posts = ref([])
        // const error = ref(null)    
        // const load = async () => {
        //   try {
        //     let data = await fetch('http://localhost:3000/posts')

        //     if(!data.ok){
        //       throw Error("No data found")
        //     }

        //     posts.value = await data.json()

        //   } catch (err) {
        //     error.value = err.message
        //     console.log(error.value)
        //   }
        // }
        // load()

    //  === END ====


    const { posts, error, load } = getPosts()

    load()
    
    return { posts, error }
  }
}
</script>
<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
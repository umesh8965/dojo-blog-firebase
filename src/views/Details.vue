<template>
  <div v-if="error">
      {{ error }}
  </div>
  <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button class="delete" @click="handleDelete">Delete post</button>
  </div>
  <div v-else>
      <Spinner />
  </div>

</template>

<script>
import getPost from "../composables/getPost"
import Spinner from "../components/Spinner"
import { projectFirestore } from '../firebase/config'
import { useRoute, useRouter } from 'vue-router'
export default {
    props:['id'],
    components: {
     Spinner
  },
    setup(props){
       
       const route = useRoute()
       const router = useRouter()
       
       const { post, error, load } = getPost(props.id) // We can also write route.params.id
       
       load()


      const handleDelete = async () => {
        await projectFirestore.collection("posts")
        .doc(props.id) // We can also write route.params.id
        .delete()

         router.push ({ name: "Home" })  // We can use ({ "/" }) also.
      }

     
      
       return { post, error, handleDelete }
    }
}
</script>

<style scoped>
  .tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete{
    margin: 15px 0;
  }
</style>
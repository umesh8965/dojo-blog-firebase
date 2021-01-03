import { ref } from 'vue'
import { projectFirestore } from "../firebase/config"

const getPosts = ()=> {
    const posts = ref([])
    const error = ref(null)    
    const load = async () => {
        try {
            const resp = await projectFirestore.collection("posts")
            .orderBy("createAt", "desc")
            .get()
           //console.log(resp.docs)
           posts.value = resp.docs.map( doc => {
               //console.log(doc.data())
               return { ...doc.data(), id: doc.id }
           })
            
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    return { posts, error, load }
}

export default getPosts
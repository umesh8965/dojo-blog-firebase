import { ref } from 'vue'

const getPost = (id)=> {
    const post = ref(null)
    const error = ref(null)    
    const load = async () => {
        try {

            // Delay
            await new Promise(resolve => {
                setTimeout(resolve, 1000)
            })
            
            let data = await fetch('http://localhost:3000/posts/' + id)

            if(!data.ok){
                throw Error("No post detail found")
            }

            post.value = await data.json()
            
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    return { post, error, load }
}

export default getPost
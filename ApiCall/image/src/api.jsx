import axios from 'axios';

const searchImages = async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
       headers:{
         Authorization:'Client-ID rDISRwLGKob1E_JLGrM0r2V8E_HnGvx4aQCnZCQIKFo'
       },
       params:{
         query:term
       }
     })
     debugger;
     return response.data.results;
 };
 export default searchImages;
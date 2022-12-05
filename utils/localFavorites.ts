export const toggleFavorite=(id:number)=>{
    console.log('toggleFavorite llamado')
    
    //Primero creamos un arreglo con el contenido del localStorage
    //!Uso JSON.parse para transformar la informacion que esta en el LS a un objeto de JS
    //! SI no hay nada en el LS se va a parsear '[]' a un arreglo vacio []
    let favorites:number[]=JSON.parse(localStorage.getItem('favorites') || '[]')

    if (favorites.includes(id))
    {
        //!eliminamos el pokemon del localstorage  
        favorites=favorites.filter(pokeId => pokeId!==id)      
    }
    else
    {
        favorites.push(id)
        
    }
    localStorage.setItem('favorites',JSON.stringify(favorites))
  }
  export const existInFavorites =(id:number):boolean=>{
    //console.log('existInFavorites llamado')
    //! Para que no continue porque en node no existe la propiedad Local Storagw
    if (typeof window==='undefined') return false
    const favorites:number[]=JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites.includes(id)
  } 
  
  export const pokemons =(): number[] =>{
        if (typeof window==='undefined') return []
         //!Uso JSON.parse para transformar la informacion que esta en el LS a un objeto de JS
    //! SI no hay nada en el LS se va a parsear '[]' a un arreglo vacio []
        return JSON.parse(localStorage.getItem('favorites') || '[]')
  }
  // export default{
  //   toggleFavorite,
  //    existInFavorites,
  //    pokemons
  // }
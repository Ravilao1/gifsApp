export const getGifs = async(category) =>{
    const search = category;
    console.log(search)
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(search)}&api_key=OKzePWkP1kxS2FbIglEHHrlvfDWgJBIk&limit=10`
    console.log(url)
    const response = await fetch(url);
    const {data} = await response.json(); 

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    return gifs;
}
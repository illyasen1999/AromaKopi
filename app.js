console.log(
   "refer to this: https://dribbble.com/shots/17283870-Aroma-Kopi-Landing-Page"
)
const bannerBtn = document.querySelector('.bannerBtn').addEventListener('click', () => {
   alert("refer to this: https://dribbble.com/shots/17283870-Aroma-Kopi-Landing-Page")
})
const searchBtn = document.querySelector('.searchBtn').addEventListener('click', () => {
   let search = document.querySelector('#search')
   search.style.display = "block";
})
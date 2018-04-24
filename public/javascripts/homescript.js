let artworks = document.querySelector('.artworks')
let artworkContainer = document.querySelector('.artwork-container')
artworks.style.height = '150vw';
artworkContainer.style.height = '100%';


let artBox2Diagonal = document.querySelector('.art-box-2-diagonal')
artBox2Diagonal.style.display = 'none';

let artBoxImgs = document.querySelectorAll('.art-box-img');
artBoxImgs.forEach(artBoxImg =>{
  artBoxImg.style.backgroundRepeat = 'no-repeat';
  artBoxImg.style.backgroundSize = 'cover';
});


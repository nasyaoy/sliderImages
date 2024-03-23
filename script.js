// let texts = ['text1', 'текст2', 'ТЕКСТ3'];

// let slider = document.querySelector('#slider');

// let i = 0;
// setInterval(()=>{
//     slider.textContent = texts[i];
//     i++;

//     if(i == texts.length){
//         i = 0;
//     }
// }, 1000)

//слайдер картинок

let images = ['TMNT_or.jpg', 'TMNT_bl.jpg', 'TMNT_re.jpg'];

let slider2 = document.querySelector('#slider2');
let img = slider2.querySelector('img');

img.height = 350;

let i = 0;
setInterval(() => {
    img.src = images[i];
    i++;

    if (i == images.length) {
        i = 0;
    }
}, 2000);
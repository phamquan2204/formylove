const heart = document.querySelector('.heart');
const imgBtn = document.querySelector('.btn')
const imgArea = document.querySelector('.img-container')


function changeImage() {
    if (imgBtn.classList.contains('active')) {
        imgBtn.classList.remove('active')
    } else (
        imgBtn.classList.add('active')
    )
    if (imgBtn.classList.contains('active')) {
        imgArea.style.display = 'flex'
    } else {
        imgArea.style.display = 'none'
    }
    console.log('active')
}


let slideIndex = 0;

showSlides();
function showSlides() {
    let i;
    const imgList = document.getElementsByClassName("imgList")
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > imgList.length) { slideIndex = 1 }
    imgList[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
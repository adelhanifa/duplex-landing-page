function toSection2() {
    document.querySelector('.heading').scrollIntoView()
}

function toSection1() {
    document.querySelector('.section1').scrollIntoView()
}

function setTwoImgsStyle() {
    // set the to pic above each other 
    const img_container_width = document.getElementById('left-part-container').offsetWidth
    const img5_width = document.getElementById('img5').offsetWidth
    const img5_height = 1.33 * img5_width
    const img6_width = document.getElementById('img6').offsetWidth
    const img6_height = img6_width
    const container_height = img5_height + (img5_width + img6_width - img_container_width)

    document.getElementById('img-container').style.height = `${container_height}px`;
    document.getElementById('img6').style.top = `${container_height - img6_height}px`;
}

window.onresize = setTwoImgsStyle
setTwoImgsStyle()
const shareIcon = document.querySelector('.share-icon')
const shareInformation = document.querySelector('.share-information')
const shareInformationMobile = document.querySelector('.share-information-mobile')

const active = shareIcon.addEventListener('click',()=> {
        shareInformation.classList.toggle('active')
        shareIcon.classList.toggle('active')
        shareInformationMobile.classList.toggle('active')
    })


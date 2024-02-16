function countriesClick(travel) {
    const country = document.getElementById('country-detail')
    country.src = travel.image
    const imageElement = document.createElement('img')
    imageElement.src = travel.image
    const travelInfo = document.getElementById('country-details')
    travelInfo.textContent = travel.name
}
 
fetch('http://localhost:3000/favDestinations')
.then(response => response.json())
.then(favDestination => addCountries(favDestination))
 
function addCountries(favDestination) {
    
    //  fetch('http://localhost:3000/favDestinations')
    //  .then(response => response.json())
    //  .then(favDestination => {
         favDestination.forEach(travel => {
        const myPlaces = document.getElementById('travel-guide')
        const imgElement = document.createElement('img')
        imgElement.src = travel.image
        myPlaces.appendChild(imgElement)

        imgElement.addEventListener('click', () => countriesClick(travel))    
        })
    //})
}

//     fetch('http://localhost:3000/favDestinations')
//     .then(response => response.json())
//     .then(favDestination => {
//         favDestination.forEach(travel => {
//    let countryDetails = document.getElementById('country-details')
//    const clickMe = document.getElementById('click-me')
//         countryDetails.addEventListener('click', () => {
//         clickMe = travel.name
//     })
//         })
//         })
//}

function countriesSubmit() {
    const countryForm = document.getElementById('user-submit')
    countryForm.addEventListener('submit', (event) => {
    event.preventDefault()
    countryForm.textContent = 'Form submitted'
    
     })
}

function changColor() {
    const p = document.querySelector('p')
p.addEventListener('mouseover', () => {})
//mouseover 
}


 function getDetails() {
    //addCountries()
    countriesSubmit()
 }

 getDetails()

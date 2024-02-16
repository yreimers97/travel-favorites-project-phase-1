 //function addCountries() {
    const myPlaces = document.getElementById('travel-guide')
    fetch('http://localhost:3000/favDestinations')
    .then(response => response.json())
    .then(favDestination => {
        favDestination.forEach(travel => {
        const imgElement = document.createElement('img')
        imgElement.src = travel.image
        myPlaces.appendChild(imgElement)
        })
    })
 //}
//  function countriesClick() {
//     myplaces.addEventListener('click', (event))
//     event.
//  }

 //function main() {
  //  addCountries()
 //}

//     const nameOfCountry = document.createElementById('country-details')
//     nameOfCountry.src = travel.name
//     const imgElement = document.createElementById('img')
//     imgElement.src = travel.image
//     //myPlaces.appendChild(imgElement)
// //}
// //function displayTravel()
// //const travelForm = document.getElementById
// //suggestCountry.addEventListener('submit', (event) => {
//    // event.preventDefault()

//    // const country = document.getElementById()
//    // const country = document.getElementById()
//     //const country = documente.getElementById()
// //})
 //}
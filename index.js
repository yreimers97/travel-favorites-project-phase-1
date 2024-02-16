 function addCountries() {
    const myPlaces = document.getElementById('travel-guide')
    fetch('http://localhost:3000/favDestinations')
    .then(response => response.json())
    .then(favDestination => {
        favDestination.forEach(travel => {
        const imgElement = document.createElement('img')
        imgElement.src = travel.image
        myPlaces.appendChild(imgElement)

        // let countryDetails = document.getElementById('country-details')
        // countryDetails.addEventListener('click', addCountries() {
        // })
     })
    })
}

 function countriesClick() {
   
  }

function countriesSubmit() {
    const countryForm = document.getElementById('user-submit')
    countryForm.addEventListener('submit', (event) => {
    event.preventDefault()
    countryForm.textContent = 'Form submitted'
     })
}

 function getDetails() {
    addCountries()
    countriesSubmit()
 }

 getDetails()
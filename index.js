


// document.getEventListener('DomContentLoaded', event => {});

const issButton = document.querySelector('.get-location')

fetch('http://api.open-notify.org/iss-now.json')
        .then(res => res.json())
        .then(json => {
            
            console.log(json) 

            issButton.addEventListener('click', event => {

                let location = document.querySelector('.station-location')
                // let location = document.createElement('location')
            
                location.textContent = `Lat: ${json.iss_position.latitude}; Long: ${json.iss_position.longitude}`
                // location.textContent = 'testing'
            
            });
        
        
        
        });





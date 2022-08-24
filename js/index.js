const vacationDestinations = [
    {
        picture: 'images/image 18.png',
        name: 'Bali, Indonesia'
    },
    {
        picture: 'images/image 181.png',
        name: 'Kerry, Ireland'
    },
    {
        picture: 'images/Sydney.png',
        name: 'Sydney, Australia'
    },
    {
        picture: 'images/image 181.png',
        name: 'Paris, France'
    }
];

const generateCards = (picture, name) => {
    return `
    <div class="fullCard">
        <div class="background">
            <img src="${picture}" alt="">
        </div>

        <div class="cardtext">${name}</div>
    </div>
    `;
}
const div21Cards = document.getElementById('topVacationDestinations');


const bgCardHTML = vacationDestinations.map(destination => generateCards(destination.picture, destination.name)).join('');

div21Cards.innerHTML = bgCardHTML;
// console.log(bgCardHTML)







const offers = [
    {
        picture: 'images/image19.png',
        tittle: 'Domestic Flights',
        h2: 'Huge savings on flight with',
        text: 'Book domestic flights starting @ just ₹1459'
    },
    {
        picture: 'images/image19(1).png',
        tittle: 'International Hotels',
        h2: 'Enjoy upto 20% off on International<br> Hotels trxvl.',
        text: 'Make the most of this deal on your first<br>booking with trxvl.'
    },
    {
        picture: 'images/image19.png',
        tittle: 'Domestic Flights',
        h2: 'Huge savings on flight with',
        text: 'Book domestic flights starting @ just ₹1459'
    },
]

const generateOfferCard = (picture, tittle, h2, text) => {
    return `
    <div class="card">
        <div class="picture">
            <img src="${picture}" alt="" class="">
        </div>
        <div class="info">
            <div class="text">${tittle}</div>
            <div class="text2">${h2}<br> Hotels trxvl.</div>
            <div class="text3">${text}</div>
            <div class="btn">Book Now</div>
        </div>
    </div>
    `
};

const div31Cards = document.getElementById('offers');

const offerCardHTML = offers.map(offer => generateOfferCard(offer.picture, offer.tittle, offer.h2, offer.text)).join('');

div31Cards.innerHTML = offerCardHTML;







const propertyType = [
    {
        picture: 'images/hotel.png',
        name: 'Hotels'
    },
    {
        picture: 'images/apart.png',
        name: 'Kerry, Ireland'
    },
    {
        picture: 'images/resor.png',
        name: 'Apartments'
    },
    {
        picture: 'images/hotel.png',
        name: 'Resorts'
    }
];

const generateTypeCards = (picture, name) => {
    return `
    <div class="card">
        <div class="background">
            <img src="${picture}" alt="">
        </div>

        <div class="text">${name}</div>
    </div>
    `;
}
const div41cards = document.getElementById('propertyType');

const propertyTypeCardHTML = propertyType.map(type => generateTypeCards(type.picture, type.name) ).join('');

div41cards.innerHTML = propertyTypeCardHTML;




const connectWithTravelers = [
    {
        picture: 'images/ind.png',
        h2: 'India',
        tittle: 'Travel community',
        travelers: '155,073 travelers'
    },
    {
        picture: 'images/travel.png',
        h2: 'Travel Talk',
        tittle: 'Travel community',
        travelers: '165,033 travelers'
    },
    {
        picture: 'images/beach.png',
        h2: 'Beach',
        tittle: 'Travel community',
        travelers: '123,173 travelers'
    },
    {
        picture: 'images/travel.png',
        h2: 'Mountains',
        tittle: 'Travel community',
        travelers: '134,120 travelers'
    }
];

const generateTravCards = (picture, h2, tittle, travelers) => {
    return `
    <div class="card">
        <div class="picture">
            <img src="${picture}" alt="" class="">
        </div>
        <div class="info">
            <div class="text">${h2}</div>
            <div class="text2">${tittle}</div>
            <div class="text3">${travelers}</div>
        </div>
    </div>
    `;
};

const div6Cards = document.getElementById('connectWithTravelers');

const card6HTML = connectWithTravelers.map(card => generateTravCards(card.picture, card.h2, card.tittle, card.travelers)).join('');

div6Cards.innerHTML = card6HTML;
























const beachDestinations = [
    {
        picture: 'images/image 33.png',
        name: 'Swiss Apls',
        rating: '4.7',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    },
    {
        picture: 'images/image 34.png',
        name: 'Hallstatt',
        rating: '4.9',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    },
    {
        picture: 'images/image 35.png',
        name: 'Faroe Island',
        rating: '4.5',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    },
    {
        picture: 'images/image 33.png',
        name: 'Innsbruck',
        rating: '4.6',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    }
];


const generateDestinationsCard = (picture, name, rating, days, nights, flights, hotels, transfers, activities, keyDescriptions) => {
    return `
        <div class="card">
                    <div class="picture">
                        <img src="${picture}" alt="" class="">
                    </div>

                    <div class="placeName">
                        <div class="name">${name}</div>

                        <div class="grade">
                            <div class="star">
                                <img src="images/star.png" alt="" class="">
                            </div>
                            <div class="numb">${rating}</div>
                        </div>
                    </div>

                    <div class="amountOfDays">${days} Days ${nights} Nights</div>

                    <div class="roadInf">
                        <div class="smallCard">
                            <div class="pic">
                                <img src="images/Vector213.svg" alt="" class="">
                            </div>
                            <div class="text">${flights} Flights</div>
                        </div>

                        <div class="smallCard">
                            <div class="pic">
                                <img src="images/hotel.svg" alt="" class="">
                            </div>
                            <div class="text">${hotels} Hotel</div>
                        </div>

                        <div class="smallCard">
                            <div class="pic">
                                <img src="images/car.svg" alt="" class="">
                            </div>
                            <div class="text">${transfers} Transfers</div>
                        </div>

                        <div class="smallCard">
                            <div class="pic">
                                <img src="images/person.svg" alt="" class="">
                            </div>
                            <div class="text">${activities} Activities</div>
                        </div>
                    </div>

                    <div class="list">
                        <div class="row">
                            <div class="dot"></div>
                            <div class="text">${keyDescriptions[0]}</div>
                        </div>

                        <div class="row">
                            <div class="dot"></div>
                            <div class="text">${keyDescriptions[1]}</div>
                        </div>

                        <div class="row">
                            <div class="dot"></div>
                            <div class="text">${keyDescriptions[2]}</div>
                        </div>
                    </div>

                    <div class="priceInfo">
                        <div class="Price">
                            <div class="oldPrice">₹188,952</div>
                            <div class="newPrice">₹88,952</div>
                        </div>
                        <div class="text">Per person</div>
                    </div>
                </div>
        `;
}



const div2Cards = document.getElementById('beachDestinations');

const card2HTML = beachDestinations.map(destination => {
    return generateDestinationsCard(destination.picture, destination.name, destination.rating, destination.days, destination.nights, destination.flights, destination.hotels, destination.transfers, destination.activities, destination.keyDescriptions, destination.picture);
}).join('');

div2Cards.innerHTML = card2HTML;







const recentlyViewed = [
    {
        picture: 'images/image 34.png',
        name: 'Swiss Apls',
        rating: '4.7',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    },
    {
        picture: 'images/image 36.png',
        name: 'Hallstatt',
        rating: '4.9',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    }
];


const generateCard = (picture, name, rating, days, nights, flights, hotels, transfers, activities, keyDescriptions) => {
    return `
        <div class="card">
                    <div class="picture">
                        <img src="${picture}" alt="" class="">
                    </div>

                    <div class="placeName">
                        <div class="name">${name}</div>

                        <div class="grade">
                            <div class="star">
                                <img src="images/star.png" alt="" class="">
                            </div>
                            <div class="numb">${rating}</div>
                        </div>
                    </div>

                    <div class="amountOfDays">${days} Days ${nights} Nights</div>

                    <div class="roadInf">
                        <div class="smallCard">
                            <div class="pic">
                                <img src="images/Vector213.svg" alt="" class="">
                            </div>
                            <div class="text">${flights} Flights</div>
                        </div>

                        <div class="smallCard">
                            <div class="pic">
                                <img src="images/hotel.svg" alt="" class="">
                            </div>
                            <div class="text">${hotels} Hotel</div>
                        </div>

                        <div class="smallCard">
                            <div class="pic">
                                <img src="images/car.svg" alt="" class="">
                            </div>
                            <div class="text">${transfers} Transfers</div>
                        </div>

                        <div class="smallCard">
                            <div class="pic">
                                <img src="images/person.svg" alt="" class="">
                            </div>
                            <div class="text">${activities} Activities</div>
                        </div>
                    </div>

                    <div class="list">
                        <div class="row">
                            <div class="dot"></div>
                            <div class="text">${keyDescriptions[0]}</div>
                        </div>

                        <div class="row">
                            <div class="dot"></div>
                            <div class="text">${keyDescriptions[1]}</div>
                        </div>

                        <div class="row">
                            <div class="dot"></div>
                            <div class="text">${keyDescriptions[2]}</div>
                        </div>
                    </div>

                    <div class="priceInfo">
                        <div class="Price">
                            <div class="oldPrice">₹188,952</div>
                            <div class="newPrice">₹88,952</div>
                        </div>
                        <div class="text">Per person</div>
                    </div>
                </div>
        `;
}



const div3Cards = document.getElementById('recentlyViewed');

const card3HTML = recentlyViewed.map(recently => {
    return generateCard(recently.picture, recently.name, recently.rating, recently.days, recently.nights, recently.flights, recently.hotels, recently.transfers, recently.activities, recently.keyDescriptions);
}).join('');

// divCards.innerHTML = card2HTML;

div3Cards.insertAdjacentHTML('afterbegin', card3HTML)








const packages = [
    {
        picture: 'images/image 24.png',
        name: 'Val di Funes',
        rating: '4.7',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    },
    {
        picture: 'images/image 25.png',
        name: 'Ushuaia',
        rating: '4.9',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    },
    {
        picture: 'images/image 31.png',
        name: 'Berchtesgaden',
        rating: '4.5',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    },
    {
        picture: 'images/image 31.png',
        name: 'Fussen',
        rating: '4.6',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    }
];

const div4Cards = document.getElementById('allInclusivePackages');

const card4HTML = packages.map(packeg => {
    return generateCard(packeg.picture, packeg.name, packeg.rating, packeg.days, packeg.nights, packeg.flights, packeg.hotels, packeg.transfers, packeg.activities, packeg.keyDescriptions, packeg.picture);
}).join('');

div4Cards.innerHTML = card4HTML;








const honeymoon = [
    {
        picture: 'images/image 27.png',
        name: 'Mauritius',
        rating: '4.7',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    },
    {
        picture: 'images/image 28.png',
        name: 'Havelock',
        rating: '4.9',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    },
    {
        picture: 'images/image 29.png',
        name: 'Whitsunday Islands',
        rating: '4.5',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    },
    {
        picture: 'images/image 29.png',
        name: 'Maldives',
        rating: '4.6',
        days: 3,
        nights: 4,
        flights: 2,
        hotels: 3,
        transfers: 5,
        activities: 2,
        keyDescriptions: ['Tour combo with return airport transfer', 'City Tour', 'Curious Corner']
    }
];


const div5Cards = document.getElementById('honeymoonFreebiesSpecial');

const card5HTML = honeymoon.map(honeymoon => {
    return generateCard(honeymoon.picture, honeymoon.name, honeymoon.rating, honeymoon.days, honeymoon.nights, honeymoon.flights, honeymoon.hotels, honeymoon.transfers, honeymoon.activities, honeymoon.keyDescriptions, honeymoon.picture);
}).join('');

div5Cards.innerHTML = card5HTML;














const buttom = document.getElementById('action');
const block1 = document.querySelector('.haveToChange');
const block2 = document.querySelector('.changeOn');

buttom.onclick = function(){
  block2.style.display = "block";
  block1.style.display = "none";
}



const buttom2 = document.getElementById('back');
const block12 = document.querySelector('.haveToChange');
const block22 = document.querySelector('.changeOn');


buttom2.onclick = function(){
  block22.style.display = "none";
  block12.style.display = "block";
}

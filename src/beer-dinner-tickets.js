const load = function () {
    const tabContent = document.getElementsByClassName('tab-content');

    if (tabContent[0].firstChild) {
        tabContent[0].removeChild(tabContent[0].lastChild);
    }

    const container = document.createElement('div');
    container.classList.add('beerDT');
    container.classList.add('container');
    container.innerHTML = `
    <h1>
    5-COURSE BAVARIAN WHEAT BEER DINNER <strong>JULY 17 OR 18 @ 6:30 PM</strong>
    </h1>
    <p>
    Featuring beers from Schneider Weisse
    </p>
    <div>
    <button class="learn-more">Learn More</button>
    </div>
    <p class="small-txt">
    Only at participating restaurants.
    </p>
    `;
    tabContent[0].style.backgroundImage = 'url(https://bjsrestaurants.scene7.com/is/image/bjsrestaurants/hero-beer-dinner)';
    tabContent[0].appendChild(container);
}

export default {
    load
}
const load = function () {
    const tabContent = document.getElementsByClassName('tab-content');

    if (tabContent[0].firstChild) {
        tabContent[0].removeChild(tabContent[0].lastChild);
    }

    const container = document.createElement('div');
    container.classList.add('lunchSpech');
    container.classList.add('container');
    container.innerHTML = `
    <h1>
    LUNCH JUST GOT TASTIER<strong>,$12 LUNCH SPECIALS</strong>
    </h1>
    <p>
    Available Monday Through Friday 11:00 AM-3:00 PM for Dine In, Take Out, and Delivery Available .
    </p>
    <div>
    <button class="order-now">ORDER NOW</button>
    </div>
    <p class="small-txt">
    Price and Items Vary By Location.
    </p>
    `;
    tabContent[0].style.backgroundImage = 'url(https://bjsrestaurants.scene7.com/is/image/bjsrestaurants/home-lunch3)';
    tabContent[0].appendChild(container);
}

export default {
    load
}
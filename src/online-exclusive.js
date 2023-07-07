const load = function () {
    const tabContent = document.getElementsByClassName('tab-content');

    if (tabContent[0].firstChild) {
        tabContent[0].removeChild(tabContent[0].lastChild);
    }

    const container = document.createElement('div');
    container.classList.add('onlExcl');
    container.classList.add('container');
    container.innerHTML = `
    <h1>
    CHEESEBURGER PIZZA (ONLINE EXCLUSIVE) <strong>50% OFF ANY LARGE DEEP DISH OR TAVERN-CUT PIZZA</strong>
    </h1>
    <p>
    Available for take out and delivery only.
    </p>
    <div>
    <button class="learn-more">Learn More</button>
    <button class="view-menu">View Menu</button>
    </div>
    <p class="small-txt">
    For a limited time through our website and mobile app only.
    </p>
    `;
    tabContent[0].style.backgroundImage = 'url(https://bjsrestaurants.scene7.com/is/image/bjsrestaurants/hero-home-cheeseburger-pizza)';
    tabContent[0].appendChild(container);
}

export default {
    load
}

const load = function () {
    const userBar = document.getElementsByClassName('user-bar');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/BJ%27s_Restaurants_logo.svg/1200px-BJ%27s_Restaurants_logo.svg.png");
    userBar[0].appendChild(logo);
    
    const usrBarList = document.createElement('div');
    usrBarList.classList.add('user-bar-list');
    userBar[0].appendChild(usrBarList);
    
    const logIn = document.createElement('span');
    logIn.textContent = "LOG-IN";
    logIn.classList.add('log-in');
    usrBarList.appendChild(logIn);
    
    const divider = document.createElement('span');
    divider.classList.add('divider');
    usrBarList.appendChild(divider);

    const signUp = document.createElement('span');
    signUp.classList.add('sign-up');
    signUp.textContent = "SIGN UP";
    usrBarList.appendChild(signUp);

    const earnRewards = document.createElement('div');
    const starIcon = document.createElement('img');
    earnRewards.textContent = "EARN REWARDS!";
    earnRewards.classList.add('earn-rewards');
    starIcon.classList.add('star-icon');
    earnRewards.appendChild(starIcon);
    usrBarList.appendChild(earnRewards);
}

export default {
    load
}
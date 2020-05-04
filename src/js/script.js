window.addEventListener('load', (event) => {
    let menu_btn       = document.querySelector('.menu-btn'),
        close_menu_btn = document.querySelector('.menu-close-btn');
    if(menu_btn !== null){
        let btn = menu_btn.querySelector('button');
        btn.addEventListener('click', open_menu);
    }
    if(close_menu_btn !== null){
        close_menu_btn.addEventListener('click', close_menu);
    }

    /**
     * The function of opening the main menu for the mobile version of site
     * @param {*} event 
     */
    function open_menu(){
        let menu = document.querySelector("ul.menu");
        if(menu === null){
            return false;
        }
        menu.classList.add("menu-active");
    }
    /**
     * The function of closing the main menu for the mobile version of site
     */
    function close_menu(){
        let menu = document.querySelector("ul.menu");
        if(menu === null){
            return false;
        }
        menu.classList.remove("menu-active");
    }
  });
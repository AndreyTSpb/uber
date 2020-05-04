window.addEventListener('load', (event) => {
    /**
     * Обработка вызова меню
     */
    let menu_btn       = document.querySelector('.menu-btn');
    if(menu_btn !== null){
        menu_btn.addEventListener('click', ()=>{
            if(menu_btn.classList.contains('menu-btn-active')){
                close_menu();
                menu_btn.classList.remove('menu-btn-active');
            }else{
                open_menu();
                menu_btn.classList.add('menu-btn-active');
            }
        });
    }

    /**
     * Обработка события при нажатии на элемент меню
     */
    let link_menu = document.querySelectorAll('.menu-item');
    if(link_menu.length > 0){
        link_menu.forEach((e)=>{
            e.addEventListener('click', ()=>{
                menu_btn.classList.remove('menu-btn-active');
                close_menu();
            }); 
        });
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
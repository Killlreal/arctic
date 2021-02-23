export default function initNav(){
    let navItems = document.querySelectorAll('.nav_item');
    let chevron = document.querySelector('.nav_chevron');
    let navItemArray = Array.from(navItems);

    navItemArray[0].appendChild(chevron);
    chevron.classList.remove('hidden');
/*
    for (let Item of navItemArray){
        Item.addEventListener('click', function(evt){
            evt.preventDefault();
            Item.appendChild(chevron);
            chevron.classList.remove('hidden');
        })
    };
*/
};
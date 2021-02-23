export default function initCalendarModal(){
    const calendarItems = document.querySelectorAll(".calendar_day");
    const modal = document.querySelector(".calendar_day_modal");
    const modalMiniItems = document.querySelectorAll(".calendar_day_event_link_minscreen");
    const closeBtn = document.querySelector(".calendar_day_modal_closer");
    let items = Array.from(calendarItems);
    let miniItems = Array.from(modalMiniItems);

    for (let item of items){
        item.classList.add("calendar_day_active");
        item.addEventListener('click', openModal);
    }

    for (let item of miniItems){
        item.addEventListener('click', openModal);
    }

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    function openModal(e){
        e.preventDefault();
        modal.classList.remove("hidden");
    }

    function closeModal(e){
        e.preventDefault();
        modal.classList.add("hidden");
    }

    function outsideClick(e) {
        if (e.target == modal){
            modal.classList.add("hidden");
        }
    }
}
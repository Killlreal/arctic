export default class LightBox{
    constructor(){
        const tableItems = document.querySelectorAll(".arctic_journey_tours_table_item");
        const closeBtns = document.querySelectorAll(".arctic_journey_lightbox_closer");
        this.modalItem
        this.modal = document.querySelector("#lightboxModal");

        tableItems.forEach(val => val.onclick = () => this.openModal(val.id))
        closeBtns.forEach(val => val.onclick = this.closeModal)
        window.addEventListener('click', this.outsideClick);
    }

    openModal = id => {
        this.modal.classList.remove("hidden");
        this.modalItem = document.querySelector("#route_"+id.split('_')[1])
        this.modalItem.classList.remove('hidden')
    }

    closeModal = () => {
        this.modal.classList.add("hidden");
        this.modalItem.classList.add('hidden')
    }

    outsideClick = e => {
        if (e.target == this.modal){
            this.modal.classList.add("hidden");
        }
    }
}
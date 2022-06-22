const buttonPopup = document.querySelector(".button-search");
const modal = document.querySelector(".modal");
const dateEntry = modal.querySelector("[name=date-of-entry]");
const form = modal.querySelector(".modal-form");
const dateDeparture = modal.querySelector("[name=date-of-departure]");

buttonPopup.onclick = function () {
  modal.classList.toggle("modal-show");
  modal.classList.toggle("modal-hidden");
  modal.classList.remove("modal-error");
  dateEntry.focus();
};

if (modal.classList.contains("modal-show")) {
  dateEntry.focus();
};

form.addEventListener ("submit", function(evt) {
if(!dateEntry.value || !dateDeparture.value){
 evt.preventDefault();
 modal.classList.remove("modal-error");
 modal.offsetWidth = modal.offsetWidth;
 modal.classList.add("modal-error");
}
});

window.addEventListener ("keydown", function(evt) {
  if(evt.keyCode===27) {
    if(modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.toggle("modal-show");
      modal.classList.toggle("modal-hidden");
      modal.classList.remove("modal-error");
    }
  }
});

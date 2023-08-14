window.onload = function () {
  const faqContainers = document.querySelectorAll(".faq_container");

  faqContainers.forEach(faqContainer => {
    faqContainer.addEventListener("click", () => {
      faqContainer.classList.toggle('active');
    });
  });
}



document.addEventListener("DOMContentLoaded", function () {
  let button = document.querySelector(".intro_submit");
  if (button) {  // проверка на существование элемента
    button.addEventListener("click", function (event) {
      event.preventDefault();
      let tarif = document.querySelector("#tarif");
      if (tarif) {  // проверка на существование элемента
        tarif.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

let index = 0;
let index_reviews = 0;

document.addEventListener("DOMContentLoaded", function () {

  // Слайдер услуг
  document.querySelector(".services_left").addEventListener("click", function (e) {
    e.preventDefault();
    let slider = document.querySelector(".slider");
    let cards = slider.querySelectorAll(".card");
    index--;
    if (index < 0) {
      index = cards.length - 1;
    }
    let cardWidth = cards[0].offsetWidth + 20;
    slider.style.transform = `translateX(${-index * cardWidth}px)`;
  });

  document.querySelector(".services_right").addEventListener("click", function (e) {
    e.preventDefault();
    let slider = document.querySelector(".slider");
    let cards = slider.querySelectorAll(".card");
    index++;
    if (index >= cards.length) {
      index = 0;
    }
    let cardWidth = cards[0].offsetWidth + 20;
    slider.style.transform = `translateX(${-index * cardWidth}px)`;
  });

  // Слайдер отзывов
  document.querySelector(".services_left_r").addEventListener("click", function (e) {
    e.preventDefault();
    let slider_reviews = document.querySelector(".slider_reviews");
    let reviews = slider_reviews.querySelectorAll(".review");
    index_reviews--;
    if (index_reviews < 0) {
      index_reviews = reviews.length - 1;
    }
    let reviewWidth = reviews[0].offsetWidth + 20;
    slider_reviews.style.transform = `translateX(${-index_reviews * reviewWidth}px)`;
  });

  document.querySelector(".services_right_r").addEventListener("click", function (e) {
    e.preventDefault();
    let slider_reviews = document.querySelector(".slider_reviews");
    let reviews = slider_reviews.querySelectorAll(".review");
    index_reviews++;
    if (index_reviews >= reviews.length) {
      index_reviews = 0;
    }
    let reviewWidth = reviews[0].offsetWidth + 20;
    slider_reviews.style.transform = `translateX(${-index_reviews * reviewWidth}px)`;
  });

});

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".feedback_form");
  let inputs = form.querySelectorAll(".feedback_field");
  let checkbox = document.querySelector("#check");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "#E41313";
        input.style.color = "#E41313";
      } else {
        input.style.borderColor = "#1C1C1C";
        input.style.color = "#1C1C1C";
      }
    });

    if (!checkbox.checked) {
      checkbox.parentElement.style.color = "#E41313";
    } else {
      checkbox.parentElement.style.color = "#1C1C1C";
    }
  });
});



$(document).ready(function () {
  $('.phone_field').mask('+0 (000) 000-00-00');
});
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".tarifs_submit");

  buttons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      let cardTitle = this.closest(".tarifs_card").querySelector(".tarifs_cards-title").textContent;
      let cardPrice = this.closest(".tarifs_card").querySelector(".tarifs-price").textContent;

      Swal.fire({
        title: 'Бронирование номера',
        html: `
          <p>Тариф: ${cardTitle}</p>
          <p>Стоимость: ${cardPrice}</p>
          <form id="booking-form">
            <input type="text" id="name" class="swal2-input" placeholder="Ваше имя">
            <input type="text" id="phone" class="swal2-input" placeholder="Ваш номер телефона">
            <input type="date" id="date" class="swal2-input" placeholder="Дата бронирования">
          </form>
        `,
        confirmButtonText: 'Забронировать',
        confirmButtonColor: '#1C1C1C',
        confirmButtonClass: 'tarifs_submit',
        customClass: {
          popup: 'my-popup',
        },
        focusConfirm: false,
        preConfirm: () => {
          let name = document.getElementById('name').value;
          let phone = document.getElementById('phone').value;
          let date = document.getElementById('date').value;

          return { name: name, phone: phone, date: date };
        },
      }).then((result) => {
        console.log(result.value);
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".header");
  let introSection = document.querySelector(".intro");

  window.addEventListener("scroll", function () {
    let introBottom = introSection.getBoundingClientRect().bottom;
    if (introBottom < 0) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".header");
  let introSection = document.querySelector(".intro");

  window.addEventListener("scroll", function () {
    let introBottom = introSection.getBoundingClientRect().bottom;
    if (introBottom < 0) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  });
});

window.addEventListener("scroll", function () {
  let header = document.querySelector(".header_wrapper");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    header.style.paddingTop = "20px";
  } else {
    header.style.paddingTop = "";
  }
});

let images = ['img/Rectangle1.png', 'img/image67.png', 'img/image65.png', 'img/image68.png'];  // ваш массив изображений
let current = 0;
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('changeleft').addEventListener('click', function (e) {
    e.preventDefault();
    current--;
    if (current < 0) current = images.length - 1;
    changeBackground();
  });

  document.getElementById('changeright').addEventListener('click', function (e) {
    e.preventDefault();
    current++;
    if (current >= images.length) current = 0;
    changeBackground();
  });

  function changeBackground() {
    document.querySelector('.intro').style.backgroundImage = 'url(' + images[current] + ')';
  }

});

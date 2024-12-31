const hamburgerMenu = document.querySelector('.hamburger_menu');
const navMenu = document.querySelector('#navMenu');

hamburgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

const imgContainers = document.querySelectorAll('.img_container');
const dots = document.querySelectorAll('.dot');
const title = document.querySelector('.title');
const description = document.querySelector('.description');

const imageData = [
    {
        title: "HẬU CẦN",
        description: "Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam id. Eu odio et cras nisi eu congue faucibus sit. Pretium proin dignissim urna aenean rhoncus feugiat. Dui phasellus sed tellus nunc."
    },
    {
        title: "HẬU CẦN 2",
        description: "Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam id. Eu odio et cras nisi eu congue faucibus sit. Pretium proin dignissim urna aenean rhoncus feugiat. Dui phasellus sed tellus nunc."
    },
    {
        title: "HẬU CẦN 3",
        description: "Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam id. Eu odio et cras nisi eu congue faucibus sit. Pretium proin dignissim urna aenean rhoncus feugiat. Dui phasellus sed tellus nunc."

    },
    {
        title: "HẬU CẦN 4",
        description: "Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam id. Eu odio et cras nisi eu congue faucibus sit. Pretium proin dignissim urna aenean rhoncus feugiat. Dui phasellus sed tellus nunc."
    }
];

function handleImageClick(index) {
    imgContainers.forEach((container) => container.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    imgContainers[index].classList.add('active');
    dots[index].classList.add('active');

    title.textContent = imageData[index].title;
    description.textContent = imageData[index].description;

    const parent = imgContainers[index].parentNode;
    parent.prepend(imgContainers[index]);
}

imgContainers.forEach((container, index) => {
    container.addEventListener('click', () => handleImageClick(index));
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => handleImageClick(index));
});

const backToTopBtn = document.getElementById("back-to-top");

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
// script.js
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
        index = (index + 1) % slides.length;
    }

    setInterval(showSlide, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".pdf-button").addEventListener("click", function(event) {
        let userConfirm = confirm("Do you want to open the Hypo Scan Research Paper?");
        if (!userConfirm) {
            event.preventDefault(); // Stop link from opening if user cancels
        }
    });
});

let currentIndex = 0;
const members = document.querySelectorAll(".team-member");

function showMember(index) {
    members.forEach((member, i) => {
        member.classList.remove("active");
        if (i === index) {
            member.classList.add("active");
        }
    });
}

function prevMember() {
    currentIndex = (currentIndex - 1 + members.length) % members.length;
    showMember(currentIndex);
}

function nextMember() {
    currentIndex = (currentIndex + 1) % members.length;
    showMember(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextMember, 5000);

// let currentIndex = 0;
// const members = document.querySelectorAll(".team-member");

// function showMember(index) {
//     members.forEach((member, i) => {
//         member.classList.toggle("active", i === index);
//     });
// }

// function prevMember() {
//     currentIndex = (currentIndex === 0) ? members.length - 1 : currentIndex - 1;
//     showMember(currentIndex);
// }

// function nextMember() {
//     currentIndex = (currentIndex === members.length - 1) ? 0 : currentIndex + 1;
//     showMember(currentIndex);
// }

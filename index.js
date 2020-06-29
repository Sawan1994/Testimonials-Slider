const data = [
  {
    author: "Tanya Sinclair",
    occupation: "UX Engineer",
    imgSrc: "./images/image-tanya.jpg",
    review:
      "\" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. \"",
  },
  {
    author: "John Tarkpor",
    occupation: "Junior Front-end Developer",
    imgSrc: "./images/image-john.jpg",
    review:
      '" If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "',
  },
];

var currentUser = 0;

function updateReview(userIndex) {
  const authorEl = document.querySelector(".testimonial__username");
  const occupationEl = document.querySelector(".testimonial__occupation");
  const reviewEl = document.querySelector(".testimonial__text");
  const userImage = document.querySelector(".userImage");

  authorEl.innerHTML = data[userIndex].author;
  occupationEl.innerHTML = data[userIndex].occupation;
  reviewEl.innerHTML = data[userIndex].review;
  userImage.src = data[userIndex].imgSrc;
}

function onClickNext(event) {
  if (currentUser < data.length - 1) {
    currentUser++;
    updateReview(currentUser);
  }
}

function onClickPrev(event) {
    if (currentUser > 0) {
      currentUser--;
      updateReview(currentUser);
    }
  }
  
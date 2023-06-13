
// FIRST GROUPING
// when #button-left is clicked:
//   show next slide
$("#next-button").click(function () {
  nextSlide();
});
// when #button-right is clicked:
//   show previous slide
$("#previous-button").click(function () {
  prevSlide();
});
// when #button-dot is clicked:
//   show slide(x)


const SLIDES = $(".slide0");
/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($(".slide0:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

/* See "show previous slide snippet" to use */
function prevSlide() {
  let prevNum = SLIDES.index($(".slide0:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  $(".slide0").addClass("hidden");
  $(".slide0").removeClass("active");
  currentSlide.removeClass("hidden");
  currentSlide.addClass("active");
}

// SECOND GROUPING
$("#next-button1").click(function () {
  nextSlide1();
});
$("#previous-button1").click(function () {
  prevSlide1();
});


const SLIDES1 = $(".slide1");

function nextSlide1() {
  let nextNum1 = SLIDES1.index($(".slide1:not(.hidden)")) + 1 + 1;
  if (nextNum1 > SLIDES1.length) {
    nextNum1 = 1;
  }
  showSlide1(nextNum1);
}

function prevSlide1() {
  let prevNum1 = SLIDES1.index($(".slide1:not(.hidden)")) - 1 + 1;
  if (prevNum1 <= 0) {
    prevNum1 = SLIDES1.length;
  }
  showSlide1(prevNum1);
}

function showSlide1(num) {
  let index1 = num - 1;
  let currentSlide1 = SLIDES1.eq(index1);
  $(".slide1").addClass("hidden");
  currentSlide1.removeClass("hidden");
}


// when hover over #button-work:
//   if: .hidden removed from #work-content
//   else: .hidden added to #work-content

// THIRD GROUPING
$("#next-button2").click(function () {
  nextSlide2();
});
$("#previous-button2").click(function () {
  prevSlide2();
});

const SLIDES2 = $(".slide2");

function nextSlide2() {
  let nextNum2 = SLIDES2.index($(".slide2:not(.hidden)")) + 1 + 1;
  if (nextNum2 > SLIDES2.length) {
    nextNum2 = 1;
  }
  showSlide2(nextNum2);
}

function prevSlide2() {
  let prevNum2 = SLIDES2.index($(".slide2:not(.hidden)")) - 1 + 1;
  if (prevNum2 <= 0) {
    prevNum2 = SLIDES2.length;
  }
  showSlide2(prevNum2);
}

function showSlide2(num) {
  let index2 = num - 1;
  let currentSlide2 = SLIDES2.eq(index2);
  $(".slide2").addClass("hidden");
  currentSlide2.removeClass("hidden");
}

// FOURTH GROUPING
$("#next-button3").click(function () {
  nextSlide3();
});
$("#previous-button3").click(function () {
  prevSlide3();
});

const SLIDES3 = $(".slide3");

function nextSlide3() {
  let nextNum3 = SLIDES3.index($(".slide3:not(.hidden)")) + 1 + 1;
  if (nextNum3 > SLIDES3.length) {
    nextNum3 = 1;
  }
  showSlide3(nextNum3);
}

function prevSlide3() {
  let prevNum3 = SLIDES3.index($(".slide3:not(.hidden)")) - 1 + 1;
  if (prevNum3 <= 0) {
    prevNum3 = SLIDES3.length;
  }
  showSlide3(prevNum3);
}

function showSlide3(num) {
  let index3 = num - 1;
  let currentSlide3 = SLIDES3.eq(index3);
  $(".slide3").addClass("hidden");
  currentSlide3.removeClass("hidden");
}

// function that acts as our event listener, event referring to line 182, window resizing
function windowSizeListener() {
  // 4 slideshows, so make sure we listen to all 4
  for (let id = 0; id < 4; id++) {
    // select all the slides that have the tag "img" and the class "slide[id]"
    const slides = document.querySelectorAll("img.slide" + id)
    // check to see what the current browser size is compared to 600 (my breakpoint)
    if (window.innerWidth < 600) {
      // iterate through each slide
      slides.forEach((n) => {
        // if the slide that we are checking is not hidden and no active, we know that we can hide it
        if (!n.classList.contains("hidden") && !n.classList.contains("active")) {
          // add the hidden class to the slide
          n.classList.add("hidden")
        }
      })
    }
    // if the window size is greater than 600
    else {
      // iterate through each slide again
      slides.forEach(n => {
        // make sure that each slide is visible by removing "hidden" class
        n.classList.remove("hidden")
      })
    }
  }
}

// call the function on refresh
windowSizeListener();
// make sure that whenever we resize the window, the windowSizeListener is being called
window.addEventListener('resize', windowSizeListener)

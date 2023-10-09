gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#scroll_section",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      end: "+=2000", // end after scrolling 500px beyond the start
      scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      
    }
  });

  tl.from(".cl1", {xPercent: -100})
  tl.from(".cl2", {xPercent: 100})
  tl.from(".cl3", {yPercent: -100})
  tl.from(".cl4", {yPercent: 100})
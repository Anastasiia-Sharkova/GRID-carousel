let cosSections = gsap.utils.toArray("#wrapper div");

const banner = document.getElementById('wrapper');

const timeline = gsap.timeline({
 onStart: onStartFunction,
 onComplete: onCompleteFunction,
 });
timeline.
  from(banner, {
    duration: 0.6,
    opacity: 0,
    ease: 'power1.out',
  })
  .to(
    ".image-container-1",
    {
      ease: "expo.inOut",
      duration: 2,
      width: "80vw",
    },
  )
  .to(
    ".image-container-1",
    {
      ease: "expo.inOut",
      duration: 2,
      width: "5vw",
    },
  )
    .to(
    ".image-container-2",
    {
      ease: "expo.inOut",
      duration: 2,
      width: "80vw",
    },
    "<"
  )
  .to(
    ".image-container-2",
    {
      ease: "expo.inOut",
      duration: 2,
      width: "5vw",
    },
  )
  .to(
    ".image-container-3",
    {
      ease: "expo.inOut",
      duration: 2,
      width: "80vw",
    },
    "<"
  )
  .to(
    ".image-container-3",
    {
      ease: "expo.inOut",
      duration: 2,
      width: "5vw",
    },
  )
  .to(
    ".image-container-4",
    {
      ease: "expo.inOut",
      duration: 2,
      width: "80vw",
    },
    "<"
  )
  .to(
    ".image-container-4",
    {
      ease: "expo.inOut",
      duration: 2,
      width: "5vw",
    },
  )
  .to(
    ".image-container-5",
    {
      ease: "expo.inOut",
      duration: 2,
      width: "80vw",
    },
    "<"
  )

  const timeline2 = gsap.timeline({
    });
   timeline2
     .to(
       ".image-container-1",
       {
         ease: "expo.inOut",
         duration: 1,
         writingMode: "horizontal-tb",
         textOrientation: "sideways",
       },
       '+=1.6'
     )
     .to(
       ".image-container-1",
       {
         ease: "expo.inOut",
         delay: 0.5,
         duration: 1.5,
         writingMode: "vertical-lr",
         textOrientation: "upright",
       },
     )
       .to(
       ".image-container-2",
       {
         ease: "expo.inOut",
         delay: 0.3,
         duration: 1.7,
         writingMode: "horizontal-tb",
         textOrientation: "sideways",
       },
       '<'
     )
     .to(
       ".image-container-2",
       {
         ease: "expo.inOut",
         delay: 0.5,
         duration: 1.5,
         writingMode: "vertical-lr",
         textOrientation: "upright",
       },
     )
     .to(
       ".image-container-3",
       {
         ease: "expo.inOut",
         delay: 0.2,
         duration: 1.8,
         writingMode: "horizontal-tb",
         textOrientation: "sideways",
       },
       '<'
     )
     .to(
       ".image-container-3",
       {
         ease: "expo.inOut",
         delay: 0.1,
         duration: 1.9,
         writingMode: "vertical-lr",
         textOrientation: "upright",
       },
     )
     .to(
       ".image-container-4",
       {
         ease: "expo.inOut",
         delay: 0.1,
         duration: 1.8,
         writingMode: "horizontal-tb",
         textOrientation: "sideways",
       },
       '<'
     )
     .to(
       ".image-container-4",
       {
         ease: "expo.inOut",
         duration: 1,
         writingMode: "vertical-lr",
         textOrientation: "upright",
       },
     )
     .to(
       ".image-container-5",
       {
         ease: "expo.inOut",
         delay: 0.3,
         duration: 1.7,
         writingMode: "horizontal-tb",
         textOrientation: "sideways",
       },
       "<"
     )

  const growSection = (section) => {
    gsap.to(section, {
        width: "80vw",
        duration: 2,
        ease: "expo.inOut",
    });
}
const growTextSection = (section) => {
  gsap.to(section, {
    writingMode: "horizontal-tb",
    textOrientation: "sideways",
    duration: 1,
    delay: 1,
    ease: "expo.inOut",
  });
}

const shrinkSection = (section) => {
    gsap.to(section, {
        width: "5vw",
        duration: 2,
        ease: "expo.inOut",
    });
}

const shrinkTextSection = (section) => {
  gsap.to(section, {
    writingMode: "vertical-lr",
    textOrientation: "upright",
    duration: 1,
    delay: 1,
    ease: "expo.inOut",
})}

  function createAnimation() {
    cosSections.forEach((section, i) => {
            section.addEventListener("click", () => {
                growSection(section);
                growTextSection(section);
                cosSections.forEach((otherSection, j) => {
                    if (j !== i) {
                      shrinkSection(otherSection);
                      shrinkTextSection(otherSection);
                    }
                });
            });
        }
    )
  };


function onStartFunction(){
  let firstImageAnimation = gsap.to(".image-container-1", {
    width: "80vw",
    writingMode: "horizontal-tb",
    textOrientation: "sideways",
    duration: 0,
  });

  firstImageAnimation.play();
 }

 function onCompleteFunction() {
  createAnimation();
  document.getElementById("wrapper").style.cursor = "pointer";
}

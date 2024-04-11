function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();
 var tl= gsap.timeline()

tl.from('#page>nav',{
  y:-80,
  delay:1,
  duration:1,
})
tl.from("#page>nav>h3, #page>nav>button",{
  y:-80,
  stagger:1,
})
gsap.to("#page>video",{
  scrollTrigger:{
    trigger:"#page>video",
    start : "3% top",
    end:"bottom top",
    // markers:true,
    scroller:"#main",
  },
  onStart:()=>{
    document.querySelector("#page>video").play()
  }
})

gsap.to("#page",{
  scrollTrigger:{
     trigger:"#page",
     scroller:"#main",
     start:"top top",
     end:"bottom 50%",
     pin:true
  }
})

gsap.to("#page1>h1",{
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top top",
    end:"bottom 50%",
    scrub:2,
    pin:true
  },
  y:-400,
})
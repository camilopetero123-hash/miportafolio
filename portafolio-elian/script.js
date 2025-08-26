// Animación hero al cargar
gsap.from("#hero h1", {opacity:0, y:-50, duration:1});
gsap.from("#hero p", {opacity:0, y:50, duration:1, delay:0.5});
gsap.from("#hero .btn", {opacity:0, scale:0.5, duration:1, delay:1});

// Animación scroll en secciones
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

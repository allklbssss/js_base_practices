const leftLinks = document.querySelectorAll(".left-menu a"),
  mapLinks = document.querySelectorAll(".map a");

leftLinks.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    let self = e.currentTarget;
    let selfClass = self.getAttribute("href");
    let color = self.dataset.color;
    let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
    let currentPolygon = currentElement.querySelectorAll("polygon");
    let currentPath = currentElement.querySelectorAll("path");
    if (currentPolygon)
      currentPolygon.forEach(
        (el) => (el.style.cssText = `fill: ${color}; stroke-width: 2px;`)
      );
    if (currentPath)
      currentPath.forEach(
        (el) => (el.style.cssText = `fill: ${color}; stroke-width: 2px;`)
      );
    self.classList.add("active");
  });

  el.addEventListener("mouseleave", (e) => {
    let self = e.currentTarget;
    let selfClass = self.getAttribute("href");
    let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
    let currentPolygon = currentElement.querySelectorAll("polygon");
    let currentPath = currentElement.querySelectorAll("path");
    if (currentPolygon) currentPolygon.forEach((el) => (el.style.cssText = ``));
    if (currentPath) currentPath.forEach((el) => (el.style.cssText = ``));
    self.classList.remove("active");
  });
});

mapLinks.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    let self = e.currentTarget;
    let selfClass = self.getAttribute("href");
    let color = self.dataset.color;
    let currentElement = document.querySelector(
      `.left-menu a[href="${selfClass}"]`
    );
    let currentPolygon = self.querySelectorAll("polygon");
    let currentPath = self.querySelectorAll("path");
    if (currentPolygon)
      currentPolygon.forEach(
        (el) => (el.style.cssText = `fill: ${color}; stroke-width: 2px;`)
      );
    if (currentPath)
      currentPath.forEach(
        (el) => (el.style.cssText = `fill: ${color}; stroke-width: 2px;`)
      );
    currentElement.classList.add("active");
  });

  el.addEventListener("mouseleave", (e) => {
    let self = e.currentTarget;
    let selfClass = self.getAttribute("href");
    let currentElement = document.querySelector(
      `.left-menu a[href="${selfClass}"]`
    );
    let currentPolygon = self.querySelectorAll("polygon");
    let currentPath = self.querySelectorAll("path");
    if (currentPolygon) currentPolygon.forEach((el) => (el.style.cssText = ``));
    if (currentPath) currentPath.forEach((el) => (el.style.cssText = ``));
    currentElement.classList.remove("active");
  });
});

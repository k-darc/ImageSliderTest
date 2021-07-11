class Gallery {
  constructor(id, slides) {
  
    this.slides  = slides || [];
    this.total   = this.slides.length;
    this.curr    = 0;
    this.EL      = document.querySelector(id);
    this.EL_area = this.EL.querySelector(".Gallery-area");
    this.EL_prev = this.EL.querySelector(".Gallery-prev");
    this.EL_next = this.EL.querySelector(".Gallery-next");
    this.EL_desc = this.EL.querySelector(".Gallery-desc");
    
    const NewEL = (tag, prop) => Object.assign(document.createElement(tag), prop);
    
    // Preload images
    this.ELs_items = this.slides.reduce((DF, item) => (DF.push(NewEL("img", item)), DF), []);
    this.EL_area.append(...this.ELs_items);

    // Events
    this.EL_prev.addEventListener("click", () => this.prev());
    this.EL_next.addEventListener("click", () => this.next());
    
    // Init
    this.anim();
  }

  // Methods:

  anim() {
    this.curr = this.curr < 0 ? this.total - 1 : this.curr >= this.total ? 0 : this.curr;
    this.ELs_items.forEach((EL, i) => EL.classList.toggle("is-active", i === this.curr));
    this.EL_desc.textContent = this.slides[this.curr].alt;
  }

  prev() {
    this.curr -= 1;
    this.anim();
  }

  next() {
    this.curr += 1;
    this.anim();
  }
}


// Use like:
new Gallery("#gallery-one", [
  {alt: "caption 1", src: "img/image-0.jpg"},
  {alt: "caption 2!", src: "img/image-1.jpg"},
  {alt: "caption 3?", src: "img/image-2.jpg"},
  {alt: "caption 4?", src: "img/image-4.jpg"},
]);
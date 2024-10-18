class ViewObserver {
  private observer: IntersectionObserver;
  private settings: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      this.settings,
    );
  }

  public observe() {
    const elements = [...document.getElementsByClassName("animateOnView")];
    elements.forEach((element) => this.observer.observe(element));
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        this.observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }
}
export default ViewObserver;

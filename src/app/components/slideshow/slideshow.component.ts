import { AfterViewInit, Component, OnInit } from "@angular/core";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
@Component({
  selector: "app-slideshow",
  templateUrl: "./slideshow.component.html",
  styleUrls: ["./slideshow.component.scss"],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  public swiper: Swiper;
  constructor() {}

  ngAfterViewInit(): void {
    this.swiper = new Swiper(".swiper-container", {
      // Optional parameters
      // direction: "vertical",
      loop: true,
    });
  }

  ngOnInit(): void {}

  swipernext() {
    this.swiper.slideNext();
  }
  swiperprev() {
    this.swiper.slidePrev();
  }
}

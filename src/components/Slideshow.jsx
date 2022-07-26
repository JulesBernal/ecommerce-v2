import React from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Slideshow() {
  const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    // autoplay:'true',
    // loop: true,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  return (
    <div>Slideshow
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class ="slideFig" src="ships/galley.webp" alt="Galley-La Ship from One Piece"/></div>
          <div class="swiper-slide">
            <img class ="slideFig" src="fruits/devilFruit.webp" alt="An assortment of Devil fruit from One Piece"/></div>
          <div class="swiper-slide">
            <img class ="slideFig" src="ships/yontamaria.webp" alt="Yonta Maria Ship from One Piece"/></div>
          <div class="swiper-slide">
            <img class ="slideFig" src="ships/treasure.jpg" alt="Treasure from One Piece"/></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  )
}

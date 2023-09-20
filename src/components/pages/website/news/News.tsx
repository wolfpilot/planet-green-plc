"use client"

import { Swiper, SwiperSlide, SwiperProps } from "swiper/react"
import { Pagination } from "swiper/modules"

// Types
import { Props } from "./types"

// Components
import Container from "@components/layout/Container/Container"
import Section from "@components/layout/Section/Section"

// Styles
import "swiper/css"
import "swiper/css/pagination"

import * as S from "./styles"
import { breakpoints } from "@styles/utils/mediaQueries"

// Setup
const swiperConfig: SwiperProps = {
  draggable: true,
  pagination: {
    clickable: true,
  },
  modules: [Pagination],
  className: "mySwiper",
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    [breakpoints.S]: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    [breakpoints.L]: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
  },
}

const News: React.FC<Props> = ({ tagline, title, items }) => {
  if (!title || !items?.length) return null

  return (
    <Section title={title} tagline={tagline}>
      <Container>
        <S.SliderWrapper>
          <Swiper {...swiperConfig}>
            {items.map((item, index) => {
              if (!item.id || !item.image?.src || !item.title) return null

              return (
                <SwiperSlide key={index}>
                  <S.SlideLink href={`/news/${item.id}`}>
                    <S.SlideImageWrapper>
                      <S.SlideImage {...item.image} />
                    </S.SlideImageWrapper>

                    <S.SlideContent>
                      <S.SlideTitle>{item.title}</S.SlideTitle>
                      <S.SlideCta>{`Read more ->`}</S.SlideCta>
                    </S.SlideContent>
                  </S.SlideLink>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </S.SliderWrapper>
      </Container>
    </Section>
  )
}

export default News

<template>
<!-- 객실안내 -->
<div>
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
      <div class="container py-[120px]">
        <div class="flex flex-col justify-items-center items-center">
            <div>
                <span class="howard-main-title">객실 안내</span>
            </div>
            <div class="mt-[24px]">
                <p class="howard-sub-title">
                    하워드존슨 인천공항이 준비한 402개의 세련되고 모던한 객실에서
                    행복한 여유를 즐기세요.
                </p>
            </div>
        </div>
        <!-- 그리드 -->
        <div class="flex justify-center items-center mt-[80px]">
          <div class="w-full grid grid-cols-2 gap-3">
            <!-- 사진 -->
            <div
              v-for="(item, index) in guestroomDatas"
              :key="index"
              class="overflow-hidden"
              @mouseover="setGuestroomImgShow(index, true)"
              @mouseleave="setGuestroomImgShow(index, false)"
            >
              <div class="relative w-full h-full">
                <img
                  v-if="index == 0"
                  :src="item.imgsrc"
                  class="w-full h-full duration-75"
                  :class="{ 'scale-110': isGuestroomImg0Show }"
                />
                <img
                  v-else-if="index == 1"
                  :src="item.imgsrc"
                  class="w-full h-full duration-75"
                  :class="{ 'scale-110': isGuestroomImg1Show }"
                />
                <img
                  v-else-if="index == 2"
                  :src="item.imgsrc"
                  class="w-full h-full duration-75"
                  :class="{ 'scale-110': isGuestroomImg2Show }"
                />
                <img
                  v-else-if="index == 3"
                  :src="item.imgsrc"
                  class="w-full h-full duration-75"
                  :class="{ 'scale-110': isGuestroomImg3Show }"
                />

                <div
                  class="
                    absolute
                    w-full
                    h-[30%]
                    bottom-0
                    left-0
                    bg-black
                    opacity-50
                    z-0
                  "
                ></div>
                <div
                  class="
                    absolute
                    flex flex-row
                    justify-between
                    items-center
                    px-4
                    w-full
                    h-[30%]
                    bottom-0
                    left-0
                    z-10
                  "
                >
                  <div
                    class=""
                  >
                    <div class="text-white">
                      <div class="underline underline-offset-[12px]">
                          <span class="noto-sans-bold text-[18px] text-white tracking-[-0.9px]">{{ item.title }}</span>
                      </div>
                      <div class="mt-[16px]">
                          <span class="text-[14px] text-white tracking-[-0.7px]">{{ item.content }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="">
                    <span
                      class="cursor-pointer"
                      @click="goGuestroomDetail(item.idx)"
                    >
                      <img
                        src="~/assets/images/go-info.svg"
                        class="w-[24px] h-[24px]"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="howard-contents lg:hidden w-full">
        <div class="w-full pt-8 pb-[50px] px-[12px]">
            <div class="w-full flex flex-col">
                <div class="w-full flex justify-center items-center mb-2">
                    <span class="howard-main-title-mobile">객실안내</span>
                </div>
                <div class="w-full flex justify-center items-center">
                    <div class="flex flex-col items-center space-y-[4px]">
                        <p class="howard-sub-title-mobile">하워드존슨 인천공항이 준비한 402개의 세련되고 모던한</p>
                        <p class="howard-sub-title-mobile">객실에서 행복한 여유를 즐기세요.</p>
                    </div>
                </div>

              <!-- 캐러셀 슬라이드 -->
              <div class="w-full pt-6">
                <VueSlickCarousel v-bind="carouselSettings">
                  <div v-for="(item, index) in guestroomDatas" :key="index" class="w-full px-[4px]">
                    <!-- <img :src="item.imgsrc" class="w-full h-full" /> -->
                    <div class="relative w-full">
                          <div class="w-full top-0 left-0">
                              <img :src="item.imgsrc" />
                          </div>
                          
                          <div class="absolute w-full h-[40%] bottom-0 left-0 bg-black opacity-50 py-[18px] px-4 z-0">
                              
                          </div>
                          <div class="absolute w-full h-[40%] bottom-0 left-0 py-[18px] px-4 z-10">
                              <div class="w-full h-full flex justify-between items-center">
                                  <div class="">
                                      <div class="w-full underline underline-offset-[6px] text-white">
                                          <span class="text-[12px] text-white tracking-[-0.7px]">
                                              {{item.title}}
                                          </span>
                                      </div>
                                      <div class="w-full text-[7px] mt-[6px]">
                                          <span class="noto-sans-thin text-white tracking-[-0.5px]">
                                            {{item.content}}
                                          </span>
                                      </div>
                                  </div>
                                  <div class="hover:cursor-pointer" @click="goGuestroomDetail(item.idx)">
                                      <img
                                          src="~/assets/images/go-info.svg"
                                          class="w-[16px] h-[16px]"
                                          alt=""
                                      />
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
                </VueSlickCarousel>
              </div>
            </div>
        </div>
    </div>
</div>        
</template>

<script>
import Vue from "vue";

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default Vue.extend({
    data() {
        return {
            //객실
            guestroomDatas: [],
            isGuestroomImg0Show: false,
            isGuestroomImg1Show: false,
            isGuestroomImg2Show: false,
            isGuestroomImg3Show: false,

            //캐러셀 셋팅
            carouselSettings: {
              "dots": true,
              "dotsClass": "slick-dots custom-dot-class",
              //"edgeFriction": 0.35,
              "infinite": true,
              "speed": 500,
              "slidesToScroll": 1,
              "arrows": false,
              "centerMode": true,
              "centerPadding": '14px',
              "slidesToShow": 1,

              //반응형 너비에 따른 배치 설정
              responsive: [
                {
                  breakpoint: 1018,
                  settings: {
                    "dots": true,
                    "dotsClass": "slick-dots custom-dot-class",
                    "infinite": true,
                    "speed": 500,
                    "slidesToScroll": 1,
                    "arrows": false,
                    // "centerMode": true,
                    // "centerPadding": '14px',
                    "slidesToShow": 2,
                  }
                },
                {
                  breakpoint: 540,
                  settings: {
                    "dots": true,
                    "dotsClass": "slick-dots custom-dot-class",
                    "infinite": true,
                    "speed": 500,
                    "slidesToScroll": 1,
                    "arrows": false,
                    "centerMode": true,
                    "centerPadding": '14px',
                    "slidesToShow": 1,
                  }
                },
              ],
          }
        }
    },
    components: { VueSlickCarousel },
    created() {
        //객실
        this.guestroomDatas = [
            {idx: 1, title: "슈페리어", content: "더블 룸, 트윈 룸", imgsrc: require("~/assets/images/guestroom/superior/double/01.jpg")},
            {idx: 2, title: "디럭스", content: "패밀리 트윈 룸", imgsrc: require("~/assets/images/guestroom/deluxe/02.jpg")},
            {idx: 3, title: "프리미어", content: "패밀리 더블 룸", imgsrc: require("~/assets/images/guestroom/premier/03.jpg")},
            {idx: 4, title: "스위트", content: "호조 프리미어 스위트룸, 호조 클럽 스위트룸", imgsrc: require("~/assets/images/guestroom/sweet/premier/02.jpg")}
        ];
    },
    methods: {
        setGuestroomImgShow(idx, isShow) {
            if (idx == 0) {
                this.isGuestroomImg0Show = isShow;
            } else if (idx == 1) {
                this.isGuestroomImg1Show = isShow;
            } else if (idx == 2) {
                this.isGuestroomImg2Show = isShow;
            } else if (idx == 3) {
                this.isGuestroomImg3Show = isShow;
            }
        },
        //객실 상세 이동
        goGuestroomDetail(idx) {
            if (idx == 1) {
                this.$router.push({ path: "/guestroom/detail?roomType=superior" });
            } else if (idx == 2) {
                this.$router.push({ path: "/guestroom/detail?roomType=deluxe" });
            } else if (idx == 3) {
                this.$router.push({ path: "/guestroom/detail?roomType=premier" });
            } else if (idx == 4) {
                this.$router.push({ path: "/guestroom/detail?roomType=sweet" });
            }
        },
    }
})
</script>

<style>
@font-face {
    font-family: "NotoSansBold";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Bold.otf) format("truetype");
}
@font-face {
    font-family: "NotoSansRegular";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Regular.otf) format("truetype");
}
@font-face {
    font-family: "NotoSansLight";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Light.otf) format("truetype");
}
.noto-sans-bold {
    font-family: "NotoSansBold";
}
.noto-sans-regular {
    font-family: "NotoSansRegular";
}
.noto-sans-light {
    font-family: "NotoSansLight";
}

/* // scoped */
.custom-dot-class > li {
  width: 5px;
}

.slick-dots li.slick-active button:before{
  color: #EE792F;
  opacity:1;
}

.slick-dots li button:before {
  /* color: orange; */
  color: #EE792F;
  opacity:0.5;
  width: 0px;
  height: 0px;
}
.slick-dots{
  padding-right: 0.6%;
}

/* ant-carousel */
/* .ant-carousel >>> .slick-dots {
  height: 12px;
}
.ant-carousel >>> .slick-slide img {
  display: block;
  width: 100%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -17px;
}
.ant-carousel >>> .slick-thumb li {
  width: 12px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}

.slick-normal {
    background-color: orange;
    
}
.slick-active > a > div {
    background-color: #EE792F;
} */
</style>

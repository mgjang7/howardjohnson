<template>
<div>
<!-- 호텔소개 -->
    <!-- web -->
    <div class="hidden lg:block w-full howard-contents">
        <div class="w-full">
            <!-- <div class="w-full pt-[120px] pb-[310px] bg-[#FFF6F2] mb-[610px]"> -->
            <div class="w-full pt-[120px] pb-[310px] bg-[#FFF6F2] mb-[596px]">
                <div class="flex flex-col justify-items-center items-center">
                    <div>
                        <span class="howard-main-title">호텔 소개</span>
                    </div>
                    <div class="mt-[24px]">
                        <p class="howard-sub-title">
                            행복한 순간을 함께할 하워드존슨 바이 윈덤 인천 에어포트 호텔에 오신 것을 환영합니다.
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center px-4">
                <!-- 소개 타이틀, 이미지 -->
                <div class="relative container-box pb-[120px]">
                    <!-- 캐러셀 슬라이드 -->
                    <div id="aboutHotelWeb" class="absolute w-full top-[-79%]">
                        <!-- :arrows="true" -->
                        <VueSlickCarousel v-bind="carouselSettings">
                            <div v-for="(item, index) in mainImgDatas" :key="index" class="w-full">
                                <img :src="item.imgsrc" class="w-full h-full" />
                            </div>
                        </VueSlickCarousel>
                    </div>
                    <!-- 캐러셀 슬라이드 - old -->
                    <!-- <div id="web" class="absolute w-full top-[-79%]">
                        <a-carousel arrows class="w-full" dots="false">
                            <div
                                slot="prevArrow"
                                slot-scope="props"
                                class="custom-slick-arrow"
                                style="left: 24px;zIndex: 1"
                            >
                                <img src="~/assets/images/arrow_right_whiteline_48.svg" alt="" class="rotate-180">
                            </div>
                            <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 24px">
                                <img src="~/assets/images/arrow_right_whiteline_48.svg" alt="" class="">
                            </div>

                            <div v-for="(item, index) in mainImgDatas" :key="index" class="w-full">
                                <img :src="item.imgsrc" class="w-full" />
                            </div>
                        </a-carousel>
                    </div> -->
                    <div class="flex flex-row">
                        <!-- 텍스트 -->
                        <div class="flex grow basis-[50%] h-[400px] ">
                            <div class="flex flex-col justify-end">
                                <div class="w-[524px]">
                                    <span class="noto-sans-bold text-[24px] tracking-[-1.2px]">세계 최대 호텔그룹 윈덤의 하워드존슨</span>
                                </div>

                                <div class="w-[524px] mt-[30px] mb-[30px] border-b border-black">

                                </div>

                                <div class="w-[524px]">
                                    <div>
                                        <p class="text-[16px] tracking-[-0.8px]">
                                            전 세계 8,000개 이상의 호텔을 운영하고 있는 세계 최대 호텔 기업,<br>
                                            윈덤 호텔 그룹의 브랜드 중 하나인 하워드 존슨 호텔이 동북아의 허브<br>
                                            인천국제공항 옆에 자리 잡았습니다.
                                        </p>
                                    </div>
                                    <div class="mt-[30px]">
                                        <p class="text-[16px] tracking-[-0.8px]">
                                            하워드 존슨 인천 에어포트는 여유로운 공간, 품격 있고 세심한 서비스,<br>
                                            다양한 편의 시설을 제공하며 모든 순간이 보다 의미 있고 기억에 남는<br>
                                            추억이될 수 있도록 노력합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 이미지 -->
                        <div class="flex grow basis-[50%] h-[400px]">
                            <img src="~/assets/images/abouthotel/about-hotel-01.jpg" alt="" class="w-full h-full">
                        </div>
                    </div>
                    <div class="flex flex-row mt-[100px]">
                        <!-- 이미지 -->
                        <div class="flex grow basis-[50%] h-[400px]">
                            <img src="~/assets/images/abouthotel/about-hotel-02.jpg" alt="" class="w-full h-full">
                        </div>
                        <!-- 텍스트 -->
                        <div class="flex grow basis-[50%] h-[400px]">
                            <div class="w-full flex flex-row justify-end items-end">
                                <div class="flex flex-col">
                                    
                                    <div class="w-[524px]">
                                        <span class="noto-sans-bold text-[24px] tracking-[-1.2px]">행복한 추억이 쌓이는 해피! 하워드존슨</span>
                                    </div>

                                    <div class="w-[524px] mt-[30px] mb-[30px] border-b border-black">

                                    </div>

                                    <div class="w-[524px]">
                                        <div>
                                            <p class="text-[16px] tracking-[-0.8px]">
                                                즐겁고 설레는 여행부터 함께 기쁨을 나누고 축하하는 특별한 날, 일 상에서 지친<br>
                                                몸과 마음을 치유할 휴식, 업무를 위한 출장까지.
                                            </p>
                                        </div>
                                        <div class="mt-[30px]">
                                            <p class="text-[16px] tracking-[-0.8px]">
                                                멋진 라이프스타일이 만들어지는 호텔, 하워드 존슨 인천 에어포트에<br>
                                                머무시는 동안 편안하면서도 차별화된 서비스를 경험하시기 바랍니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                 
            </div>
             <!-- 층별 안내도 -->
            <div class="w-full bg-[#FFF6F2] flex justify-center px-4">
                <div class="container-box pt-32">
                    <div class="">
                        <div class="flex flex-col justify-items-center items-center">
                            <div class="howard-main-title">층별안내도</div>
                            <div class="w-full py-32">
                                <div class="w-full h-full bg-white">
                                    <img src="~/assets/images/abouthotel/floor-guide.png" alt="" class="w-full h-full">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>

    <!-- mobilie -->
    <div class="lg:hidden w-full howard-contents">
        <div class="w-full flex flex-col">
            <!-- 메인 타이틀 -->
            <div class="w-full pt-8 pb-6 px-4">
                <div class="w-full flex justify-center mb-2">
                    <span class="howard-main-title-mobile">
                        호텔 소개
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        행복한 순간을 함께할 하워드존슨 바이 윈덤 인천 에어포트 호텔에 오신 것을 환영합니다.
                    </p>
                </div>
            </div>
            <!-- 캐러셀 슬라이드 이미지 -->
            <div id="aboutHotelMobile" class="w-full">
                <VueSlickCarousel v-bind="mobileCarouselSettings">
                    <div v-for="(item, index) in mainImgDatas" :key="index" class="w-full">
                        <img :src="item.imgsrc" class="w-full h-full" />
                    </div>
                </VueSlickCarousel>

                <!-- <a-carousel arrows dots-class="slick-dots slick-thumb" class="w-full">
                    <a slot="customPaging" slot-scope="props" class="">
                        <div class="h-2 w-2 rounded-full slick-normal"></div>
                    </a>
                    <div v-for="(item, index) in mainImgDatas" :key="index" class="w-full">
                        <img :src="item.imgsrc" class="w-full" />
                    </div>
                </a-carousel> -->
            </div>
            <!-- 소개 타이틀, 이미지 -->
            <div class="w-full px-4 py-8">
                <div class="w-full">
                    <div class="w-full flex justify-start">
                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]">
                            세계 최대 호텔그룹 윈덤의 하워드존슨
                        </span>
                    </div>

                    <div class="w-full howard-info-border-b my-2"></div>

                    <div class="w-full mb-[30px]">
                        <span class="noto-sans-light text-[12px] tracking-[-0.6px]">
                            전 세계 8,000개 이상의 호텔을 운영하고 있는 세계 최대 호텔 기업, 윈덤 호텔 그룹의 브랜드 중 하나인 하워드 존슨 호텔이 동북아의 허브 인천국제공항 옆에 자리 잡았습니다.
                        </span>
                    </div>
                    <div class="w-full mb-4">
                        <span class="noto-sans-light text-[12px] tracking-[-0.6px]">
                            하워드 존슨 인천 에어포트는 여유로운 공간, 품격 있고 세심한 서비스, 다양한 편의 시설을 제공하며 모든 순간이 보다 의미 있고 기억에 남는 추억이될 수 있도록 노력합니다.
                        </span>
                    </div>
                    <!-- 이미지1 -->
                    <div class="w-full mb-8">
                        <img src="~/assets/images/abouthotel/about-hotel-01.jpg" alt="" class="w-full h-full">
                    </div>
                    <div class="w-full flex justify-end">
                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]">
                            행복한 추억이 쌓이는 해피! 하워드존슨
                        </span>
                    </div>
                    <div class="w-full howard-info-border-b my-2"></div>

                    <div class="w-full text-right mb-[30px]">
                        <span class="noto-sans-light text-[12px] tracking-[-0.6px]">
                            즐겁고 설레는 여행부터 함께 기쁨을 나누고 축하하는 특별한 날,<br>일상에서 지친 몸과 마음을 치유할 휴식, 업무를 위한 출장까지. 
                        </span>
                    </div>
                    <div class="w-full text-right mb-4">
                        <span class="noto-sans-light text-[12px] tracking-[-0.6px]">
                            멋진 라이프스타일이 만들어지는 호텔,<br> 하워드 존슨 인천 에어포트에 머무시는 동안<br>편안하면서도 차별화 된 서비스를 경험하시기 바랍니다.
                        </span>
                    </div>
                    <!-- 이미지2 -->
                    <div class="w-full">
                        <img src="~/assets/images/abouthotel/about-hotel-02.jpg" alt="" class="w-full h-full">
                    </div>
                </div>
            </div>

            <!-- 층별 안내도 -->
            <div class="w-full flex justify-center bg-[#FFF6F2] px-4 pb-8">
                <div class="w-full">
                    <div class="w-full flex justify-center pt-8 pb-6">
                        <div>
                            <span class="noto-sans-bold text-[14px] tracking-[-0.7px]">
                                층별안내도
                            </span>
                        </div>
                    </div>
                    <div class="w-full">
                        <img src="~/assets/images/abouthotel/floor-guide.png" alt="" class="w-full h-full">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
//import TopMenuComp from "@/components/TopMenu.vue";
//import FooterComp from "@/components/Footer.vue";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {    
    data() {
        return {
            //캐러셀 셋팅
            carouselSettings: {
              "dots": true,
              "dotsClass": "slick-dots custom-dot-class",
              "infinite": true,
              "speed": 500,
              "slidesToScroll": 1,
              "arrows": true,
              "slidesToShow": 1
            },
            mobileCarouselSettings: {
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "infinite": true,
                "speed": 500,
                "slidesToScroll": 1,
                "arrows": false,
                "slidesToShow": 1
            }
        }
    },
    components: { VueSlickCarousel },
    created() {
        this.mainImgDatas = [
            {idx: 1, imgsrc: require("~/assets/images/abouthotel/abouthotel-main-01.jpg")},
            {idx: 2, imgsrc: require("~/assets/images/abouthotel/abouthotel-main-02.jpg")},
            {idx: 3, imgsrc: require("~/assets/images/abouthotel/abouthotel-main-03.jpg")},
            {idx: 4, imgsrc: require("~/assets/images/abouthotel/abouthotel-main-04.jpg")},
            {idx: 5, imgsrc: require("~/assets/images/abouthotel/abouthotel-main-05.jpg")},
            {idx: 6, imgsrc: require("~/assets/images/abouthotel/abouthotel-main-06.jpg")},
            
        ];
    },

    // components: {
    //     TopMenuComp,
    //     FooterComp
    // },
}
// scoped
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


#aboutHotelWeb .custom-dot-class > li {
  width: 8px;
}

#aboutHotelWeb .slick-dots li.slick-active button:before{
  color: white;
  opacity:1;
}

#aboutHotelWeb .slick-dots li button:before {
  color: white;
  opacity:0.5;
}

#aboutHotelWeb .slick-dots {
    bottom: 21px;
}

#aboutHotelWeb .slick-prev {
    z-index: 1;
    margin-left: 49px;
    background: url("~/assets/images/arrow_right_whiteline_48.svg");
    width: 48px;
    height: 48px;    
    top: 46.4%;
    transform: rotate(180deg);
    
}
#aboutHotelWeb .slick-prev::before {
    display: none;
}

#aboutHotelWeb .slick-next {
    margin-right: 49px;
    background: url("~/assets/images/arrow_right_whiteline_48.svg");
    width: 48px;
    height: 48px;
}
#aboutHotelWeb .slick-next::before {
    display: none;
}



#aboutHotelMobile .custom-dot-class > li {
  width: 5px;
}

#aboutHotelMobile .slick-dots li.slick-active button:before{
  color: white;
  opacity:1;
}

#aboutHotelMobile .slick-dots li button:before {
  color: white;
  opacity:0.5;
}

#aboutHotelMobile .slick-dots {
    bottom: 11px;
}

/* web 캐러셀 */
/* #web .ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

#web .ant-carousel .slick-prev{
    width: 48px;
    height: 48px;
}
#web .ant-carousel .slick-next{
    width: 48px;
    height: 48px;
} */

/* mobile 캐러셀 */
/* #mobile .ant-carousel >>> .slick-thumb {
  bottom: 20px;
}

#mobile .ant-carousel >>> .slick-thumb li {
  width: 12px;
}

#mobile .slick-normal {
    background-color: white;    
}

#mobile .slick-active > a > div {
    background-color: #EE792F; 
} */
</style>

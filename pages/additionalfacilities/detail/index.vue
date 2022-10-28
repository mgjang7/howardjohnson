<template>
<div>
    <!-- 부대시설 - 상세 -->
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box">
                <div class="pt-[120px] pb-[80px]">
                    <div class="flex flex-col justify-items-center items-center">
                        <div class="">
                            <span v-if="facilityType == 'megastar'" class="howard-main-title">
                                메가스타
                            </span>
                            <span v-else-if="facilityType == 'theisland7'" class="howard-main-title">
                                더 아일랜드 7
                            </span>
                        </div>
                        <div class="mt-[24px]">
                            <p class="howard-sub-title">
                                숙련된 미팅 전문가들이 제공하는 최상의 서비스, 최첨단 음향/영상시설을 갖춘 최적의 공간
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 캐러셀 슬라이드 이미지 -->
                <!-- 메가스타 -->
                <div v-show="facilityType == 'megastar'" id="web" class="w-full">
                     <VueSlickCarousel v-bind="carouselSettings">
                        <div v-for="(item, index) in megastarList" :key="index" class="w-full">
                            <img :src="item.imgsrc" class="w-full h-full" />
                        </div>
                    </VueSlickCarousel>
                </div>
                <!-- 더 아일랜드 7 -->
                <div v-show="facilityType == 'theisland7'" id="web" class="w-full">
                     <VueSlickCarousel v-bind="carouselSettings">
                        <div v-for="(item, index) in theisland7List" :key="index" class="w-full">
                            <img :src="item.imgsrc" class="w-full h-full" />
                        </div>
                    </VueSlickCarousel>
                </div>
                <!-- 상세정보 -->
                <div class="flex items-center pt-[120px] pb-[40px] w-full">
                    <div class="basis-[15%]">
                        <span class="howard-main-title">
                            상세정보
                        </span>
                    </div>
                    <div class="basis-[85%] w-full howard-info-border-b2">

                    </div>    
                </div>
                <div class="flex flex-row w-full pb-[80px] text-[14px] tracking-[-0.7px]">
                    <div class="basis-[50%] flex flex-col w-full h-full space-y-[8px]">
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    이용시간
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <span class="">
                                    1시간
                                </span>
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    면적
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <span class="">
                                    323m2
                                </span>
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    편의시설
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <span class="">
                                    빔프로젝트, 마이크, 와이파이, 다과, 뷔페
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="basis-[50%] flex flex-col w-full h-full space-y-[8px]">
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    수용인원
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <span class="">
                                    최대 350명
                                </span>
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    테이블배치
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <span class="">
                                    라운드, U자형, 할로우, 스쿨, 보드룸, 극장식, 칵테일
                                </span>
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    이용문의
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <span class="">
                                    032-722-0055 / dofb@hojoincheon.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>       
                <!-- 메가스타 수용인원 정보 이미지 -->
                <div v-show="facilityType == 'megastar'" class="w-full pb-[120px]">
                    <img src="~/assets/images/additionalfacilities/megastar/capacity.jpg" alt="" class="w-full h-full">
                </div>  
                <!-- 이용안내 -->
                <div class="flex justify-between items-center w-full pb-[40px]">
                    <div class="basis-[85%] w-full howard-info-border-b2">

                    </div>
                    <div class="flex justify-end basis-[15%]">
                        <span class="howard-main-title">
                            이용안내
                        </span>
                    </div>
                </div>
                <div class="w-full flex justify-start items-center p-[40px] bg-[#FAFAFA] mb-[120px]">
                    <div class="space-y-[5px] text-[14px] tracking-[-0.7px]">
                        <p>- 식사 및 패키지는 예약 문의를 주시면, 견적서와 함께 알려드리겠습니다.</p> 
                        <p>- 예약일로 부터 14일 전까지의 기간에 취소가 발생할 경우 보증금 환불이 불가합니다.</p> 
                        <p>- 사진과 실제 이용 공간은 호텔 사정에 따라 다를 수 있으며, 이로 인한 환불은 불가합니다.</p> 
                        <p>- 보증금 결제 완료 후 취소 요청은 호텔의 취소 및 환불 규정에 따라 예약취소 및 보증금 환불이 가능합니다.</p> 
                        <p>- 노쇼(No-Show: 예약한 장소를 이용하지 않은 경우)의 경우 결제 금액이 환불되지 않습니다.</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- mobilie -->
    <div class="howard-contents lg:hidden w-full">
        <div class="w-full px-4">
            <!-- 메인 타이틀 -->
            <div class="w-full pt-8 pb-6">
                <div class="w-full flex justify-center mb-2">
                    <span v-if="facilityType == 'megastar'" class="howard-main-title-mobile">
                        메가스타
                    </span>
                    <span v-else-if="facilityType == 'theisland7'" class="howard-main-title-mobile">
                        더 아일랜드 7
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        숙련된 미팅 전문가들이 제공하는 최상의 서비스, 최첨단 음향/영상시설을 갖춘 최적의 공간
                    </p>
                </div>
            </div>
            <!-- 캐러셀 슬라이드 이미지 -->
            <!-- 메가스타 -->
            <div v-show="facilityType == 'megastar'" id="mobile" class="w-full mb-6">
                <VueSlickCarousel v-bind="mobileCarouselSettings">
                    <div v-for="(item, index) in megastarList" :key="index" class="w-full">
                        <img :src="item.imgsrc" class="w-full h-full" />
                    </div>
                </VueSlickCarousel>
            </div>
            <!-- 더 아일랜드 7 -->
            <div v-show="facilityType == 'theisland7'" id="mobile" class="w-full mb-6">
                <VueSlickCarousel v-bind="mobileCarouselSettings">
                    <div v-for="(item, index) in theisland7List" :key="index" class="w-full">
                        <img :src="item.imgsrc" class="w-full h-full" />
                    </div>
                </VueSlickCarousel>
            </div>
            <div class="w-full flex justify-center items-center mb-4">
                <div class="w-full flex justify-center items-center pr-[22px]">
                    <div class="w-full howard-info-border-b">

                    </div>
                </div>
                <div class="w-[108px] flex justify-center items-center text-[20px] font-bold">
                    <span class="w-[80px] howard-main-title-mobile">상세정보</span>
                </div>
                <div class="w-full flex justify-center items-center pl-[22px]">
                    <div class="w-full howard-info-border-b">

                    </div>
                </div>
            </div>
            <div class="w-full space-y-[16px] mb-8 text-[12px] tracking-[-0.6px]">
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-medium">
                            이용시간
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <span class="noto-sans-light">
                            1시간
                        </span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-medium">
                            수용인원
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <span class="noto-sans-light">
                            최대 350명
                        </span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-medium">
                            면적
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <span class="noto-sans-light">
                            323m2
                        </span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-medium">
                            테이블배치
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <span class="noto-sans-light">
                            라운드, U자형, 할로우, 스쿨, 보드룸, 극장식, 칵테일
                        </span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-medium">
                            편의시설
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <span class="noto-sans-light">
                            빔프로젝트, 마이크, 와이파이, 다과, 뷔페
                        </span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-medium">
                            이용문의
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <span class="noto-sans-light">
                            032-722-0055 / dofb@hojoincheon.com
                        </span>
                    </div>
                </div>
            </div>
            <!-- 메가스타 수용인원 정보 이미지 -->
            <div v-show="facilityType == 'megastar'" class="w-full mb-8">
                <img src="~/assets/images/additionalfacilities/megastar/capacity.jpg" alt="" class="w-full h-full">
            </div>
            <div class="w-full flex justify-center items-center mb-4">
                <div class="w-full flex justify-center items-center pr-[22px]">
                    <div class="w-full howard-info-border-b">

                    </div>
                </div>
                <div class="w-[108px] flex justify-center items-center text-[20px] font-bold">
                    <span class="w-[80px] howard-main-title-mobile">이용안내</span>
                </div>
                <div class="w-full flex justify-center items-center pl-[22px]">
                    <div class="w-full howard-info-border-b">

                    </div>
                </div>
            </div>
            <div class="w-full p-4 bg-[#FAFAFA] mb-8">
                <div class="w-full text-[12px] tracking-[-0.6px] space-y-[8px]">
                    <p class="noto-sans-light">
                        - 식사 및 패키지는 예약 문의를 주시면, 견적서와 함께 알려드리겠습니다.
                    </p>
                    <p class="noto-sans-light">
                        - 예약일로 부터 14일 전까지의 기간에 취소가 발생할 경우 보증금 환불이 불가합니다.
                    </p>
                    <p class="noto-sans-light">
                        - 사진과 실제 이용 공간은 호텔 사정에 따라 다를 수 있으며, 이로 인한 환불은 불가합니다.
                    </p>
                    <p class="noto-sans-light">
                        - 보증금 결제 완료 후 취소 요청은 호텔의 취소 및 환불 규정에 따라 예약취소 및 보증금 환불이 가능합니다.
                    </p>
                    <p class="noto-sans-light">
                        - 노쇼(No-Show: 예약한 장소를 이용하지 않은 경우)의 경우 결제 금액이 환불되지 않습니다.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>    
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {    
    data() {
        return {
            slide: 0,
            sliding: null,
            cards: null,
            list: null,

            megastarList: null,
            theisland7List: null,

            facilityType: "",

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
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
    mounted() {
        
    },
    watch:{
        //route 파라미터 변경 감지
        $route() {
            this.facilityType = this.$route.query.facilityType;
        }
    },
    created() {
        this.facilityType = this.$route.query.facilityType;

        //메가스타
        this.megastarList = [
            {  
                imgsrc: require("~/assets/images/additionalfacilities/megastar/01.jpeg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/megastar/02.jpeg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/megastar/03.jpeg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/megastar/04.jpeg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/megastar/05.jpeg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/megastar/06.jpeg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/megastar/07.jpeg"), 
            },
        ];

        //더 아일랜드 7
        this.theisland7List = [
            {  
                imgsrc: require("~/assets/images/additionalfacilities/theisland7/01.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/theisland7/02.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/theisland7/03.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/theisland7/04.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/theisland7/05.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/theisland7/06.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/theisland7/07.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/additionalfacilities/theisland7/08.jpg"), 
            },
        ];

        this.list = [
            { title: "더 아일랜드 7", location: "3층", capacity: "최대 350명", area: "323m2", imgsrc: require("~/assets/images/additionalfacilities/background-mobile.png"), 
                content: "숙련된 미팅 전문가들이 제공하는 최상의 서비스, 최첨단 음향/영상시설을 갖춘 최 적의 공간 323m2 규모의 연회장 메가스타는 각종 회의, 다양한 이벤트, 가족 행사 등 여러 다양한 행사를 위한 최적의 공간을 제공합니다. 또한 행사의 목적 및 규모에 맞게 파티션을 설치해 효율적인 공간 활용이 가능하며, 최첨단 음향 및 영상 시설, 그리고 세계 최대 호텔 기업인 윈덤 그룹의 숙련된 미팅 전문가들이 제공하는 최상의 서비스와 음식은 어떤 행사라도 완벽하고 기억에 남는 경험을 안겨 드릴 것입니다."
            },
            { title: "메가스타", location: "3층", capacity: "최대 350명", area: "323m2", imgsrc: require("~/assets/images/additionalfacilities/background-mobile.png"), 
                content: "숙련된 미팅 전문가들이 제공하는 최상의 서비스, 최첨단 음향/영상시설을 갖춘 최 적의 공간 323m2 규모의 연회장 메가스타는 각종 회의, 다양한 이벤트, 가족 행사 등 여러 다양한 행사를 위한 최적의 공간을 제공합니다. 또한 행사의 목적 및 규모에 맞게 파티션을 설치해 효율적인 공간 활용이 가능하며, 최첨단 음향 및 영상 시설, 그리고 세계 최대 호텔 기업인 윈덤 그룹의 숙련된 미팅 전문가들이 제공하는 최상의 서비스와 음식은 어떤 행사라도 완벽하고 기억에 남는 경험을 안겨 드릴 것입니다."
            },
            { title: "데이즈 PDR", location: "3층", capacity: "최대 350명", area: "323m2", imgsrc: require("~/assets/images/additionalfacilities/background-mobile.png"), 
                content: "숙련된 미팅 전문가들이 제공하는 최상의 서비스, 최첨단 음향/영상시설을 갖춘 최 적의 공간 323m2 규모의 연회장 메가스타는 각종 회의, 다양한 이벤트, 가족 행사 등 여러 다양한 행사를 위한 최적의 공간을 제공합니다. 또한 행사의 목적 및 규모에 맞게 파티션을 설치해 효율적인 공간 활용이 가능하며, 최첨단 음향 및 영상 시설, 그리고 세계 최대 호텔 기업인 윈덤 그룹의 숙련된 미팅 전문가들이 제공하는 최상의 서비스와 음식은 어떤 행사라도 완벽하고 기억에 남는 경험을 안겨 드릴 것입니다."
            },
            { title: "비즈니스 센터", location: "3층", capacity: "최대 350명", area: "323m2", imgsrc: require("~/assets/images/additionalfacilities/background-mobile.png"), 
                content: "숙련된 미팅 전문가들이 제공하는 최상의 서비스, 최첨단 음향/영상시설을 갖춘 최 적의 공간 323m2 규모의 연회장 메가스타는 각종 회의, 다양한 이벤트, 가족 행사 등 여러 다양한 행사를 위한 최적의 공간을 제공합니다. 또한 행사의 목적 및 규모에 맞게 파티션을 설치해 효율적인 공간 활용이 가능하며, 최첨단 음향 및 영상 시설, 그리고 세계 최대 호텔 기업인 윈덤 그룹의 숙련된 미팅 전문가들이 제공하는 최상의 서비스와 음식은 어떤 행사라도 완벽하고 기억에 남는 경험을 안겨 드릴 것입니다."
            }
        ];
    },
}

</script>

<style>
#web .custom-dot-class > li {
  width: 8px;
}

#web .slick-dots li.slick-active button:before{
  color: white;
  opacity:1;
}

#web .slick-dots li button:before {
  color: white;
  opacity:0.5;
}

#web .slick-dots {
    bottom: 21px;
}

#web .slick-prev {
    z-index: 1;
    margin-left: 49px;
    background: url("~/assets/images/arrow_right_whiteline_48.svg");
    width: 48px;
    height: 48px;    
    top: 46.4%;
    transform: rotate(180deg);
    
}
#web .slick-prev::before {
    display: none;
}

#web .slick-next {
    margin-right: 49px;
    background: url("~/assets/images/arrow_right_whiteline_48.svg");
    width: 48px;
    height: 48px;
}
#web .slick-next::before {
    display: none;
}



#mobile .custom-dot-class > li {
  width: 5px;
}

#mobile .slick-dots li.slick-active button:before{
  color: white;
  opacity:1;
}

#mobile .slick-dots li button:before {
  color: white;
  opacity:0.5;
}

#mobile .slick-dots {
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
}    
#web .ant-carousel >>> .slick-dots {
  height: 24px;
}
#web .ant-carousel >>> .slick-dots li {
    width: 12px;
}
#web .slick-normal {
    background-color: white;    
    background-color: gray;
}
#web .slick-active > a > div {
    background-color: white;    
} */
/* mobile 캐러셀 */
/* #mobile .ant-carousel >>> .slick-thumb {
  bottom: 20px;
}

#mobile .ant-carousel >>> .slick-thumb li {
  width: 9px;
}

#mobile .slick-normal {
    background-color: gray;    
}

#mobile .slick-active > a > div {
    background-color: white; 
} */
</style>

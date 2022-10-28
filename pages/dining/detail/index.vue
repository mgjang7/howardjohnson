<template>
<div>
    <!-- 다이닝 - 상세 -->
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box">
                <div class="pt-[120px] pb-[80px]">
                    <div class="flex flex-col justify-items-center items-center">
                        <div class="">
                            <span v-if="diningType == 'risedine'" class="howard-main-title">
                                라이즈 앤 다인
                            </span>
                            <span v-else-if="diningType == 'daybreak'" class="howard-main-title">
                                데이브레이크
                            </span>
                        </div>
                        <div class="mt-[24px]">
                            <p v-if="diningType == 'risedine'" class="howard-sub-title">
                                세계 각국의 다양한 퓨전요리를 선보이는 올데이 다이닝 뷔페 레스토랑
                            </p>
                            <p v-if="diningType == 'daybreak'" class="howard-sub-title">
                                다양한 이색커피, 수제 생맥주, 세계 각국의 와인, 위스키
                            </p>
                        </div>
                    </div>
                </div>
                <!-- 캐러셀 슬라이드 이미지 -->
                <!-- 라이즈 앤 다인 -->
                <div v-show="diningType == 'risedine'" id="web" class="w-full">
                     <VueSlickCarousel v-bind="carouselSettings">
                        <div v-for="(item, index) in risedineList" :key="index" class="w-full">
                            <img :src="item.imgsrc" class="w-full h-full" />
                        </div>
                    </VueSlickCarousel>
                </div>
                <!-- 데이브레이크 -->
                <div v-show="diningType == 'daybreak'" id="web" class="w-full">
                     <VueSlickCarousel v-bind="carouselSettings">
                        <div v-for="(item, index) in daybreakList" :key="index" class="w-full">
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
                <div class="flex flex-row w-full text-[14px] tracking-[-0.7px] pb-[120px]">
                    <div class="basis-[50%] flex flex-col w-full h-full space-y-[8px]">
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    이용시간
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <div v-if="diningType === 'risedine'" class="w-full flex flex-col space-y-[6px]">
                                    <div class="">
                                        <span class="">
                                            - 조식 07:00 ~ 10:00 (라스트오더 09:30)
                                        </span>
                                    </div>
                                    <div class="">
                                        <span class="">
                                            - 런치 12:00 ~ 15:00 (라스트 오더 14:30)
                                        </span>
                                    </div>
                                    <div class="">
                                        <span class="">
                                            - 디너 18:00 ~ 22:00 (라스트 오더 21:30)
                                        </span>
                                    </div>
                                    <div class="">
                                        <span class="">
                                            - 룸서비스 12:00 ~ 22:00 (라스트 오더 21:30)
                                        </span>
                                    </div>
                                </div>
                                <div v-else-if="diningType === 'daybreak'" class="w-full flex flex-col space-y-[6px]">
                                    <div class="">
                                        <span class="">
                                            - 데이브레이크 커피숍 7:00 ~ 22:00
                                        </span>
                                    </div>
                                    <div class="">
                                        <span class="">
                                            - 데이브레이크 펍 18:00 ~ 22:00 (라스트 오더 21:30)
                                        </span>
                                    </div>
                                    <div class="">
                                        <span class="ml-[6px]">
                                               ※ 브레이크 타임 16:50~17:40
                                        </span>
                                    </div>
                                    <div class="">
                                        <span class="invisible">
                                               -
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%] invisible">
                                -
                            </div>
                            <div class="basis-[80%] invisible">
                                -
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    좌석수
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <span v-if="diningType === 'risedine'" class="">
                                    180석(최대 250명까지 수용가능)
                                </span>
                                <span v-else-if="diningType === 'daybreak'" class="">
                                    70석
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="basis-[50%] flex flex-col w-full h-full space-y-[8px]">
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    이용금액
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <div v-if="diningType === 'risedine'" class="w-full flex flex-col space-y-[6px]">
                                    <div class="">
                                        <span class="">
                                            - 조식뷔페 성인 32,000원, 소인 16,000원
                                        </span>
                                    </div>
                                    <div class="">
                                        <span class="ml-[6px]">
                                            ※ 소인 기준 만4세~12세 까지
                                        </span>
                                    </div>
                                    <div class="">
                                        <span class="ml-[6px]">
                                            ※ 48개월 미만, 최대 2인까지 무료
                                        </span>
                                    </div>
                                    <div class="invisible">
                                        -
                                    </div>
                                </div>
                                <div v-else-if="diningType === 'daybreak'" class="w-full flex flex-col space-y-[6px]">
                                    <div class="">
                                        <span class="">
                                            -
                                        </span>
                                    </div>
                                    <div class="">
                                        <span class="invisible">
                                            -
                                        </span>
                                    </div>
                                    <div class="">
                                        <span class="invisible">
                                            -
                                        </span>
                                    </div>
                                    <div class="invisible">
                                        -
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%] invisible">
                                -
                            </div>
                            <div class="basis-[80%] invisible">
                                -
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
                                    032-722-0055
                                </span>
                            </div>
                        </div>
                    </div>
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
                    <div v-if="diningType === 'risedine'" class="space-y-[5px] text-[14px] tracking-[-0.7px]">
                        <div class="w-full flex flex-col items-start space-y-[2px]">
                            <p>
                                - 런치, 디너 타임 이용시 단품메뉴 이용이 가능합니다.
                            </p>
                            <p>
                                - 대관서비스를 통해 단체예약 및 가족행사 (돌 찬지, 회갑연 등) 예약이 가능합니다.
                            </p>
                        </div>
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
                    <span v-if="diningType == 'risedine'" class="howard-main-title-mobile">
                        라이즈 앤 다인
                    </span>
                    <span v-else-if="diningType == 'daybreak'" class="howard-main-title-mobile">
                        데이브레이크
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        세계 각국의 다양한 퓨전요리를 선보이는 올데이 다이닝 뷔페 레스토랑
                    </p>
                </div>
            </div>
            <!-- 캐러셀 슬라이드 이미지 -->    
            <!-- 라이즈 앤 다인 -->
            <div v-show="diningType == 'risedine'" id="mobile" class="w-full mb-6">
                <VueSlickCarousel v-bind="mobileCarouselSettings">
                    <div v-for="(item, index) in risedineList" :key="index" class="w-full">
                        <img :src="item.imgsrc" class="w-full h-full" />
                    </div>
                </VueSlickCarousel>
            </div>
            <!-- 데이브레이크 -->
            <div v-show="diningType == 'daybreak'" id="mobile" class="w-full mb-6">
                <VueSlickCarousel v-bind="mobileCarouselSettings">
                    <div v-for="(item, index) in daybreakList" :key="index" class="w-full">
                        <img :src="item.imgsrc" class="w-full h-full" />
                    </div>
                </VueSlickCarousel>
            </div>
            <div class="w-full flex justify-center items-center mb-4">
                <div class="w-full flex justify-center items-center pr-[22px]">
                    <div class="w-full howard-info-border-b">

                    </div>
                </div>
                <div class="w-[108px] flex justify-center items-center">
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
                    <div class="basis-[78%] font-light">
                        <div v-if="diningType === 'risedine'" class="w-full space-y-[6px] flex flex-col">
                            <div class="">
                                <span class="noto-sans-light">
                                    - 조식 7:00 ~ 10:00 (라스트오더 9:30)
                                </span>
                            </div>
                            <div class="">
                                <span class="noto-sans-light">
                                    - 런치 12:00 ~ 15:00 (라스트 오더 14:30)
                                </span>
                            </div>
                            <div class="">
                                <span class="noto-sans-light">
                                    - 디너 18:00 ~ 22:00 (라스트 오더 21:30)
                                </span>
                            </div>
                            <div class="">
                                <span class="noto-sans-light">
                                    - 룸서비스 12:00 ~ 22:00 (라스트 오더 21:30)
                                </span>
                            </div>
                        </div>
                        <div v-else-if="diningType === 'daybreak'" class="w-full space-y-[6px] flex flex-col">
                            <div class="">
                                <span class="noto-sans-light">
                                    - 데이브레이크 커피숍 7:00 ~ 22:00
                                </span>
                            </div>
                            <div class="">
                                <span class="noto-sans-light">
                                    - 데이브레이크 펍 18:00 ~ 22:00 (라스트 오더 21:30)
                                </span>
                            </div>
                            <div class="">
                                <span class="noto-sans-light ml-[6px]">
                                    ※ 브레이크 타임 16:50~17:40
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-medium">
                            이용금액
                        </span>
                    </div>
                    <div class="basis-[78%] font-light">
                        <div v-if="diningType === 'risedine'" class="w-full space-y-[6px] flex flex-col">
                            <div class="">
                                <span class="noto-sans-light">
                                    - 조식뷔페 성인 32,000원, 소인 16,000원
                                </span>
                            </div>
                            <div class="">
                                <span class="noto-sans-light ml-[6px]">
                                    ※ 소인 기준 만4세~12세 까지
                                </span>
                            </div>
                            <div class="">
                                <span class="noto-sans-light ml-[6px]">
                                    ※ 48개월 미만, 최대 2인까지 무료
                                </span>
                            </div>
                        </div>
                        <div v-else-if="diningType === 'daybreak'" class="w-full space-y-[6px] flex flex-col">
                            <div class="">
                                <span class="noto-sans-light">
                                    -
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-medium">
                            좌석수
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <span v-if="diningType === 'risedine'" class="noto-sans-light">
                            180석(최대 250명까지 수용가능)
                        </span>
                        <span v-else-if="diningType === 'daybreak'" class="noto-sans-light">
                            70석
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
                            032-722-0055
                        </span>
                    </div>
                </div>
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
                <div v-if="diningType === 'risedine'" class="w-full space-y-[8px] noto-sans-light text-[12px] tracking-[-0.6px] text-[#212121]">
                    <div class="w-full flex flex-col space-y-[3px]">
                        <p>
                            - 런치, 디너 타임 이용시 단품메뉴 이용이 가능합니다.
                        </p>
                        <p>
                            - 대관서비스를 통해 단체예약 및 가족행사 (돌 찬지, 회갑연 등) 예약이 가능합니다.
                        </p>
                    </div>
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

            diningType: "",

            risedineList: null, //라이즈 앤 다인
            daybreakList: null, //데이브레이크

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
            this.diningType = this.$route.query.diningType;
        }
    },
    created() {
        this.diningType = this.$route.query.diningType;

        //라이즈 앤 다인
        this.risedineList = [
            {  
                imgsrc: require("~/assets/images/dining/risedine/01.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/risedine/02.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/risedine/03.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/risedine/04.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/risedine/05.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/risedine/06.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/risedine/07.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/risedine/08.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/risedine/09.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/risedine/10.jpg"), 
            },
        ];
        //데이브레이크
        this.daybreakList = [
            {  
                imgsrc: require("~/assets/images/dining/daybreak/01.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/daybreak/02.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/daybreak/03.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/daybreak/04.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/daybreak/05.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/daybreak/06.jpg"), 
            },
            {  
                imgsrc: require("~/assets/images/dining/daybreak/07.jpg"), 
            },
        ];

        this.list = [
            { title: "라이즈 앤 다인", location: "2층" , usehours: "10:00~20:00", imgsrc: require("~/assets/images/dining/background-mobile.png"), 
                content: "세계 각국의 다양한 퓨전요리를 선보이는 올데이 다이닝 뷔페 레스토랑 올데이 다이닝 뷔페 레스토랑인 라이즈 앤 다인(Rise & Dine)은 글로벌 브랜드인 하워드존슨 호텔을 대표하는 레스토랑 브랜드입니다. 호텔 3층에 위치하며 넓은 통 유리창과 스타일리쉬한 분위기로 전 세계의 다양한 요리를 오픈 키친에서 선보이는 아침, 점심, 저녁 뷔페를 비롯해 한식, 아시안 푸드, 이탈리안 요리 등 다양한 일품 요리를 제공합니다. 또한 소규모의 가족연을 진행 할 수 있는 단체석과 프라이빗 룸을 보유하고 있습니다."
            },
            { title: "데이브레이크", location: "3층" , usehours: "10:00~20:00", imgsrc: require("~/assets/images/dining/background-mobile.png"), 
                content: "세계 각국의 다양한 퓨전요리를 선보이는 올데이 다이닝 뷔페 레스토랑 올데이 다이닝 뷔페 레스토랑인 라이즈 앤 다인(Rise & Dine)은 글로벌 브랜드인 하워드존슨 호텔을 대표하는 레스토랑 브랜드입니다. 호텔 3층에 위치하며 넓은 통 유리창과 스타일리쉬한 분위기로 전 세계의 다양한 요리를 오픈 키친에서 선보이는 아침, 점심, 저녁 뷔페를 비롯해 한식, 아시안 푸드, 이탈리안 요리 등 다양한 일품 요리를 제공합니다. 또한 소규모의 가족연을 진행 할 수 있는 단체석과 프라이빗 룸을 보유하고 있습니다."
            },
        ]
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

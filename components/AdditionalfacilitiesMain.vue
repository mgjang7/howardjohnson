<template>
<!-- 부대시설 -->
<div>
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="container pt-[120px] pb-[200px]">
            <div class="flex flex-col justify-items-center items-center">
                <div>
                    <span class="howard-main-title">부대시설</span>
                </div>
                <div class="mt-[24px]">
                    <p class="howard-sub-title">
                        각종 회의, 이벤트, 가족행사를 위한 연회장부터 피트니스 센터, 사우나, 실내수영장까지!
                    </p>
                </div>
            </div>
        </div>
        <div class="w-full h-[640px] flex justify-end items-end">
            <div class="relative basis-[95%] h-full bg-[#FFF6F2] pt-[80px] pb-[120px] xl:pr-[16.5%] lg:pr-[9%]">
                <div class="absolute top-[-15%] left-[-5%] w-[62%] h-[96%]">
                     <img :src="currentAfImg" alt="" class="w-full h-full cursor-pointer" @click="goAdditionalfacilities" />
                </div>
                <div class="w-full h-full flex flex-col">
                    <div class="w-full basis-[70%] flex justify-end items-start">
                        <div class="w-[318px]">
                            <div class="w-full mb-4">
                                <span class="noto-sans-bold text-[22px] tracking-[-1.1px]">더 아일랜드7</span>
                            </div>
                            <!-- <div class="w-full text-[16px] tracking-[-0.8px]">
                                <p class="noto-sans-light">
                                    {{currentAfContent}}
                                </p>
                            </div> -->
                            <div class="w-full space-y-[4px] text-[16px] tracking-[-0.8px]">
                                <p class="noto-sans-light">영종도의 아름다운 바다와 크고 작은 섬을 닮은</p>
                                <p class="noto-sans-light">더 아일랜드 7 피트니스 센터, 실내 수영장, 사우나,</p>
                                <p class="noto-sans-light">키즈존, 뮤직존, 당구장에서 더욱 기억에 남는</p>
                                <p class="noto-sans-light">추억을 만드세요.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full basis-[30%] flex justify-end items-end">
                        <div class="w-[318px] h-[42px] flex justify-start items-center">
                            <!-- 버튼 -->
                            <div class="flex flex-row">
                                <img src="~/assets/images/arrow_left_white_48_orange.svg" alt="" class="mx-[6px] cursor-pointer" @click="prevAdditionalfacilitie(currentAfIdx)" />
                                <img src="~/assets/images/arrow_right_white_48_orange.svg" alt="" class="mx-[6px] cursor-pointer" @click="nextAdditionalfacilitie(currentAfIdx)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- mobile -->
    <div class="howard-contents lg:hidden w-full">
        <div class="w-full pt-8 pb-6">
            <div class="w-full flex justify-center items-center mb-2">
                <span class="howard-main-title-mobile">부대시설</span>
            </div>
            <div class="w-full flex justify-center items-center">
                <div class="flex flex-col items-center space-y-[4px]">
                    <p class="howard-sub-title-mobile">각종 회의, 이벤트, 가족행사를 위한 연회장부터</p>
                    <p class="howard-sub-title-mobile">피트니스 센터, 사우나, 실내수영장까지!</p>
                </div>
            </div>
        </div>

        <div class="relative w-full">
            <div class="absolute w-full h-full flex flex-col">
                <div class="w-full basis-[30%]">

                </div>
                <div class="w-full basis-[70%] bg-[#FFF6F2]">

                </div>
            </div>
            <!-- 캐러셀 슬라이드 -->    
             <div id="additionalfacilities" class="w-full px-[12px]">
                <VueSlickCarousel v-bind="carouselSettings">
                    <div v-for="(item, index) in additionalfacilities" :key="index" class="w-full">
                        <img :src="item.imgsrc" class="w-full h-full" @click="goAdditionalfacilities"/>
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
        <div class="w-full pb-8 pt-6 px-4 bg-[#FFF6F2]">
            <div class="w-full h-full">
                <div class="w-full flex justify-center items-center mb-[7px]">
                    <span class="text-[12px] font-semibold tracking-[-0.6px]">더 아일랜드7</span>
                </div>
                <div class="w-full flex justify-center items-center">
                    <div class="space-y-[3px] text-center tracking-[-0.5px]">
                        <p class="noto-sans-light text-[10px]">
                            영종도의 아름다운 바다와 크고 작은 섬을 닮은 더 아일랜드 7. 피트니스 센터,
                        </p>
                        <p class="noto-sans-light text-[10px]">
                            실내 수영장, 사우나, 키즈존, 뮤직존, 당구장에서 더욱 기억에 남는 추억을 만드세요.
                        </p>
                    </div>
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
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default Vue.extend({
    data() {
        return {
           //부대시설
            additionalfacilities: [],
            currentAfIdx: 0,
            currentAfImg: "",
            currentAfTitle: "",
            currentAfContent: "",

            //캐러셀 셋팅
            carouselSettings: {
              "dots": true,
              "dotsClass": "slick-dots custom-dot-class",
              "edgeFriction": 0.35,
              "infinite": true,
              "speed": 500,
              "slidesToScroll": 1,
              "arrows": false,
              //"centerMode": true,
              //"centerPadding": '20px',
              "slidesToShow": 1
          }
        }
    },
    components: { VueSlickCarousel },
    created() {
       //부대시설
       this.additionalfacilities = [
            { 
                idx:1, title: "더 아일랜드 7", imgsrc: require("~/assets/images/additionalfacilities/theisland7/05.jpg"),
                content: "영종도의 아름다운 바다와 크고 작은 섬을 닮은 더 아일랜드 7. 피트니스 센터, 실내 수영장, 사우나, 키즈존, 뮤직존, 당구장에서 더욱 기억에 남는 추억을 만드세요." 
            },
            { 
                idx:2, title: "더 아일랜드 7", imgsrc: require("~/assets/images/additionalfacilities/theisland7/01.jpg"),
                content: "영종도의 아름다운 바다와 크고 작은 섬을 닮은 더 아일랜드 7. 피트니스 센터, 실내 수영장, 사우나, 키즈존, 뮤직존, 당구장에서 더욱 기억에 남는 추억을 만드세요." 
            },
            { 
                idx:3, title: "더 아일랜드 7", imgsrc: require("~/assets/images/additionalfacilities/theisland7/02.jpg"),
                content: "영종도의 아름다운 바다와 크고 작은 섬을 닮은 더 아일랜드 7. 피트니스 센터, 실내 수영장, 사우나, 키즈존, 뮤직존, 당구장에서 더욱 기억에 남는 추억을 만드세요." 
            },
            { 
                idx:4, title: "더 아일랜드 7", imgsrc: require("~/assets/images/additionalfacilities/theisland7/03.jpg"),
                content: "영종도의 아름다운 바다와 크고 작은 섬을 닮은 더 아일랜드 7. 피트니스 센터, 실내 수영장, 사우나, 키즈존, 뮤직존, 당구장에서 더욱 기억에 남는 추억을 만드세요." 
            },
            { 
                idx:5, title: "더 아일랜드 7", imgsrc: require("~/assets/images/additionalfacilities/theisland7/04.jpg"),
                content: "영종도의 아름다운 바다와 크고 작은 섬을 닮은 더 아일랜드 7. 피트니스 센터, 실내 수영장, 사우나, 키즈존, 뮤직존, 당구장에서 더욱 기억에 남는 추억을 만드세요." 
            },
            { 
                idx:6, title: "더 아일랜드 7", imgsrc: require("~/assets/images/additionalfacilities/theisland7/06.jpg"),
                content: "영종도의 아름다운 바다와 크고 작은 섬을 닮은 더 아일랜드 7. 피트니스 센터, 실내 수영장, 사우나, 키즈존, 뮤직존, 당구장에서 더욱 기억에 남는 추억을 만드세요." 
            },
            { 
                idx:7, title: "더 아일랜드 7", imgsrc: require("~/assets/images/additionalfacilities/theisland7/07.jpg"),
                content: "영종도의 아름다운 바다와 크고 작은 섬을 닮은 더 아일랜드 7. 피트니스 센터, 실내 수영장, 사우나, 키즈존, 뮤직존, 당구장에서 더욱 기억에 남는 추억을 만드세요." 
            },
            { 
                idx:8, title: "더 아일랜드 7", imgsrc: require("~/assets/images/additionalfacilities/theisland7/08.jpg"),
                content: "영종도의 아름다운 바다와 크고 작은 섬을 닮은 더 아일랜드 7. 피트니스 센터, 실내 수영장, 사우나, 키즈존, 뮤직존, 당구장에서 더욱 기억에 남는 추억을 만드세요." 
            },
            
        ];
        
        this.currentAfIdx = this.additionalfacilities[0].idx;
        this.currentAfImg = this.additionalfacilities[0].imgsrc;
        this.currentAfTitle = this.additionalfacilities[0].title;
        this.currentAfContent = this.additionalfacilities[0].content;
    },
    methods: {
       //부대시설 이전 클릭
        prevAdditionalfacilitie(currentAfIdx) {
        var targetIdx = currentAfIdx - 1;
        if(targetIdx == 0) {
            targetIdx = 8;

            this.additionalfacilities.forEach(element => {
            if(element.idx == targetIdx) {
                this.currentAfIdx = targetIdx;
                this.currentAfTitle = element.title;
                this.currentAfContent = element.content;
                this.currentAfImg = element.imgsrc;
            }
            });

        } else {
            this.additionalfacilities.forEach(element => {
            if(element.idx == targetIdx) {
                this.currentAfIdx = targetIdx;
                this.currentAfTitle = element.title;
                this.currentAfContent = element.content;
                this.currentAfImg = element.imgsrc;
            }
            });
        }
        },

        //부대시설 다음 클릭
        nextAdditionalfacilitie(currentAfIdx) {
        var targetIdx = currentAfIdx + 1;
        if(targetIdx > 8) {
            targetIdx = 1;

            this.additionalfacilities.forEach(element => {
            if(element.idx == targetIdx) {
                this.currentAfIdx = targetIdx;
                this.currentAfTitle = element.title;
                this.currentAfContent = element.content;
                this.currentAfImg = element.imgsrc;
            }
            });

        } else {
            this.additionalfacilities.forEach(element => {
            if(element.idx == targetIdx) {
                this.currentAfIdx = targetIdx;
                this.currentAfTitle = element.title;
                this.currentAfContent = element.content;
                this.currentAfImg = element.imgsrc;
            }
            });
        }
        },
        //부대시설 상세 페이지 이동
        goAdditionalfacilities() {
            this.$router.push({path: '/additionalfacilities/detail?facilityType=theisland7'});
        }
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
.custom-dot-class > li {
  width: 5px;
}

#additionalfacilities .slick-dots li.slick-active button:before{
  color: white;
  opacity:1;
}

#additionalfacilities .slick-dots li button:before {
  color: white;
  opacity:0.5;
}

#additionalfacilities .slick-dots {
    bottom: 11px;
}

/* ant-carousel */
/* .ant-carousel >>> .slick-thumb {
  bottom: 20px;
}
.ant-carousel >>> .slick-thumb li {
  width: 12px;
}

.slick-normal {
     background-color: #A6A6A6; 
}
.slick-active > a > div {
    background-color: white;
} */
</style>

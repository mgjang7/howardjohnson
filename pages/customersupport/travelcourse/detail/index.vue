<template>
<div>
    <!-- 고객지원 - 여행코스 - 상세 -->
     <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full">
            <div class="flex flex-col justify-items-center items-center py-[120px] bg-[#FFF6F2]">
                <div class="">
                    <span class="howard-main-title">
                        여행코스 안내
                    </span>
                </div>
                <div class="mt-[24px]">
                    <p class="howard-sub-title">
                        하워드존슨 인천 에어포트가 추천드리는 여행코스!
                    </p>
                </div>
            </div>
            <div class="py-[80px] w-full flex justify-center items-center">
                <div class="flex flex-col items-center">
                    <span class="noto-sans-bold text-[24px] tracking-[-1.2px]">
                        여행코스 안내
                    </span>
                    <div class="container-box mt-6 h-[83px] border-2 border-[#FF874E] rounded-xl flex justify-center items-center">
                        <span class="noto-sans-medium text-[16px] tracking-[-0.8px]" style="color:#FF874E;">
                            갈매기 새우깡 체험 → 신도 → 전동 바이크 (시도~모도 코스) → 소라비빔밥 → 호텔
                        </span>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <div class="container-box">
                    <div class="w-full h-[720px] bg-gray-200">
                        <!-- 이미지 -->
                    </div>
                    <div class="pt-[120px]">
                        <div class="w-full h-[400px] flex flex-row pb-[20px]">
                            <div class="basis-[50%]">
                                <div class="w-[500px] h-full bg-gray-200">

                                </div>
                            </div>
                            <div class="basis-[50%]">
                                <div class="flex flex-row h-full text-[14px] tracking-[-0.7px]">
                                    <div class="flex flex-col justify-center space-y-[8px] mr-[64px]">
                                        <span class="noto-sans-bold">
                                            주소
                                        </span>
                                        <span class="noto-sans-bold">
                                            운영시간
                                        </span>
                                        <span class="noto-sans-bold">
                                            요금
                                        </span>
                                        <span class="noto-sans-bold">
                                            문의전화
                                        </span>
                                        <span class="noto-sans-bold">
                                            웹사이트
                                        </span>
                                    </div>
                                    <div class="flex flex-col justify-center space-y-[8px]">
                                        <span>
                                            주소 입니다.
                                        </span>
                                        <span>
                                            운영시간 입니다.
                                        </span>
                                        <span>
                                            요금 입니다.
                                        </span>
                                        <span>
                                            문의전화 입니다.
                                        </span>
                                        <span>
                                            웹사이트 입니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full h-[400px] flex flex-row py-[20px]">
                            
                            <div class="basis-[50%]">
                                <div class="flex flex-row h-full text-[14px] tracking-[-0.7px]">
                                    <div class="flex flex-col justify-center space-y-[8px] mr-[64px]">
                                        <span class="noto-sans-bold">
                                            주소
                                        </span>
                                        <span class="noto-sans-bold">
                                            운영시간
                                        </span>
                                        <span class="noto-sans-bold">
                                            요금
                                        </span>
                                        <span class="noto-sans-bold">
                                            문의전화
                                        </span>
                                        <span class="noto-sans-bold">
                                            웹사이트
                                        </span>
                                    </div>
                                    <div class="flex flex-col justify-center space-y-[8px]">
                                        <span>
                                            주소 입니다.
                                        </span>
                                        <span>
                                            운영시간 입니다.
                                        </span>
                                        <span>
                                            요금 입니다.
                                        </span>
                                        <span>
                                            문의전화 입니다.
                                        </span>
                                        <span>
                                            웹사이트 입니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="basis-[50%] flex flex-row justify-end">
                                <div class="w-[500px] h-full bg-gray-200">

                                </div>
                            </div>
                        </div>
                        <div class="w-full h-[400px] flex flex-row pt-[20px]">
                            <div class="basis-[50%]">
                                <div class="w-[500px] h-full bg-gray-200">

                                </div>
                            </div>
                            <div class="basis-[50%]">
                                <div class="flex flex-row h-full text-[14px] tracking-[-0.7px]">
                                    <div class="flex flex-col justify-center space-y-[8px] mr-[64px]">
                                        <span class="noto-sans-bold">
                                            주소
                                        </span>
                                        <span class="noto-sans-bold">
                                            운영시간
                                        </span>
                                        <span class="noto-sans-bold">
                                            요금
                                        </span>
                                        <span class="noto-sans-bold">
                                            문의전화
                                        </span>
                                        <span class="noto-sans-bold">
                                            웹사이트
                                        </span>
                                    </div>
                                    <div class="flex flex-col justify-center space-y-[8px]">
                                        <span>
                                            주소 입니다.
                                        </span>
                                        <span>
                                            운영시간 입니다.
                                        </span>
                                        <span>
                                            요금 입니다.
                                        </span>
                                        <span>
                                            문의전화 입니다.
                                        </span>
                                        <span>
                                            웹사이트 입니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full pt-[80px] pb-[120px] flex justify-center">
                        <button @click="goList" class="howard-big-btn">
                            목록
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- mobilie -->
    <div class="howard-contents lg:hidden w-full">
        <!-- 메인 타이틀 -->
        <div class="w-full py-8 bg-[#FFF6F2] mb-8">
            <div class="w-full flex justify-center mb-2">
                <span class="howard-main-title-mobile">
                    여행코스 안내
                </span>
            </div>
            <div class="w-full flex justify-center">
                <p class="howard-sub-title-mobile text-center">
                    하워드존슨 인천 에어포트가 추천드리는 여행코스!
                </p>
            </div>
        </div>
        <div class="w-full px-4">
            <div class="w-full flex justify-center text-[16px] mb-4">
                <span class="noto-sans-bold">
                    여행코스 안내
                </span>
            </div>
            <div class="border-[#FF874E] rounded-xl flex justify-center items-center p-[20px] mb-8" style="border-width: 1px;">
                <span class="noto-sans-medium text-[12px] text-center tracking-[-0.6px]" style="color:#FF874E;">
                    갈매기 새우깡 체험 → 신도 → 전동 바이크 (시도~모도 코스) → 소라비빔밥 → 호텔
                </span>
            </div>
            <div class="w-full h-[360px] bg-[#EEEEEE] mb-8">

            </div>
            <!-- 카드 -->
            <div class="w-full space-y-[8px] mb-8">
                <div v-for="(item, index) in list" :key="index" class="w-full flex flex-col card-border">
                    <div class="w-full">
                        <img :src="item.imgsrc" alt="" class="w-full h-full">
                    </div>
                    <div class="w-ful py-6 px-4">
                        <div class="w-full flex flex-col">
                            <div class="w-full text-[14px]">
                                <span class="noto-sans-bold">
                                    {{item.title}}
                                </span>
                            </div>
                            <div class="w-full border-b border-[#EEEEEE] my-[17px]">

                            </div>
                            <div class="w-full space-y-[8px] tracking-[-0.6px]">
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%] text-[12px]">
                                        <span class="noto-sans-medium">
                                            주소
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%] text-[12px]">
                                        <span class="noto-sans-light">
                                            {{item.address}}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%] text-[12px]">
                                        <span class="noto-sans-medium">
                                            운영시간
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%] text-[12px]">
                                        <span class="noto-sans-light">
                                            {{item.operatingTime}}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%] text-[12px]">
                                        <span class="noto-sans-medium">
                                            요금
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%] text-[12px]">
                                        <span class="noto-sans-light">
                                            {{item.price}}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%] text-[12px]">
                                        <span class="noto-sans-medium">
                                            문의전화
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%] text-[12px]">
                                        <span class="noto-sans-light">
                                            {{item.call}}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%] text-[12px]">
                                        <span class="noto-sans-medium">
                                            웹사이트
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%] text-[12px]">
                                        <span class="noto-sans-light">
                                            {{item.website}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
import TopMenuComp from "@/components/TopMenu.vue";
import FooterComp from "@/components/Footer.vue";

export default {
    components: {
        TopMenuComp,
        FooterComp
    },
    data() {
        return {}
    },
    created() {
      this.list = [
            { 
                title: "갈매기 새우깡 체험", address:"주소입니다.", operatingTime:"운영시간입니다.", price:"요금입니다.", call:"문의전화입니다." , website:"웹사이트"
                , imgsrc: require("~/assets/images/customersupport/travelcourse/01.jpg") 
            },
            { 
                title: "신도", address:"주소입니다.", operatingTime:"운영시간입니다.", price:"요금입니다.", call:"문의전화입니다." , website:"웹사이트"
                , imgsrc: require("~/assets/images/customersupport/travelcourse/01.jpg") 
            },
            { 
                title: "전동 바이크 (시도~모도 코스)", address:"주소입니다.", operatingTime:"운영시간입니다.", price:"요금입니다.", call:"문의전화입니다." , website:"웹사이트"
                , imgsrc: require("~/assets/images/customersupport/travelcourse/01.jpg") 
            },
            { 
                title: "소라비빔밥", address:"주소입니다.", operatingTime:"운영시간입니다.", price:"요금입니다.", call:"문의전화입니다." , website:"웹사이트"
                , imgsrc: require("~/assets/images/customersupport/travelcourse/01.jpg") 
            },
            { 
                title: "호텔", address:"주소입니다.", operatingTime:"운영시간입니다.", price:"요금입니다.", call:"문의전화입니다." , website:"웹사이트"
                , imgsrc: require("~/assets/images/customersupport/travelcourse/01.jpg") 
            },
           
        ];
    },
    methods: {
        goList() {
            this.$router.push({path: '/customersupport/travelcourse'});
        }
    },
}
</script>
<style>
.card-border {
    border-color: #EEEEEE;
    border-width: 1px;
}
.card-border:hover {
    border-color: #EE792F;
    border-width: 1px;
}
</style>

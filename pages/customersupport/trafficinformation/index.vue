<template>
<div>
    <!-- 교통/주차 안내 -->
     <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box"> 
                <div class="flex flex-col justify-items-center items-center pt-[120px] pb-[80px]">
                    <div class="">
                        <span class="howard-main-title">
                            교통/주차안내
                        </span>
                    </div>
                    <div class="mt-[24px]">
                        <p class="howard-sub-title">
                            하워드존슨 인천 에어포트로 오시는 길을 안내해 드릴게요.
                        </p>
                    </div>
                </div>
                <div class="w-full">
                    <!-- <div class="w-full h-[641px]">
                        <img src="~/assets/images/customersupport/trafficinformation/howardjohanson-map.jpg" alt="" class="w-full h-full">
                    </div> -->
                    <!-- 네이버 지도 -->
                    <div class="w-full">
                        <img src="~/assets/images/customersupport/trafficinformation/howardjohanson-map.jpg" alt="" class="w-full">
                    </div>
                    <div class="mt-10 w-full h-[83px] bg-[#FFF6F2] flex flex-row justify-center items-center">
                        <span class="text-[16px] mr-6">
                            인천광역시 중구 신도시남로 142번길 6 (운서동 2803-1)
                        </span>
                        <button class="howard-btn" @click="naverMapPopupOpen">
                            네이버 지도
                        </button>
                    </div>
                    <div class="w-full mt-[120px]">
                        <span class="howard-main-title">
                            교통안내
                        </span>
                    </div>
                    <div class="w-full howard-info-border-b2 mt-4">
                        <!-- border-b -->
                    </div>
                    <div class="w-full mt-4">
                        <span class="text-[16px] tracking-[-0.8px]">
                            소요시간 및 운행요금은 교통상황에 따라 변동될 수 있습니다.
                        </span>
                    </div>
                    <div class="w-full mt-20">
                        <div class="w-full flex flex-row text-[14px] noto-sans-bold tracking-[-0.7px]">
                            <div class="basis-[33%] border-y border-r border-gray-200 bg-[#FFF6F2] h-[56px] flex justify-center items-center">
                                <span>공항철도</span>
                            </div>
                            <div class="basis-[34%] border-y border-r border-gray-200 bg-[#FFF6F2] h-[56px] flex justify-center items-center">
                                <span>버스</span>
                            </div>
                            <div class="basis-[33%] border-y border-gray-200 bg-[#FFF6F2] h-[56px] flex justify-center items-center">
                                <span>택시</span>
                            </div>
                        </div>
                        <div class="w-full flex flex-row text-[14px] tracking-[-0.7px]">
                            <div class="basis-[33%] border-b border-r border-gray-200 h-[112px] flex justify-center items-center">
                                <span>운서역 1번 출구 도보 1분(약 300m)</span>
                            </div>
                            <div class="basis-[34%] border-b border-r border-gray-200 h-[112px] flex justify-center items-center">
                                <span>203번, 223번 정류장 ‘운서역’</span>
                            </div>
                            <div class="basis-[33%] border-b border-gray-200 h-[112px] flex justify-center items-center">
                                <div class="flex flex-col items-center w-full">
                                    <span>
                                        인천공항에서 약 10분~15분 요금(일반택시 기준)
                                    </span>
                                    <span>
                                        - 터미널1: 약 10,000원
                                    </span>
                                    <span>
                                        - 터미널2: 약 15,000원
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-[120px] flex justify-end">
                        <span class="howard-main-title">
                            셔틀안내
                        </span>
                    </div>
                    <div class="w-full howard-info-border-b2 mt-4">
                        <!-- border-b -->
                    </div>
                    <div class="w-full mt-4 flex justify-end">
                        <span class="text-[16px] tracking-[-0.8px]">
                            최근 COVID19로 인해 공항 무료 셔틀버스 운행을 잠정 중단하였습니다. 이용에 불편을 드려 죄송합니다.
                        </span>
                    </div>
                    <div class="w-full h-[641px] mt-[80px]">
                        <!-- 셔틀버스 시간표 -->
                        <img src="~/assets/images/customersupport/trafficinformation/shuttle-bus-schedule.jpg" alt="" class="w-full h-full">
                    </div>
                    <div class="w-full mt-[120px]">
                        <span class="howard-main-title">
                            주차안내
                        </span>
                    </div>
                    <div class="w-full howard-info-border-b2 mt-4">
                        <!-- border-b -->
                    </div>
                    <div class="w-full mt-4 flex flex-col space-y-[4px] tracking-[-0.8px]">
                        <span class="text-[16px]">
                            주차장은 지하 1층부터 지하 3층까지 위치하고 있습니다.
                        </span>
                        <span class="text-[16px]">
                            호텔 이용객은 프론트 데스크 혹은 해당 업장에서 주차확인을 받은 후 무료로 이 용하실 수 있으며 장기 주차를 이용할 경우 별도의 비용이 발생합니다.
                        </span>
                        <span class="text-[16px]">
                            * 투숙객 : 투숙 기간동안 무료
                        </span>
                        <span class="text-[16px]">
                            * 레스토랑 및 부대시설 이용객 : 최대 3시간 무료
                        </span>
                    </div>
                    <div class="w-full flex flex-row mt-20 mb-[120px]">
                        <div class="basis-[60%]">
                            <div class="flex flex-col w-full text-[14px] tracking-[-0.7px]">
                                <div class="w-full h-[56px] flex justify-center items-center bg-[#FFF6F2] border-y border-l border-gray-200">
                                    <span class="noto-sans-bold">
                                        1회 주차요금
                                    </span>
                                </div>
                                <div class="w-full h-[56px] bg-[#FFF6F2] border-b border-l border-gray-200 flex">
                                    <div class="basis-[50%] flex justify-center border-r border-gray-200 items-center">
                                        <span class="noto-sans-bold">
                                            30분 이내
                                        </span>
                                    </div>
                                    <div class="basis-[50%] flex justify-center items-center">
                                        <span class="noto-sans-bold">
                                            이후 10분당
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full h-[56px] border-b border-gray-200 flex justify-around items-center font-medium">
                                    <span>
                                        1,000원
                                    </span>
                                    <span>
                                        300원
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="basis-[40%] text-[14px] tracking-[-0.7px]">
                            <div class="bg-[#FFF6F2] w-full h-[112px] flex justify-center items-center border border-gray-200"> 
                                <span class="noto-sans-bold">1일 주차요금</span>
                            </div>
                            <div class="w-full h-[56px] border-b border-l border-gray-200 flex justify-around items-center font-medium">
                                <span>
                                    최대 20,000원
                                </span>
                            </div>
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
                    <span class="howard-main-title-mobile">
                        교통/주차안내
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        하워드존슨 인천 에어포트로 오시는 길을 안내해 드릴게요.
                    </p>
                </div>
            </div>
            <!-- <div class="w-full h-[360px] mb-4">
                <img src="~/assets/images/customersupport/trafficinformation/howardjohanson-map.jpg" alt="" class="w-full h-full">
            </div> -->
            <div class="w-full mb-4">
                <img src="~/assets/images/customersupport/trafficinformation/howardjohanson-map.jpg" alt="" class="w-full h-full">
            </div>
            <div class="w-full bg-[#FFF6F2] flex flex-row justify-center items-center py-4 px-[25px] mb-4">
                <span class="text-[12px]">
                    인천광역시 중구 신도시남로 142번길 6 (운서동 2803-1)
                </span>
            </div>
            <div class="w-full flex justify-center mb-8">
                <button class="howard-btn-mobile" @click="naverMapPopupOpen">
                    네이버 지도
                </button>
            </div>

            <div class="w-full">
                <span class="howard-main-title-mobile">
                    교통안내    
                </span>
            </div>

            <div class="w-full howard-info-border-b2 my-2">

            </div>

            <div class="w-full mb-4">
                <span class="text-[10px]">
                    소요시간 및 운행요금은 교통상황에 따라 변동될 수 있습니다.
                </span>
            </div>

            <div class="w-full flex flex-col mb-8">
                <div class="w-full space-y-[8px]">
                    <div class="w-full flex">
                        <div class="w-full basis-[24%]">
                            <span class="noto-sans-medium text-[12px]">
                                공항철도
                            </span>
                        </div>
                        <div class="w-full basis-[76%]">
                            <span class="noto-sans-light text-[12px]">
                                운서역 1번 출구 도보 1분(약 300m)
                            </span>
                        </div>
                    </div>
                    <div class="w-full flex">
                        <div class="w-full basis-[24%]">
                            <span class="noto-sans-medium text-[12px]">
                                버스
                            </span>
                        </div>
                        <div class="w-full basis-[76%]">
                            <span class="noto-sans-light text-[12px]">
                                203번, 223번 정류장 ‘운서역’
                            </span>
                        </div>
                    </div>
                    <div class="w-full flex">
                        <div class="w-full basis-[24%]">
                            <span class="noto-sans-medium text-[12px]">
                                택시
                            </span>
                        </div>
                        <div class="w-full basis-[76%]">
                            <div class="w-full flex flex-col space-y-[8px]">
                                <div>
                                    <span class="noto-sans-light text-[12px]">
                                        인천공항에서 약 10분~15분 요금(일반택시 기준)
                                    </span>
                                </div>
                                <div>
                                    <span class="noto-sans-light text-[12px]">
                                        - 터미널1: 약 10,000원
                                    </span>
                                </div>
                                <div>
                                    <span class="noto-sans-light text-[12px]">
                                        - 터미널2: 약 15,000원
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <span class="howard-main-title-mobile">
                    셔틀안내
                </span>
            </div>
            <div class="w-full howard-info-border-b2 my-2">
            </div>
            <div class="w-full mb-4">
                <span class="text-[10px]">
                    최근 COVID19로 인해 공항 무료 셔틀버스 운행을 잠정 중단하였습니다.<br>이용에 불편을 드려 죄송합니다.
                </span>
            </div>
            <!-- <div class="w-full h-[360px] mb-[48px]">
                <img src="~/assets/images/customersupport/trafficinformation/shuttle-bus-schedule.jpg" alt="" class="w-full h-full">
            </div> -->
            <div class="w-full mb-[48px]">
                <img src="~/assets/images/customersupport/trafficinformation/shuttle-bus-schedule.jpg" alt="" class="w-full">
            </div>
            <div class="w-full">
                <span class="howard-main-title-mobile">
                    주차안내
                </span>
            </div>
            <div class="w-full howard-info-border-b2 my-2">
            </div>
            <div class="w-full mb-6">
                <span class="text-[10px]">
                    주차장은 지하 1층부터 지하 3층까지 위치하고 있습니다.<br> 
                    호텔 이용객은 프론트 데스크 혹은 해당 업장에서 주차확인을 받은 후 무료로 이용하실 수 있으며 장기 주차를 이용할 경우 별도의 비용이 발생합니다.<br>
                    * 투숙객 : 투숙 기간동안 무료<br>
                    * 레스토랑 및 부대시설 이용객 : 최대 3시간 무료<br>
                </span>
            </div>
            <div class="w-full flex flex-row mb-[40px]">
                <div class="w-full">
                    <div class="flex flex-col w-full text-[12px]">
                        <div class="w-full h-[40px] flex justify-center items-center bg-[#FFF6F2] border-y border-gray-200">
                            <span class="noto-sans-medium">
                                1회 주차요금
                            </span>
                        </div>
                        <div class="w-full h-[40px] bg-[#FFF6F2] border-b border-gray-200 flex">
                            <div class="basis-[50%] flex justify-center border-r border-gray-200 items-center">
                                <span class="noto-sans-medium">
                                    30분 이내
                                </span>
                            </div>
                            <div class="basis-[50%] flex justify-center items-center">
                                <span class="noto-sans-medium">
                                    이후 10분당
                                </span>
                            </div>
                        </div>
                        <div class="w-full h-[40px] border-b border-gray-200 flex text-[12px]">
                            <div class="basis-[50%] flex justify-center border-r border-gray-200 items-center">
                                <span class="noto-sans-light">
                                    1,000원
                                </span>
                            </div>
                            <div class="basis-[50%] flex justify-center items-center">
                                <span class="noto-sans-light">
                                    300원
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-[40px] border-y border-gray-200 bg-[#FFF6F2] flex justify-center items-center text-[12px]">
                <span class="noto-sans-medium">
                    1일 주차요금
                </span>
            </div>
            <div class="w-full h-[40px] border-b border-gray-200 flex justify-center items-center text-[12px] mb-8">
                <div class="">
                    <span class="noto-sans-light">
                        최대 20,000원
                    </span>
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
      
    },
    methods: {
        naverMapPopupOpen() {
            window.open("https://map.naver.com/v5/entry/place/1440469613?c=14080529.2124107,4508120.8013719,15,0,0,0,dh", "_blank");
            //window.open("https://map.naver.com/v5/search/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EC%8B%A0%EB%8F%84%EC%8B%9C%EB%82%A8%EB%A1%9C%20142%EB%B2%88%EA%B8%B8%206/address/14080995.00655606,4508120.801371889,%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EC%8B%A0%EB%8F%84%EC%8B%9C%EB%82%A8%EB%A1%9C142%EB%B2%88%EA%B8%B8%206,new?c=14080860.1875208,4508112.1587135,18,0,0,0,dh&isCorrectAnswer=true", "_blank");
        },
    },
}
</script>
<style>
    
</style>
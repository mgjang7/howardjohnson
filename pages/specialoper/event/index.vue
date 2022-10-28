<template>
<div>
    <!-- 스페셜 오퍼 - 이벤트 - 상세-->
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="py-[120px] container-box">
                <div class="flex flex-col justify-items-center items-center mb-[80px]">
                    <div class="text-[36px] text-[#000000] font-black">
                        <span class="howard-main-title">이벤트</span>
                    </div>
                    <div class="mt-[24px]">
                        <p class="howard-sub-title">
                            합리적이고 다양한 이벤트 상품을 확인해보세요.
                        </p>
                    </div>
                </div>
                <div class="flex w-full h-[474px]">
                    <div class="basis-[50%]">
                        <div v-if="itemNo == 'event1'" class="w-full">
                            <img src="~/assets/images/specialoper/package/package-01.jpg" alt="" class="w-full h-full">
                        </div>
                        <div v-else-if="itemNo == 'event2'" class="w-full">
                            <img src="~/assets/images/specialoper/package/package-02.jpg" alt="" class="w-full h-full">
                        </div>
                        <div v-else-if="itemNo == 'event3'" class="w-full">
                            <img src="~/assets/images/specialoper/package/package-03.jpg" alt="" class="w-full h-full">
                        </div>
                        <div v-else-if="itemNo == 'event4'" class="w-full">
                            <img src="~/assets/images/specialoper/package/package-04.jpg" alt="" class="w-full h-full">
                        </div>
                        <div v-else-if="itemNo == 'event5'" class="w-full">
                            <img src="~/assets/images/specialoper/package/package-05.jpg" alt="" class="w-full h-full">
                        </div>
                    </div>
                    <div class="basis-[50%] border-2 howard-board-card-border-color">
                        <div class="flex flex-col justify-center items-start w-full h-full">
                            <div class="flex flex-col ">
                                <div class="pl-[45px]">
                                    <!-- <span class="noto-sans-bold text-[#EE792F] text-[24px] tracking-[-1.2px]" style="color:#EE792F;"> -->
                                    <span class="noto-sans-bold text-[24px] tracking-[-1.2px]" style="color:#EE792F;">
                                        Park & Fly PNG
                                    </span>
                                </div>
                                <div class="space-y-[5px] pl-[45px] py-[24px] font-medium">
                                    <p class="text-[16px] tracking-[-0.8px]">
                                        여름휴가 해외여행 갈때 주차비가 부담스럽다면?! 하워드존슨/데이즈호텔&스위트
                                    </p>
                                    <p class="text-[16px] tracking-[-0.8px]">
                                        인천공항 주차패키지를 이용하세요~ 합리적인 가격에 주차 최대 10일 무료!
                                    </p>
                                </div>
                                <div class="ml-[45px] border-b-2 howard-board-card-border-color">

                                </div>
                            </div>
                            <div class="flex flex-row text-[14px] tracking-[-0.7px]">
                                <div class="flex flex-col pl-[45px] pt-[24px]">
                                    <div class="p-[5px]">
                                        <span class="noto-sans-bold">기간</span>
                                    </div>
                                    <div class="p-[5px]">
                                        <span class="noto-sans-bold">패키지 요금</span>
                                    </div>
                                    <div class="p-[5px]">
                                        <span class="noto-sans-bold">포함사항</span>
                                    </div>
                                    <div class="h-[21px] p-[5px]">
                                        
                                    </div>
                                    <div class="p-[5px]">
                                        <span class="noto-sans-bold">예약문의</span>
                                    </div>
                                </div>
                                <div class="flex flex-col pl-[45px] pt-[24px]">
                                    <div class="p-[5px]">
                                        <span class="">상시</span>
                                    </div>
                                    <div class="p-[5px]">
                                        <span class="">80,000원(1박 기준, VAT포함)</span>
                                    </div>
                                    <div class="flex flex-col p-[5px]">
                                        <span>- 객실 1박, 장기 무료주차 5일 또는 10일</span>
                                        <span>- 조식 20%할인</span>
                                    </div>
                                    <div class="p-[5px]">
                                        032-722-0000
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 상세정보 -->
                <div class="flex items-center pt-[120px] pb-[40px] w-full">
                    <div class="basis-[15%]">
                        <span class="howard-main-title">
                            상세정보
                        </span>
                    </div>
                    <div class="basis-[85%] howard-info-border-b2 w-full">

                    </div>
                </div>
                <!-- <div class="w-full py-28"> -->
                <div class="w-full">
                    <img src="~/assets/images/specialoper/package/package-04-detail.jpg" alt="" class="w-full h-full">
                </div>
                <!-- 유의사항 -->
                <div class="flex justify-between items-center pt-[120px] pb-[40px] w-full">
                    <div class="basis-[85%] howard-info-border-b2 w-full">

                    </div>
                    <div class="flex justify-end basis-[15%]">
                        <span class="howard-main-title">
                            유의사항
                        </span>
                    </div>
                </div>
                <!-- Text -->
                <div class="w-full flex justify-center items-center p-[40px] bg-[#FAFAFA]">
                    <div class="w-full">
                        <div class="space-y-[5px] text-center text-[14px] font-medium tracking-[-0.7px]">
                            <p>
                                유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 
                                유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 
                                유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 
                                유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 
                                유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다.
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
                    <span class="howard-main-title-mobile">
                        이벤트
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        합리적이고 다양한 이벤트 상품을 확인해보세요.
                    </p>
                </div>
            </div>
            <!-- 상세 이미지 -->
            <div class="w-full mb-4">
                <!-- <img src="~/assets/images/specialoper/package/package-04.jpg" alt="" class="w-full h-full"> -->
                <div v-if="itemNo == 'event1'" class="w-full">
                    <img src="~/assets/images/specialoper/package/package-01.jpg" alt="" class="w-full h-full">
                </div>
                <div v-else-if="itemNo == 'event2'" class="w-full">
                    <img src="~/assets/images/specialoper/package/package-02.jpg" alt="" class="w-full h-full">
                </div>
                <div v-else-if="itemNo == 'event3'" class="w-full">
                    <img src="~/assets/images/specialoper/package/package-03.jpg" alt="" class="w-full h-full">
                </div>
                <div v-else-if="itemNo == 'event4'" class="w-full">
                    <img src="~/assets/images/specialoper/package/package-04.jpg" alt="" class="w-full h-full">
                </div>
                <div v-else-if="itemNo == 'event5'" class="w-full">
                    <img src="~/assets/images/specialoper/package/package-05.jpg" alt="" class="w-full h-full">
                </div>
            </div>
            <div class="w-full flex justify-start items-center mb-2">
                <!-- <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color:#EE792F;"> -->
                <span class="noto-sans-bold text-[14px] tracking-[-0.7px]" style="color:#EE792F;">
                    Park & Fly PNG
                </span>
            </div>
            <div class="w-full flex justify-start items-center">
                <p class="noto-sans-light text-[12px] tracking-[-0.6px]">
                    여름휴가 해외여행 갈때 주차비가 부담스럽다면?! 하워드존슨/데이즈호텔&스위트 인천공항 주차패키지를 이용하세요~ 합리적인 가격에 주차 최대 10일 무료!
                </p>
            </div>
            <div class="w-full howard-info-border-b my-4">
                
            </div>
            <div class="w-full space-y-[10px] mb-8 text-[12px] tracking-[-0.6px]">
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-bold">기간</span>
                    </div>
                    <div class="basis-[78%]">
                        <span class="noto-sans-light">상시</span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-bold">패키지 요금</span>
                    </div> 
                    <div class="basis-[78%]">
                        <span class="noto-sans-light">80,000원(1박 기준, VAT포함)</span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-bold">포함사항</span>
                    </div>
                    <div class="basis-[78%]">
                        <div class="w-full space-y-[6px] flex flex-col">
                            <div class="">
                                <span class="noto-sans-light">- 객실 1박, 장기 무료주차 5일 또는 10일</span>
                            </div>
                            <div class="">
                                <span class="noto-sans-light">- 조식 20%할인</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-bold">예약문의</span>
                    </div>
                    <div class="basis-[78%]">
                        <span class="noto-sans-light">032-722-0000</span>
                    </div>
                </div>
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
            <div class="w-full flex justify-center items-center mb-8">
                <img src="~/assets/images/specialoper/package/package-04-detail.jpg" alt="" class="w-full h-full">
            </div>
            <div class="w-full flex justify-center items-center mb-4">
                <div class="w-full flex justify-center items-center pr-[22px]">
                    <div class="w-full howard-info-border-b">

                    </div>
                </div>
                <div class="w-[108px] flex justify-center items-center">
                    <span class="w-[80px] howard-main-title-mobile">유의사항</span>
                </div>
                <div class="w-full flex justify-center items-center pl-[22px]">
                    <div class="w-full howard-info-border-b">

                    </div>
                </div>
            </div>
            <div class="w-full p-4 bg-[#FAFAFA] mb-8">
                <div class="w-full">
                    <p class="text-[12px] noto-sans-light tracking-[-0.6px]">
                        유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 
                        유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 
                        유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 
                        유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 
                        유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.
                        유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 
                        유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 
                        유의사항입니다. 유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 
                        유의사항입니다. 유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 
                        유의사항입니다.유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다. 유의사항입니다.
                    </p>
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
    data() {
        return {
            itemNo: ""
        }
    },
    mounted() {
        
    },
    created() {
        this.itemNo = this.$route.query.itemNo;
        //alert("this.itemNo : " + this.itemNo);
    },

    components: {
        TopMenuComp,
        FooterComp
    },
}

</script>
<style>
/* @font-face {
    font-family: "NotoSansBlack";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Black.otf) format("truetype");
}
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

.noto-sans-black {
    font-family: "NotoSansBlack";
}
.noto-sans-bold {
    font-family: "NotoSansBold";
}
.noto-sans-regular {
    font-family: "NotoSansRegular";
}
.noto-sans-light {
    font-family: "NotoSansLight";
} */
</style>

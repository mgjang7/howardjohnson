<template>
<div>
    <!-- 부대시설 -->
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box">
                <div class="flex flex-col justify-items-center items-center pt-[120px] pb-[80px]">
                    <div class="">
                        <span class="howard-main-title">부대시설</span>
                    </div>
                    <div class="mt-[24px]">
                        <p class="howard-sub-title">
                            각종 회의, 이벤트, 가족행사를 위한 연회장부터 피트니스 센터, 사우나, 실내수영장까지!
                        </p>
                    </div>
                </div>
                <div class="w-full">
                    <VerticalCardList :data="list">
                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]" slot="col1Title">위치</span>    
                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]" slot="col2Title">수용인원</span>
                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]" slot="col3Title">면적</span>
                    </VerticalCardList>
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
                        부대시설
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        각종 회의, 이벤트, 가족행사를 위한 연회장부터 피트니스 센터, 사우나, 실내수영장까지!
                    </p>
                </div>
            </div>
            <!-- 카드 -->
            <div class="w-full space-y-[8px] mb-8">
                <div v-for="(item, index) in list" :key="index" class="w-full flex flex-col card-border" @click="goDetail(item.facilityType)">
                    <div class="w-full">
                        <img :src="item.imgsrc" alt="" class="w-full h-full">
                    </div>
                    <div class="w-ful py-6 px-4">
                        <div class="w-full flex flex-col">
                            <div class="w-full mb-4">
                                <span class="noto-sans-bold text-[14px]">
                                    {{item.title}}
                                </span>
                            </div>
                            <div class="w-full space-y-[8px] text-[12px] tracking-[-0.6px]">
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%]">
                                        <span class="noto-sans-medium">
                                            위치
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%]">
                                        <span class="noto-sans-light">
                                            <!-- {{item.location}} -->
                                            {{item.col1}}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%]">
                                        <span class="noto-sans-medium">
                                            수용인원
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%]">
                                        <span class="noto-sans-light">
                                            <!-- {{item.capacity}} -->
                                            {{item.col2}}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%]">
                                        <span class="noto-sans-medium">
                                            면적
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%]">
                                        <span class="noto-sans-light">
                                            <!-- {{item.area}} -->
                                            {{item.col3}}
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
import VerticalCardList from "@/components/VerticalCardList.vue";

export default {
    components: {
        TopMenuComp,
        FooterComp,
        VerticalCardList
    },
    data() {
        return {
            list: null
        }
    },
    created() {
        this.list = [
            { title: "메가스타", col1: "3층", col2: "최대 350명", col3: "323m2", imgsrc: require("~/assets/images/additionalfacilities/megastar/01.jpeg"), facilityType: "megastar", menuType: 'additionalfacilities',
                content: "숙련된 미팅 전문가들이 제공하는 최상의 서비스, 최첨단 음향/영상시설을 갖춘 최 적의 공간 323m2 규모의 연회장 메가스타는 각종 회의, 다양한 이벤트, 가족 행사 등 여러 다양한 행사를 위한 최적의 공간을 제공합니다. 또한 행사의 목적 및 규모에 맞게 파티션을 설치해 효율적인 공간 활용이 가능하며, 최첨단 음향 및 영상 시설, 그리고 세계 최대 호텔 기업인 윈덤 그룹의 숙련된 미팅 전문가들이 제공하는 최상의 서비스와 음식은 어떤 행사라도 완벽하고 기억에 남는 경험을 안겨 드릴 것입니다."
            },
            { title: "더 아일랜드 7", col1: "3층", col2: "최대 350명", col3: "323m2", imgsrc: require("~/assets/images/additionalfacilities/theisland7/05.jpg"), facilityType: "theisland7", menuType: 'additionalfacilities',
                content: "숙련된 미팅 전문가들이 제공하는 최상의 서비스, 최첨단 음향/영상시설을 갖춘 최 적의 공간 323m2 규모의 연회장 메가스타는 각종 회의, 다양한 이벤트, 가족 행사 등 여러 다양한 행사를 위한 최적의 공간을 제공합니다. 또한 행사의 목적 및 규모에 맞게 파티션을 설치해 효율적인 공간 활용이 가능하며, 최첨단 음향 및 영상 시설, 그리고 세계 최대 호텔 기업인 윈덤 그룹의 숙련된 미팅 전문가들이 제공하는 최상의 서비스와 음식은 어떤 행사라도 완벽하고 기억에 남는 경험을 안겨 드릴 것입니다."
            },
        ];
        // this.list = [
        //     { title: "메가스타", location: "3층", capacity: "최대 350명", area: "323m2", imgsrc: require("~/assets/images/additionalfacilities/megastar/01.jpeg"), facilityType: "megastar",
        //         content: "숙련된 미팅 전문가들이 제공하는 최상의 서비스, 최첨단 음향/영상시설을 갖춘 최 적의 공간 323m2 규모의 연회장 메가스타는 각종 회의, 다양한 이벤트, 가족 행사 등 여러 다양한 행사를 위한 최적의 공간을 제공합니다. 또한 행사의 목적 및 규모에 맞게 파티션을 설치해 효율적인 공간 활용이 가능하며, 최첨단 음향 및 영상 시설, 그리고 세계 최대 호텔 기업인 윈덤 그룹의 숙련된 미팅 전문가들이 제공하는 최상의 서비스와 음식은 어떤 행사라도 완벽하고 기억에 남는 경험을 안겨 드릴 것입니다."
        //     },
        //     { title: "더 아일랜드 7", location: "3층", capacity: "최대 350명", area: "323m2", imgsrc: require("~/assets/images/additionalfacilities/theisland7/05.jpg"), facilityType: "theisland7",
        //         content: "숙련된 미팅 전문가들이 제공하는 최상의 서비스, 최첨단 음향/영상시설을 갖춘 최 적의 공간 323m2 규모의 연회장 메가스타는 각종 회의, 다양한 이벤트, 가족 행사 등 여러 다양한 행사를 위한 최적의 공간을 제공합니다. 또한 행사의 목적 및 규모에 맞게 파티션을 설치해 효율적인 공간 활용이 가능하며, 최첨단 음향 및 영상 시설, 그리고 세계 최대 호텔 기업인 윈덤 그룹의 숙련된 미팅 전문가들이 제공하는 최상의 서비스와 음식은 어떤 행사라도 완벽하고 기억에 남는 경험을 안겨 드릴 것입니다."
        //     },
        // ];
    },
    methods: {
        goDetail(facilityType) {
            this.$router.push({path: '/additionalfacilities/detail?facilityType=' + facilityType});
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

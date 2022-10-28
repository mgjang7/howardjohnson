<template>
<div>
    <!-- 고객지원 - 추천 여행지 -->
     <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box">
                <div class="flex flex-col justify-items-center items-center pt-[120px] pb-[80px]">
                    <div class="">
                        <span class="howard-main-title">
                            추천 여행지
                        </span>
                    </div>
                    <div class="mt-[24px]">
                        <p class="howard-sub-title">
                            하워드존슨 인천 에어포트가 추천드리는 여행지!
                        </p>
                    </div>
                </div>
                <!-- 카드 -->
                <div class="w-full">
                    <CardList :data="cards">
                        
                    </CardList>
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
                        추천 여행지
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        하워드존슨 인천 에어포트가 추천드리는 여행지!
                    </p>
                </div>
            </div>
            <!-- 카드 -->
            <div class="w-full">
                <MobileCardList :data="cards">
                    
                </MobileCardList>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import TopMenuComp from "@/components/TopMenu.vue";
import FooterComp from "@/components/Footer.vue";
import CardList from "@/components/CardList.vue";
import MobileCardList from "@/components/MobileCardList.vue";

export default {
    components: {
        TopMenuComp,
        FooterComp,
        CardList,
        MobileCardList,
    },
    data() {
        return {
            //list: null
            cards: [],
        }
        
    },
    created() {
        this.cards = [
            {title: "갈메기 새우깡 체험", content: "가족, 연인, 친구와 산책하며 인생샷 남기기!", col: "거리 : 2.1km", imgSource: require("~/assets/images/specialoper/package-card-01.jpg"), menuType: 'travelcourse', type: '', itemNo: "package1"},
            {title: "신도", content: "가족, 연인, 친구와 산책하며 인생샷 남기기!", col: "거리 : 2.1km", imgSource: require("~/assets/images/specialoper/package-card-02.jpg"), menuType: 'travelcourse', type: '', itemNo: "package2"},
            {title: "전동 바이크 (시도~모도 코스)", content: "가족, 연인, 친구와 산책하며 인생샷 남기기!", col: "거리 : 2.1km", imgSource: require("~/assets/images/specialoper/package-card-03.jpg"), menuType: 'travelcourse', type: '', itemNo: "package3"},
            {title: "갈메기 새우깡 체험", content: "가족, 연인, 친구와 산책하며 인생샷 남기기!", col: "거리 : 2.1km", imgSource: require("~/assets/images/specialoper/package-card-04.jpg"), menuType: 'travelcourse', type: '', itemNo: "package4"},
            {title: "신도", content: "가족, 연인, 친구와 산책하며 인생샷 남기기!", col: "거리 : 2.1km", imgSource: require("~/assets/images/specialoper/package-card-05.jpg"), menuType: 'travelcourse', type: '', itemNo: "package5"},
            {title: "전동 바이크 (시도~모도 코스)", content: "가족, 연인, 친구와 산책하며 인생샷 남기기!", col: "거리 : 2.1km", imgSource: require("~/assets/images/specialoper/package-card-01.jpg"), menuType: 'travelcourse', type: '', itemNo: "package1"},
            {title: "갈메기 새우깡 체험", content: "가족, 연인, 친구와 산책하며 인생샷 남기기!", col: "거리 : 2.1km", imgSource: require("~/assets/images/specialoper/package-card-02.jpg"), menuType: 'travelcourse', type: '', itemNo: "package2"},
            {title: "신도", content: "가족, 연인, 친구와 산책하며 인생샷 남기기!", col: "거리 : 2.1km", imgSource: require("~/assets/images/specialoper/package-card-03.jpg"), menuType: 'travelcourse', type: '', itemNo: "package3"},
            {title: "전동 바이크 (시도~모도 코스)", content: "가족, 연인, 친구와 산책하며 인생샷 남기기!", col: "거리 : 2.1km", imgSource: require("~/assets/images/specialoper/package-card-04.jpg"), menuType: 'travelcourse', type: '', itemNo: "package4"},
        ];
    },
    methods: {
        setUsehoursText(objStr) {
             return objStr.replace("\n", "<br>");
        },
        goDetail() {
            this.$router.push({path: '/customersupport/travelcourse/detail'});
        }
    },
    // computed: {
    //     subTitle(objStr) {
    //         return objStr.replace("\n", "<br>");
    //     }
    // }
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

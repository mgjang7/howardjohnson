<template>
<div>
    <!-- 객실 -->
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box">
                <div class="flex flex-col justify-items-center items-center pt-[120px] pb-[80px]">
                    <div class="">
                        <span class="howard-main-title">객실</span>
                    </div>
                    <div class="mt-[24px]">
                        <p class="howard-sub-title">
                            하워드존슨 인천 에어포트가 준비한 402개의 세련되고 모던한 객실에서 행복한 여유를 즐기세요.
                        </p>
                    </div>
                </div>
                <div class="w-full">
                    <VerticalCardList :data="list">
                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]" slot="col1Title">기준인원</span>    
                        <span class="noto-sans-bold text-[14px] tracking-[-0.7px]" slot="col2Title">타입</span>
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
                        객실
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        하워드존슨 인천 에어포트가 준비한 402개의 세련되고 모던한 객실에서 행복한 여유를 즐기세요.
                    </p>
                </div>
            </div>
            <!-- 카드 -->
            <div class="w-full space-y-[8px] mb-8">
                <div v-for="(item, index) in mobileList" :key="index" class="w-full flex flex-col card-border" @click="goDetail(item.roomType)">
                    <div class="w-full">
                        <img :src="item.imgsrc" alt="" class="w-full h-full">
                    </div>
                    <div class="w-ful py-6 px-4">
                        <div class="w-full flex flex-col">
                            <div class="w-full mb-4">
                                <span class="noto-sans-bold text-[14px] tracking-[-0.7px]">
                                    {{item.title}}
                                </span>
                            </div>
                            <div class="w-full space-y-[8px] tracking-[-0.6px]">
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%]">
                                        <span class="noto-sans-medium text-[12px]">
                                            기준인원
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%]">
                                        <span class="noto-sans-light text-[12px]">
                                            {{item.personnel}}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%]">
                                        <span class="noto-sans-medium text-[12px]">
                                            타입
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%]">
                                        <span class="noto-sans-light text-[12px]">
                                            {{item.bedconfig}}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-full flex">
                                    <div class="w-full basis-[24%]">
                                        <span class="noto-sans-medium text-[12px]">
                                            면적
                                        </span>
                                    </div>
                                    <div class="w-full basis-[76%]">
                                        <span class="noto-sans-light text-[12px]">
                                            {{item.area}}
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
            list: null,
            mobileList: null,
        }
    },
    created() {
        this.list = [
            { title: "슈페리어",  col1: "2명", col2: "트윈룸/더블룸", col3: "28m²", imgsrc: require("~/assets/images/guestroom/superior/double/01.jpg"), roomType: "superior", menuType: 'guestroom',
                content: "모던한 인테리어를 자랑하는 슈페리어 룸은 하워드존슨 바이 윈덤 인천공항의 스타일을 가장 잘 나타내는 객실입니다. 총 279개의 슈페리어 룸은 더블, 트윈 혹은 패밀리 트윈 등 다양한 타입으로 구성되어 있어 여행의 목적에 따라 편리하게 선택할 수 있습니다. 초고속 무료 와이파이 및 넉넉한 업무 데스크는 비즈니스 여행에 완벽한 환경을 선사하고, 친구 혹은 가족과의 여행을 위해 준비된 넉넉한 트윈 및 패밀리 트윈 룸은 편안하고 안락한 휴식공간을 제공합니다."
            },
            { title: "디럭스",  col1: "3명", col2: "패밀리 트윈룸", col3: "30m²", imgsrc: require("~/assets/images/guestroom/deluxe/01.jpg"), roomType: "deluxe", menuType: 'guestroom',
                content: "108개의 객실을 보유한 디럭스 룸은 보다 넉넉한 공간으로 가족 혹은 친구 여행객을 위한 패밀리 트윈 룸을 선보입니다. 실용적이면서도 안락한 공간의 디럭스 룸은 프리미엄 침대와 린넨을 사용하여 모든 여행객들이 편안하게 여행의 피로를 풀기에 제격입니다. 이 외에도 세련된 인테리어와 넓은 욕실, 다양한 어메니티는 여러분의 여행을 더욱 풍요롭게 마무리 지어 드릴 것입니다."
            },
            { title: "프리미어",  col1: "2명", col2: "패밀리 더블룸", col3: "60m²", imgsrc: require("~/assets/images/guestroom/premier/01.jpg"), roomType: "premier", menuType: 'guestroom',
                content: "단 5개의 객실만을 제공하는 프리미어 룸은 각 층의 코너에 자리잡고 있어 더욱 넉넉한 공간을 자랑하며, 모던한 인테리어로 꾸며진 공간에서 최상의 휴식을 즐길 수 있도록 효율적인 기능을 제공합니다. 비즈니스 여행객은 물론 친구, 커플, 가족 여행객까지 부족함이 없는 넓은 공간에서 하워드존슨 바이 윈덤 인천공항이 선사하는 편안한 휴식을 경험하시기 바랍니다."
            },
            { title: "스위트",  col1: "2명", col2: "호조 클럽 스위트룸/호조 프리미어 스위트", col3: "75m²", imgsrc: require("~/assets/images/guestroom/sweet/club/01.jpg"), roomType: "sweet", menuType: 'guestroom',
                content: "고급스러운 인테리어로 꾸며진 스위트 룸은 하워드존슨 바이 윈덤 인천공항의 세심한 배려와 기대를 뛰어넘는 서비스를 경험할 수 있는 최고의 객실입니다. 10개의 객실로 이루어진 모든 스위트 룸은 침실과 거실을 분리해 더욱 편리하게 공간 활용을 가능하게 했으며, 화려하지 않지만 품격을 간직한 고급스러운 가구와 어메니티로채워진 하워드존슨 바이 윈덤 인천공항의 스위트 룸은 최상의 휴식을 제공하며 여러분의 여행을 보다 완벽하게 만들어드릴 것입니다."
            }
        ];

        this.mobileList = [
            { title: "슈페리어",  personnel: "2명", bedconfig: "트윈룸/더블룸", area: "28m²", imgsrc: require("~/assets/images/guestroom/superior/double/01.jpg"), roomType: "superior",
                content: "모던한 인테리어를 자랑하는 슈페리어 룸은 하워드존슨 바이 윈덤 인천공항의 스타일을 가장 잘 나타내는 객실입니다. 총 279개의 슈페리어 룸은 더블, 트윈 혹은 패밀리 트윈 등 다양한 타입으로 구성되어 있어 여행의 목적에 따라 편리하게 선택할 수 있습니다. 초고속 무료 와이파이 및 넉넉한 업무 데스크는 비즈니스 여행에 완벽한 환경을 선사하고, 친구 혹은 가족과의 여행을 위해 준비된 넉넉한 트윈 및 패밀리 트윈 룸은 편안하고 안락한 휴식공간을 제공합니다."
            },
            { title: "디럭스",  personnel: "3명", bedconfig: "패밀리 트윈룸", area: "30m²", imgsrc: require("~/assets/images/guestroom/deluxe/01.jpg"), roomType: "deluxe",
                content: "108개의 객실을 보유한 디럭스 룸은 보다 넉넉한 공간으로 가족 혹은 친구 여행객을 위한 패밀리 트윈 룸을 선보입니다. 실용적이면서도 안락한 공간의 디럭스 룸은 프리미엄 침대와 린넨을 사용하여 모든 여행객들이 편안하게 여행의 피로를 풀기에 제격입니다. 이 외에도 세련된 인테리어와 넓은 욕실, 다양한 어메니티는 여러분의 여행을 더욱 풍요롭게 마무리 지어 드릴 것입니다."
            },
            { title: "프리미어",  personnel: "2명", bedconfig: "패밀리 더블룸", area: "60m²", imgsrc: require("~/assets/images/guestroom/premier/01.jpg"), roomType: "premier",
                content: "단 5개의 객실만을 제공하는 프리미어 룸은 각 층의 코너에 자리잡고 있어 더욱 넉넉한 공간을 자랑하며, 모던한 인테리어로 꾸며진 공간에서 최상의 휴식을 즐길 수 있도록 효율적인 기능을 제공합니다. 비즈니스 여행객은 물론 친구, 커플, 가족 여행객까지 부족함이 없는 넓은 공간에서 하워드존슨 바이 윈덤 인천공항이 선사하는 편안한 휴식을 경험하시기 바랍니다."
            },
            { title: "스위트",  personnel: "2명", bedconfig: "호조 클럽 스위트룸/호조 프리미어 스위트", area: "75m²", imgsrc: require("~/assets/images/guestroom/sweet/club/01.jpg"), roomType: "sweet",
                content: "고급스러운 인테리어로 꾸며진 스위트 룸은 하워드존슨 바이 윈덤 인천공항의 세심한 배려와 기대를 뛰어넘는 서비스를 경험할 수 있는 최고의 객실입니다. 10개의 객실로 이루어진 모든 스위트 룸은 침실과 거실을 분리해 더욱 편리하게 공간 활용을 가능하게 했으며, 화려하지 않지만 품격을 간직한 고급스러운 가구와 어메니티로채워진 하워드존슨 바이 윈덤 인천공항의 스위트 룸은 최상의 휴식을 제공하며 여러분의 여행을 보다 완벽하게 만들어드릴 것입니다."
            }
        ];
    },
    methods: {
        goDetail(roomType) {
            this.$router.push({path: '/guestroom/detail?roomType=' + roomType});
        }
    }
}
</script>
<style>
@font-face {
    font-family: "NotoSansBold";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Bold.otf) format("truetype");
}
@font-face {
    font-family: "NotoSansLight";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Light.otf) format("truetype");
}
@font-face {
    font-family: "NotoSansMedium";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Medium.otf) format("truetype");
}

.noto-sans-bold {
    font-family: "NotoSansBold";
}
.noto-sans-light {
    font-family: "NotoSansLight";
}
.noto-sans-medium {
    font-family: "NotoSansMedium";
}

.card-border {
    border-color: #EEEEEE;
    border-width: 1px;
}
.card-border:hover {
    border-color: #EE792F;
    border-width: 1px;
}
</style>

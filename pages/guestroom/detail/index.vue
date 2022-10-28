<template>
<div>
    <!-- 객실 - 상세 -->
    <!-- web -->
    <!-- howard-contents -->
    <div class="hidden lg:block w-full">
        <div class="w-full flex justify-center">
            <div class="container-box">
                <div class="pt-[120px] pb-[80px]">
                    <div class="flex flex-col justify-items-center items-center">
                        <div class="">
                            <span v-if="roomType == 'superior'" class="howard-main-title">
                                슈페리어
                            </span>
                            <span v-else-if="roomType == 'deluxe'" class="howard-main-title">
                                디럭스
                            </span>
                            <span v-else-if="roomType == 'premier'" class="howard-main-title">
                                프리미어
                            </span>
                            <span v-else-if="roomType == 'sweet'" class="howard-main-title">
                                스위트
                            </span>
                        </div>
                        <div class="mt-[24px]">
                            <p v-if="roomType == 'superior'" class="howard-sub-title">
                                모던하면서 아늑한 인테리어와 편안한 여유로움을 느낄 수 있는 슈페리어
                            </p>
                            <p v-else-if="roomType == 'deluxe'" class="howard-sub-title">
                                모던하면서 아늑한 인테리어와 편안한 여유로움을 느낄 수 있는 디럭스
                            </p>
                            <p v-else-if="roomType == 'premier'" class="howard-sub-title">
                                모던하면서 아늑한 인테리어와 편안한 여유로움을 느낄 수 있는 프리미어
                            </p>
                            <p v-else-if="roomType == 'sweet'" class="howard-sub-title">
                                모던하면서 아늑한 인테리어와 편안한 여유로움을 느낄 수 있는 스위트
                            </p>
                        </div>
                    </div>
                </div>
                <div v-if="roomType == 'superior'" class="flex justify-center items-center mb-[40px] space-x-[16px]">
                    <div class="">
                        <span v-if="isTwins" class="howard-big-btn" @click="getTwins">
                            트윈
                        </span>
                        <span v-else class="howard-big-white-btn" @click="getTwins">
                            트윈
                        </span>
                    </div>
                    <div class="">
                        <span v-if="isTwins" class="howard-big-white-btn" @click="getDoubles">
                            더블
                        </span>
                        <span v-else class="howard-big-btn" @click="getDoubles">
                            더블
                        </span>
                    </div>
                </div>
                <div v-else-if="roomType == 'sweet'" class="flex justify-center items-center mb-[40px] space-x-[16px]">
                    <div class="">
                        <span v-if="isClubs" class="howard-big-btn" @click="getClubs">
                            호조 클럽
                        </span>
                        <span v-else class="howard-big-white-btn" @click="getClubs">
                            호조 클럽
                        </span>
                    </div>
                    <div class="">
                        <!-- <span v-if="isClubs" class="howard-big-white-btn" @click="getPremiers"> -->
                        <span v-if="isClubs" class="text-[#EE792F] text-[20px] py-[17px] px-[92px] border-[1px] border-[#EE792F] rounded-full noto-sans-bold cursor-pointer hover:bg-[#FF9552] hover:border-[#FF9552] hover:text-white" @click="getPremiers">
                            호조 프리미어
                        </span>
                        <!-- <span v-else class="howard-big-btn" @click="getPremiers"> -->
                        <span v-else class="bg-[#EE792F] text-[20px] py-[17px] px-[92px] border-[1px] border-[#EE792F] rounded-full noto-sans-bold cursor-pointer hover:bg-[#FF9552] hover:border-[#FF9552]" @click="getPremiers" style="color:white;">
                            호조 프리미어
                        </span>
                    </div>
                </div>
                <!-- 캐러셀 슬라이드 이미지 -->
                <!-- 슈페리어 -->
                <div v-if="roomType == 'superior'" class="w-full">
                    <!-- 더블 -->
                    <div v-show="isDoubles" id="web" class="w-full">
                        <VueSlickCarousel v-bind="carouselSettings">
                            <div v-for="(item, index) in superiorDoubleList" :key="index" class="w-full">
                                <img :src="item.imgsrc" class="w-full h-full" />
                            </div>
                        </VueSlickCarousel>
                    </div>
                    <!-- 트윈 -->
                    <div v-show="isTwins" id="web" class="w-full">
                        <VueSlickCarousel v-bind="carouselSettings">
                            <div v-for="(item, index) in superiorTwinList" :key="index" class="w-full">
                                <img :src="item.imgsrc" class="w-full h-full" />
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
                <!-- 디럭스 -->
                <div v-else-if="roomType == 'deluxe'" class="w-full">
                    <div id="web" class="w-full">
                        <VueSlickCarousel v-bind="carouselSettings">
                            <div v-for="(item, index) in deluxeList" :key="index" class="w-full">
                                <img :src="item.imgsrc" class="w-full h-full" />
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
                <!-- 프리미어 -->
                <div v-else-if="roomType == 'premier'" class="w-full">
                    <div id="web" class="w-full">
                        <VueSlickCarousel v-bind="carouselSettings">
                            <div v-for="(item, index) in premierList" :key="index" class="w-full">
                                <img :src="item.imgsrc" class="w-full h-full" />
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
                <!-- 스위트 -->
                <div v-if="roomType == 'sweet'" class="w-full">
                    <!-- 클럽 -->
                    <div v-show="isClubs" id="web" class="w-full">
                        <VueSlickCarousel v-bind="carouselSettings">
                            <div v-for="(item, index) in sweetClubList" :key="index" class="w-full">
                                <img :src="item.imgsrc" class="w-full h-full" />
                            </div>
                        </VueSlickCarousel>
                    </div>
                    <!-- 프리미어 -->
                    <div v-show="isPremiers" id="web" class="w-full">
                        <VueSlickCarousel v-bind="carouselSettings">
                            <div v-for="(item, index) in sweetPremierList" :key="index" class="w-full">
                                <img :src="item.imgsrc" class="w-full h-full" />
                            </div>
                        </VueSlickCarousel>
                    </div>
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
                <div class="flex flex-row w-full pb-[120px] text-[14px] tracking-[-0.7px]">
                    <div class="basis-[50%] flex flex-col w-full h-full space-y-[8px] text-[#212121]">
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    체크인
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <span class="">
                                    15:00
                                </span>
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    기준인원
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <!-- 슈페리어 or 프리미어 or 스위트 -->
                                <span v-if="roomType === 'superior' || roomType === 'premier' || roomType === 'sweet'" class="">
                                    2명
                                </span>
                                <!-- 디럭스 -->
                                <span v-else-if="roomType === 'deluxe'" class="">
                                    3명
                                </span>
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    객실구성
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <!-- 슈페리어 or 디럭스 -->
                                <span v-if="roomType === 'superior' || roomType === 'deluxe'" class="">
                                    침실, 욕실
                                </span>
                                <!-- 프리미어 -->
                                <span v-else-if="roomType === 'premier'" class="">
                                    침실, 욕실(샤워실 분리)
                                </span>
                                <!-- 스위트 -->
                                <span v-else-if="roomType === 'sweet'" class="">
                                    거실, 침실, 욕실(샤워실 분리), 욕조, 3인용 쇼파
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="basis-[50%] flex flex-col w-full h-full space-y-[8px] text-[#212121]">
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    체크아웃
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <span class="">
                                    11:00
                                </span>
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    침대구성
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <!-- 슈페리어 - 더블 -->
                                <span v-if="roomType === 'superior' && isDoubles" class="">
                                    더블침대 1개
                                </span>
                                <!-- 슈페리어 - 트윈 -->
                                <span v-else-if="roomType === 'superior' && !isDoubles" class="">
                                    싱글침대 2개
                                </span>
                                <!-- 디럭스 -->
                                <span v-else-if="roomType === 'deluxe'" class="">
                                    더블침대 1개 + 싱글침대 1개
                                </span>
                                <!-- 프리미어 -->
                                <span v-else-if="roomType === 'premier'" class="">
                                    더블침대 2개
                                </span>
                                <!-- 스위트 -->
                                <span v-else-if="roomType === 'sweet'" class="">
                                    슈퍼 킹사이즈 1개
                                </span>
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="basis-[20%]">
                                <span class="noto-sans-bold">
                                    제공서비스
                                </span>
                            </div>
                            <div class="basis-[80%]">
                                <!-- 슈페리어 or 디럭스 or 프리미어 -->
                                <div v-if="roomType === 'superior' || roomType === 'deluxe' || roomType === 'premier'" class="w-full">
                                    <div class="w-full flex flex-col space-y-[6px]">
                                        <div class="">
                                            <span class="">
                                                무료 와이파이, 안전금고
                                            </span>
                                        </div>
                                        <div class="">
                                            <span class="">
                                                TV, 미니냉장고, 전기포트, 비데, 헤어드라이기 목욕가운, 슬리퍼, 비누(욕실 어메니티 별도구매)
                                            </span>
                                        </div>
                                        <div class="">
                                            <span class="">
                                                무료 생수 2병, 커피/티백
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <!-- 스위트 -->
                                <div v-else-if="roomType === 'sweet' || roomType === 'deluxe' || roomType === 'premier'" class="w-full">
                                    <div class="w-full flex flex-col space-y-[6px]">
                                        <div class="">
                                            <span class="">
                                                무료 와이파이, 안전금고
                                            </span>
                                        </div>
                                        <div class="">
                                            <span class="">
                                                TV 2대, 스타일러, 미니냉장고, 전기포트, 캡슐 커피머신, 비데, 헤어드라이기
                                            </span>
                                        </div>
                                        <div class="">
                                            <span class="">
                                                목욕가운, 슬리퍼, 비누(욕실 어메니티 별도구매), 무료 생수 2병, 커피/티백
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
                <div class="w-full flex justify-center items-center p-[40px] bg-[#FAFAFA] mb-[120px]">
                    <div class="w-full space-y-[12px] text-[14px] tracking-[-0.7px] text-[#212121]">
                        <div class="w-full flex flex-col space-y-[2px]">
                            <p class="font-bold">
                                [환불 규정]
                            </p>
                            <p>
                                - 주중 : 체크인 기준 1일 전 15시까지 무료 취소가능, 이후 환불 불가
                            </p>
                            <p>
                                - 주말/공휴일/공휴일 전날 : 체크인 3일 전 15시까지 무료 취소가능, 이후 환불 불가
                            </p>
                        </div>
                        <div class="w-full flex flex-col space-y-[2px]">
                            <p class="font-bold">
                                [추가요금 안내]
                            </p>
                            <p>
                                - 기준 인원 추가 : 1인 15,000원
                            </p>
                            <p>
                                - Extra Bed 추가 : 44,000원(vat 포함)
                            </p>
                            <p>
                                - 정부의 ‘자원 재활용법’에 의해 일회용품을 제공하지 않습니다. 이용을 원하실 경우 프론트 데스크에서 구매 가능합니다.
                            </p>
                            <p>
                                - 모든 추가비용은 현장결제만 가능합니다.
                            </p>
                        </div>
                        <div class="w-full flex flex-col space-y-[2px]">
                            <p class="font-bold">
                                [레스토랑 조식 뷔페]
                            </p>
                            <p>
                                - 장소 : 3층 라이즈앤다인
                            </p>
                            <p>
                                - 이용시간 : 주중/주말 7:00 ~ 10:00 (Last Order 9:30)
                            </p>
                            <p>
                                - 이용금액 : 성인 32,000원, 소인 16,000원
                            </p>
                            <p class="ml-2">
                                * 소인 기준 만 4세~12세 까지
                            </p>
                            <p class="ml-2">
                                * 48개월 미만, 최대 2인까지 무료
                            </p>
                            <p class="ml-2">
                                * 단품 메뉴의 경우 소인요금이 적용
                            </p>
                            <p>
                                - 현재 신종 코로나 바이러스로 인해 상황에 따라 레스토랑에서 진행되는 단품 메뉴가 뷔페로 변경될 수 있습니다.
                            </p>
                        </div>
                        <div class="w-full flex flex-col space-y-[2px]">
                            <p class="font-bold">
                                [주차안내]
                            </p>
                            <p>
                                - 객실당 1대 무료주차(투숙기간 한정)
                            </p>
                            <p>
                                - 투숙기간 외 주차시 프론트 데스크에 문의요망
                            </p>
                        </div>
                        <div class="w-full flex flex-col space-y-[2px]">
                            <p class="font-bold">
                                [코로나19관련 비상 대응 활동 안내]
                            </p>
                            <p>
                                - 모든 호텔 투숙객 및 방문객의 발열 체크를 의무화 하고 있습니다. 호텔 및 공용 시설 입장 시 마스크 착용 의무화 및 미착용 시 이용이 제한될 수 있습니다.
                            </p>
                            <p>
                                - 시설 전체 정기적인 소독 및 방역을 실시하고 있습니다.
                            </p>
                            <p>
                                - 모든 투숙객은 체크인 시 사진이 부착된 유효한 신분증과 신용카드를 제시하셔야 합니다. 그렇지 않을 경우 체크인이 제한될 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- mobilie -->
    <div class="lg:hidden w-full">
        <div class="w-full px-4">
            <!-- 메인 타이틀 -->
            <div class="w-full pt-8 pb-6">
                <div class="w-full flex justify-center mb-2">
                    <span v-if="roomType == 'superior'" class="howard-main-title-mobile">
                        슈페리어
                    </span>
                    <span v-else-if="roomType == 'deluxe'" class="howard-main-title-mobile">
                        디럭스
                    </span>
                    <span v-else-if="roomType == 'premier'" class="howard-main-title-mobile">
                        프리미어
                    </span>
                    <span v-else-if="roomType == 'sweet'" class="howard-main-title-mobile">
                        스위트
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p v-if="roomType == 'superior'" class="howard-sub-title-mobile text-center">
                        모던하면서 아늑한 인테리어와 편안한 여유로움을 느낄 수 있는 슈페리어
                    </p>
                    <p v-else-if="roomType == 'deluxe'" class="howard-sub-title-mobile text-center">
                        모던하면서 아늑한 인테리어와 편안한 여유로움을 느낄 수 있는 디럭스
                    </p>
                    <p v-else-if="roomType == 'premier'" class="howard-sub-title-mobile text-center">
                        모던하면서 아늑한 인테리어와 편안한 여유로움을 느낄 수 있는 프리미어
                    </p>
                    <p v-else-if="roomType == 'sweet'" class="howard-sub-title-mobile text-center">
                        모던하면서 아늑한 인테리어와 편안한 여유로움을 느낄 수 있는 스위트
                    </p>
                </div>
            </div>
            <!-- 버튼 -->
            <div v-if="roomType == 'superior'" class="w-full flex justify-center mb-4">
                <div class="w-full flex justify-center space-x-[8px]">
                    <div class="">
                        <span v-if="isTwins" class="bg-[#EE792F] text-white text-[14px] py-[10px] px-[61px] border-[1px] border-[#EE792F] rounded-full font-bold cursor-pointer hover:bg-[#FF9552] hover:border-[#FF9552]" @click="getTwins">
                            트윈
                        </span>
                        <span v-else class="text-[#EE792F] text-[14px] py-[10px] px-[61px] border-[1px] border-[#EE792F] rounded-full font-bold cursor-pointer hover:bg-[#FF9552] hover:text-white hover:border-[#FF9552]" @click="getTwins">
                            트윈
                        </span>
                    </div>
                    <div class="">
                        <span v-if="isTwins" class="text-[#EE792F] text-[14px] py-[10px] px-[61px] border-[1px] border-[#EE792F] rounded-full font-bold cursor-pointer hover:bg-[#FF9552] hover:text-white hover:border-[#FF9552]" @click="getDoubles">
                            더블
                        </span>
                        <span v-else class="bg-[#EE792F] text-white text-[14px] py-[10px] px-[61px] border-[1px] border-[#EE792F] rounded-full font-bold cursor-pointer hover:bg-[#FF9552] hover:border-[#FF9552]" @click="getDoubles">
                            더블
                        </span>
                    </div>
                </div>
            </div>
            <div v-else-if="roomType == 'sweet'" class="w-full flex justify-center mb-4">
                <div class="w-full flex justify-center space-x-[8px]">
                    <div class="">
                        <span v-if="isClubs" class="bg-[#EE792F] text-white text-[14px] py-[10px] px-[44px] border-[1px] border-[#EE792F] rounded-full font-bold cursor-pointer hover:bg-[#FF9552] hover:border-[#FF9552]" @click="getClubs">
                            호조 클럽
                        </span>
                        <span v-else class="text-[#EE792F] text-[14px] py-[10px] px-[44px] border-[1px] border-[#EE792F] rounded-full font-bold cursor-pointer hover:bg-[#FF9552] hover:text-white hover:border-[#FF9552]" @click="getClubs">
                            호조 클럽
                        </span>
                    </div>
                    <div class="">
                        <span v-if="isClubs" class="text-[#EE792F] text-[14px] py-[10px] px-[33px] border-[1px] border-[#EE792F] rounded-full font-bold cursor-pointer hover:bg-[#FF9552] hover:text-white hover:border-[#FF9552]" @click="getPremiers">
                            호조 프리미어
                        </span>
                        <span v-else class="bg-[#EE792F] text-white text-[14px] py-[10px] px-[33px] border-[1px] border-[#EE792F] rounded-full font-bold cursor-pointer hover:bg-[#FF9552] hover:border-[#FF9552]" @click="getPremiers">
                            호조 프리미어
                        </span>
                    </div>
                </div>
            </div>
            <!-- 캐러셀 슬라이드 이미지 -->
            <!-- 슈페리어 -->
            <div v-if="roomType == 'superior'" class="w-full">
                <!-- 더블 -->
                <div v-show="isDoubles" id="mobile" class="w-full mb-6">
                    <VueSlickCarousel v-bind="mobileCarouselSettings">
                        <div v-for="(item, index) in superiorDoubleList" :key="index" class="w-full">
                            <img :src="item.imgsrc" class="w-full h-full" />
                        </div>
                    </VueSlickCarousel>
                </div>
                <!-- 트윈 -->
                <div v-show="isTwins" id="mobile" class="w-full mb-6">
                    <VueSlickCarousel v-bind="mobileCarouselSettings">
                        <div v-for="(item, index) in superiorTwinList" :key="index" class="w-full">
                            <img :src="item.imgsrc" class="w-full h-full" />
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
            <!-- 디럭스 -->
            <div v-else-if="roomType == 'deluxe'" class="w-full">
                <div id="mobile" class="w-full mb-6">
                    <VueSlickCarousel v-bind="mobileCarouselSettings">
                        <div v-for="(item, index) in deluxeList" :key="index" class="w-full">
                            <img :src="item.imgsrc" class="w-full h-full" />
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
            <!-- 프리미어 -->
            <div v-else-if="roomType == 'premier'" class="w-full">
                <div id="mobile" class="w-full mb-6">
                    <VueSlickCarousel v-bind="mobileCarouselSettings">
                        <div v-for="(item, index) in premierList" :key="index" class="w-full">
                            <img :src="item.imgsrc" class="w-full h-full" />
                        </div>
                    </VueSlickCarousel>
                </div>
            </div>
            <!-- 스위트 -->
            <div v-if="roomType == 'sweet'" class="w-full">
                <!-- 클럽 -->
                <div v-show="isClubs" id="mobile" class="w-full mb-6">
                    <VueSlickCarousel v-bind="mobileCarouselSettings">
                        <div v-for="(item, index) in sweetClubList" :key="index" class="w-full">
                            <img :src="item.imgsrc" class="w-full h-full" />
                        </div>
                    </VueSlickCarousel>
                </div>
                <!-- 프리미어 -->
                <div v-show="isPremiers" id="mobile" class="w-full mb-6">
                    <VueSlickCarousel v-bind="mobileCarouselSettings">
                        <div v-for="(item, index) in sweetPremierList" :key="index" class="w-full">
                            <img :src="item.imgsrc" class="w-full h-full" />
                        </div>
                    </VueSlickCarousel>
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
            <div class="w-full space-y-[10px] mb-8 text-[12px] tracking-[-0.6px] text-[#212121]">
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-bold">
                            체크인
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <span class="">
                            15:00
                        </span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-bold">
                            체크아웃
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <span class="">
                            11:00
                        </span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-bold">
                            기준인원
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <!-- 슈페리어 or 프리미어 or 스위트 -->
                        <span v-if="roomType === 'superior' || roomType === 'premier' || roomType === 'sweet'" class="">
                            2명
                        </span>
                        <!-- 디럭스 -->
                        <span v-else-if="roomType === 'deluxe'" class="">
                            3명
                        </span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-bold">
                            침대구성
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <!-- 슈페리어 - 더블 -->
                        <span v-if="roomType === 'superior' && isDoubles" class="">
                            더블침대 1개
                        </span>
                        <!-- 슈페리어 - 트윈 -->
                        <span v-else-if="roomType === 'superior' && !isDoubles" class="">
                            싱글침대 2개
                        </span>
                        <!-- 디럭스 -->
                        <span v-else-if="roomType === 'deluxe'" class="">
                            더블침대 1개 + 싱글침대 1개
                        </span>
                        <!-- 프리미어 -->
                        <span v-else-if="roomType === 'premier'" class="">
                            더블침대 2개
                        </span>
                        <!-- 스위트 -->
                        <span v-else-if="roomType === 'sweet'" class="">
                            슈퍼 킹사이즈 1개
                        </span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-bold">
                            객실구성
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <!-- 슈페리어 or 디럭스 -->
                        <span v-if="roomType === 'superior' || roomType === 'deluxe'" class="">
                            침실, 욕실
                        </span>
                        <!-- 프리미어 -->
                        <span v-else-if="roomType === 'premier'" class="">
                            침실, 욕실(샤워실 분리)
                        </span>
                        <!-- 스위트 -->
                        <span v-else-if="roomType === 'sweet'" class="">
                            거실, 침실, 욕실(샤워실 분리), 욕조, 3인용 쇼파
                        </span>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="basis-[22%]">
                        <span class="noto-sans-bold">
                            제공서비스
                        </span>
                    </div>
                    <div class="basis-[78%]">
                        <!-- 슈페리어 or 디럭스 or 프리미어 -->
                        <div v-if="roomType === 'superior' || roomType === 'deluxe' || roomType === 'premier'" class="w-full">
                            <div class="w-full flex flex-col space-y-[6px]">
                                <div class="">
                                    <span class="">
                                        무료 와이파이, 안전금고
                                    </span>
                                </div>
                                <div class="">
                                    <span class="">
                                        TV, 미니냉장고, 전기포트, 비데, 헤어드라이기 목욕가운, 슬리퍼, 비누(욕실 어메니티 별도구매)
                                    </span>
                                </div>
                                <div class="">
                                    <span class="">
                                        무료 생수 2병, 커피/티백
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- 스위트 -->
                        <div v-else-if="roomType === 'sweet' || roomType === 'deluxe' || roomType === 'premier'" class="w-full">
                            <div class="w-full flex flex-col space-y-[6px]">
                                <div class="">
                                    <span class="">
                                        무료 와이파이, 안전금고
                                    </span>
                                </div>
                                <div class="">
                                    <span class="">
                                        TV 2대, 스타일러, 미니냉장고, 전기포트, 캡슐 커피머신, 비데, 헤어드라이기
                                    </span>
                                </div>
                                <div class="">
                                    <span class="">
                                        목욕가운, 슬리퍼, 비누(욕실 어메니티 별도구매), 무료 생수 2병, 커피/티백
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center items-center mb-4">
                <div class="w-full flex justify-center items-center pr-[22px]">
                    <div class="w-full howard-info-border-b">

                    </div>
                </div>
                <div class="w-[108px] flex justify-center items-center">
                    <span class="w-[80px] howard-main-title-mobile">이용안내</span>
                </div>
                <div class="w-full flex justify-center items-center pl-[22px]">
                    <div class="w-full howard-info-border-b">

                    </div>
                </div>
            </div>
            <div class="w-full p-4 bg-[#FAFAFA] mb-8">
                <div class="w-full space-y-[8px] noto-sans-light text-[12px] tracking-[-0.6px] text-[#212121]">
                    <div class="w-full flex flex-col space-y-[3px]">
                        <p class="font-bold">
                            [환불 규정]
                        </p>
                        <p>
                            - 주중 : 체크인 기준 1일 전 15시까지 무료 취소가능, 이후 환불 불가
                        </p>
                        <p>
                            - 주말/공휴일/공휴일 전날 : 체크인 3일 전 15시까지 무료 취소가능, 이후 환불 불가
                        </p>
                    </div>
                    <div class="w-full flex flex-col space-y-[2px]">
                        <p class="font-bold">
                            [추가요금 안내]
                        </p>
                        <p>
                            - 기준 인원 추가 : 1인 15,000원
                        </p>
                        <p>
                            - Extra Bed 추가 : 44,000원(vat 포함)
                        </p>
                        <p>
                            - 정부의 ‘자원 재활용법’에 의해 일회용품을 제공하지 않습니다. 이용을 원하실 경우 프론트 데스크에서 구매 가능합니다.
                        </p>
                        <p>
                            - 모든 추가비용은 현장결제만 가능합니다.
                        </p>
                    </div>
                    <div class="w-full flex flex-col space-y-[2px]">
                        <p class="font-bold">
                            [레스토랑 조식 뷔페]
                        </p>
                        <p>
                            - 장소 : 3층 라이즈앤다인
                        </p>
                        <p>
                            - 이용시간 : 주중/주말 7:00 ~ 10:00 (Last Order 9:30)
                        </p>
                        <p>
                            - 이용금액 : 성인 32,000원, 소인 16,000원
                        </p>
                        <p class="ml-2">
                            * 소인 기준 만 4세~12세 까지
                        </p>
                        <p class="ml-2">
                            * 48개월 미만, 최대 2인까지 무료
                        </p>
                        <p class="ml-2">
                            * 단품 메뉴의 경우 소인요금이 적용
                        </p>
                        <p>
                            - 현재 신종 코로나 바이러스로 인해 상황에 따라 레스토랑에서 진행되는 단품 메뉴가 뷔페로 변경될 수 있습니다.
                        </p>
                    </div>
                    <div class="w-full flex flex-col space-y-[2px]">
                        <p class="font-bold">
                            [주차안내]
                        </p>
                        <p>
                            - 객실당 1대 무료주차(투숙기간 한정)
                        </p>
                        <p>
                            - 투숙기간 외 주차시 프론트 데스크에 문의요망
                        </p>
                    </div>
                    <div class="w-full flex flex-col space-y-[2px]">
                        <p class="font-bold">
                            [코로나19관련 비상 대응 활동 안내]
                        </p>
                        <p>
                            - 모든 호텔 투숙객 및 방문객의 발열 체크를 의무화 하고 있습니다. 호텔 및 공용 시설 입장 시 마스크 착용 의무화 및 미착용 시 이용이 제한될 수 있습니다.
                        </p>
                        <p>
                            - 시설 전체 정기적인 소독 및 방역을 실시하고 있습니다.
                        </p>
                        <p>
                            - 모든 투숙객은 체크인 시 사진이 부착된 유효한 신분증과 신용카드를 제시하셔야 합니다. 그렇지 않을 경우 체크인이 제한될 수 있습니다.
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
            superiorDoubleList: null, //슈페리어 - 더블
            superiorTwinList: null, //슈페리어 - 트윈
            deluxeList: null, //디럭스
            premierList: null, //프리미어
            sweetClubList: null, //스위트 - 클럽
            sweetPremierList: null, //스위트 - 프리미어

            isDoubles: false,
            isTwins: true,
            isClubs: true,
            isPremiers: false,
            
            roomType: "",

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
            },
            slide: 0,
            sliding: null,
            //list: null,
        }
    },
    components: { VueSlickCarousel },
    watch:{
        //route 파라미터 변경 감지
        $route() {
            this.roomType = this.$route.query.roomType;
        }
    },
    
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      getDoubles() {
          this.isDoubles = true;
          this.isTwins = false;
      },
      getTwins() {
          this.isDoubles = false;
          this.isTwins = true;
      },
      getClubs() {
          this.isClubs = true;
          this.isPremiers = false;
      },
      getPremiers() {
          this.isClubs = false;
          this.isPremiers = true;
      },
    },
    mounted() {
        
    },
    created() {
        this.roomType = this.$route.query.roomType;

        //슈페리어 - 더블
        this.superiorDoubleList = [
            {  
                bedType: "double",
                imgsrc: require("~/assets/images/guestroom/superior/double/01.jpg"), 
            },
            {  
                bedType: "double",
                imgsrc: require("~/assets/images/guestroom/superior/double/02.jpg"), 
            },
        ];
        //슈페리어 - 트윈
        this.superiorTwinList = [
            {  
                bedType: "twin",
                imgsrc: require("~/assets/images/guestroom/superior/twin/01.jpg"), 
            },
            {  
                bedType: "twin",
                imgsrc: require("~/assets/images/guestroom/superior/twin/02.jpg"), 
            },
            {  
                bedType: "twin",
                imgsrc: require("~/assets/images/guestroom/superior/twin/03.jpg"), 
            },
        ];
        //스위트 - 클럽
        this.sweetClubList = [
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/club/01.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/club/02.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/club/03.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/club/04.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/club/05.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/club/06.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/club/07.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/club/08.jpg"), 
            },
        ];
        //스위트 - 프리미어
        this.sweetPremierList = [
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/premier/01.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/premier/02.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/premier/03.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/premier/04.jpg"), 
            },
            {  
                bedType: "club",
                imgsrc: require("~/assets/images/guestroom/sweet/premier/05.jpg"), 
            },
        ];
        //디럭스
        this.deluxeList = [
            {  
                bedType: "",
                imgsrc: require("~/assets/images/guestroom/deluxe/01.jpg"), 
            },
            {  
                bedType: "",
                imgsrc: require("~/assets/images/guestroom/deluxe/02.jpg"), 
            },
            {  
                bedType: "",
                imgsrc: require("~/assets/images/guestroom/deluxe/03.jpg"), 
            },
        ];
        //프리미어
        this.premierList = [
            {  
                bedType: "",
                imgsrc: require("~/assets/images/guestroom/premier/01.jpg"), 
            },
            {  
                bedType: "",
                imgsrc: require("~/assets/images/guestroom/premier/02.jpg"), 
            },
            {  
                bedType: "",
                imgsrc: require("~/assets/images/guestroom/premier/03.jpg"), 
            },
            {  
                bedType: "",
                imgsrc: require("~/assets/images/guestroom/premier/04.jpg"), 
            },
        ];
    },
}

</script>

<style>
/* @font-face {
    font-family: "NotoSansBold";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Bold.otf) format("truetype");
}
@font-face {
    font-family: "NotoSansLight";
    src: url(./assets/font/NotoSansCJKkr-hinted/NotoSansCJKkr-Light.otf) format("truetype");
}
.noto-sans-bold {
    font-family: "NotoSansBold";
}
.noto-sans-light {
    font-family: "NotoSansLight";
} */

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

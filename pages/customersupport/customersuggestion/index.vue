<template>
<div>
    <!-- 고객지원 - 고객의 소리 -->
    <!-- web -->
    <div id="desktopArea" class="howard-contents hidden lg:block w-full">
        <div class="w-full">
            <div class="flex flex-col justify-items-center items-center pt-[120px] pb-[80px]">
                <div class="">
                    <span class="howard-main-title">
                        고객의 소리
                    </span>
                </div>
                <div class="mt-[24px]">
                    <p class="howard-sub-title">
                        고객님의 소중한 의견을 들려주세요.
                    </p>
                </div>
            </div>
            <div class="w-full flex justify-center">
                <div class="container-box flex justify-end items-center">
                    <span class="text-[14px] tracking-[-0.7px]">
                        ‘*’ 표기된 항목은 필수 입력 사항입니다.
                    </span>
                </div>
            </div>
            <div class="w-full bg-[#FFF6F2] mt-[24px] flex justify-center tracking-[-0.8px]">
                <div class="container-box">
                    <div class="w-full">
                        <div class="container-box w-full py-28 bg-[#FFF6F2]">
                            <div class="w-full space-y-[40px]">
                                <div class="flex space-x-[16px]">
                                    <div class="basis-[50%] flex flex-col space-y-[16px]">
                                        <div class="">
                                            <span class="noto-sans-bold text-[16px]">
                                                구분*
                                            </span>
                                        </div>
                                        <div id="desktopHotelSelect" class="w-full">
                                            <a-select placeholder="호텔을 선택해 주세요." class="w-full" @change="divChange">
                                                <a-select-option value="1">
                                                    하워드존슨
                                                </a-select-option>
                                                <a-select-option value="2">
                                                    데이즈 호텔 앤 스위트
                                                </a-select-option>
                                            </a-select>
                                        </div>
                                        <!-- <div v-if="isHotelSelect" class="w-full">
                                            <select @change="hotelSelect($event)" name="" id="webSelect" class="w-full h-10 rounded border-[1px] howard-board-card-border-color text-[#212121]">
                                                <option value="0">호텔을 선택해 주세요.</option>
                                                <option value="1">전체</option>
                                                <option value="2">호텔1</option>
                                                <option value="3">호텔2</option>
                                                <option value="4">호텔3</option>
                                            </select>
                                        </div>
                                        <div v-else class="w-full">
                                            <select @change="hotelSelect($event)" name="" id="webSelect" class="w-full h-10 rounded border-[1px] howard-board-card-border-color text-[#BDBDBD]">
                                                <option value="0">호텔을 선택해 주세요.</option>
                                                <option value="1">전체</option>
                                                <option value="2">호텔1</option>
                                                <option value="3">호텔2</option>
                                                <option value="4">호텔3</option>
                                            </select>
                                        </div> -->
                                    </div>
                                    <div class="basis-[50%] flex flex-col space-y-[16px]">
                                        <div class="">
                                            <span class="noto-sans-bold text-[16px]">
                                                문의분야*
                                            </span>
                                        </div>
                                        <div id="desktopInquirySelect" class="w-full">
                                            <a-select placeholder="문의 분야를 선택해 주세요." class="w-full" @change="inquiryChange">
                                                <a-select-option value="1">
                                                    질문
                                                </a-select-option>
                                                <a-select-option value="2">
                                                    칭찬
                                                </a-select-option>
                                                <a-select-option value="3">
                                                    불만
                                                </a-select-option>
                                                <a-select-option value="4">
                                                    기타
                                                </a-select-option>
                                            </a-select>
                                        </div>
                                        <!-- <div v-if="isCategorySelect" class="w-full">
                                            <select @change="categorySelect($event)" name="" id="webSelect" class="w-full h-10 rounded border-[1px] howard-board-card-border-color text-[#212121]">
                                                <option value="0">문의분야를 선택해 주세요.</option>
                                                <option value="1">분야1</option>
                                                <option value="2">분야2</option>
                                                <option value="3">분야3</option>
                                            </select>
                                        </div>
                                        <div v-else class="w-full">
                                            <select @change="categorySelect($event)" name="" id="webSelect" class="w-full h-10 rounded border-[1px] howard-board-card-border-color text-[#BDBDBD]">
                                                <option value="0">문의분야를 선택해 주세요.</option>
                                                <option value="1">분야1</option>
                                                <option value="2">분야2</option>
                                                <option value="3">분야3</option>
                                            </select>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="flex flex-col space-y-[16px]">
                                    <div class="">
                                        <span class="noto-sans-bold text-[16px]">
                                            제목*
                                        </span>
                                    </div>
                                    <div class="w-full">
                                        <!-- <input type="text" class="w-full h-10 rounded border-[1px] howard-board-card-border-color"/> -->
                                        <a-input placeholder="" />
                                    </div>
                                </div>
                                <div class="flex flex-col space-y-[16px]">
                                    <div class="">
                                        <span class="noto-sans-bold text-[16px]">
                                            내용*
                                        </span>
                                    </div>
                                    <div class="w-full">
                                        <!-- <textarea name="" id="" cols="30" rows="10" class="w-full h-[200px] rounded border-[1px] howard-board-card-border-color">

                                        </textarea> -->
                                        <a-textarea
                                            placeholder=""
                                            :auto-size="{ minRows: 6, maxRows: 6 }"
                                        />
                                    </div>
                                </div>
                                <div class="flex space-x-[16px]">
                                    <div class="basis-[50%] flex flex-col space-y-[16px]">
                                        <div class="">
                                            <span class="noto-sans-bold text-[16px]">
                                                이름*
                                            </span>
                                        </div>
                                        <div class="w-full">
                                            <!-- <input type="text" class="w-full h-10 rounded border-[1px] howard-board-card-border-color"/> -->
                                            <a-input placeholder="" />
                                        </div>
                                    </div>
                                    <div class="basis-[50%] flex flex-col space-y-[16px]">
                                        <div class="">
                                            <span class="noto-sans-bold text-[16px]">
                                                휴대폰 번호*
                                            </span>
                                        </div>
                                        <div class="w-full">
                                            <!-- <input type="text" class="w-full h-10 rounded border-[1px] howard-board-card-border-color"/> -->
                                            <a-input placeholder="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col space-y-[16px]">
                                    <div class="">
                                        <span class="noto-sans-bold text-[16px]">
                                            이메일
                                        </span>
                                    </div>
                                    <div class="w-full flex justify-between space-x-[16px]">
                                        <div class="basis-[49.5%]">
                                            <!-- <input type="text" class="w-full h-10 rounded border-[1px] howard-board-card-border-color"/> -->
                                            <a-input placeholder="" />
                                        </div>
                                        <div class="basis-[1%] flex justify-center items-center">
                                            <span class="noto-sans-bold text-[16px]">@</span>
                                        </div>
                                        <div class="basis-[49.5%]">
                                            <!-- <input type="text" class="w-full h-10 rounded border-[1px] howard-board-card-border-color"/> -->
                                            <a-input placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-box w-full flex justify-between">
                            <span class="noto-sans-bold text-[16px]">
                                개인정보 수집/이용 동의 (필수)
                            </span>
                            <div class="flex items-center">
                                <input type="checkbox" class="">
                                <span class="text-[14px] ml-2 tracking-[-0.7px]">
                                    동의합니다.
                                </span>
                            </div>
                        </div>
                        <div class="container-box mt-4">
                            <div class="w-full border-b border-gray-400">

                            </div>
                        </div>
                        <div class="container-box mt-4 w-full p-10 bg-white">
                            <div class="w-full text-[12px] tracking-[-0.6px] space-y-[24px]">
                                <div class="w-full flex flex-col">
                                    <p class="font-bold">
                                        1. 개인 정보 수집 항목
                                    </p>
                                    <p>
                                        이름, 연락처, 이메일 주소
                                    </p>
                                </div>
                                <div class="w-full flex flex-col">
                                    <p class="font-bold">
                                        2. 개인 정보 수집 목적
                                    </p>
                                    <p>
                                        서비스 이용에 따른 본인 식별, 고지사항 전달, 불만사항의 의사소통 경로 확보 및 기타 원활한 양질의 서비스 제공을 위함입니다.
                                    </p>
                                </div>
                                <div class="w-full flex flex-col">
                                    <p class="font-bold">
                                        3. 개인 정보의 보유, 이용기간
                                    </p>
                                    <p>
                                        원칙적으로 개인정보의 수집 목적 또는 제공받은 목적이 달성되면 지체 없이 파기합니다.
                                        다만, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법률에 의해 보존할 필요가 있는 경우에는 소비자의 불만 또는 분쟁처리에 관한 기록은 3년간 보존합니다.
                                    </p>
                                </div>
                                <div class="w-full">
                                    <div class="w-[70%]">
                                        <div class="w-full flex flex-row">
                                            <div class="basis-[33%] border-y border-r border-gray-200 bg-[#FFF6F2] flex justify-center items-center font-bold py-2">
                                                <p>
                                                    구분
                                                </p>
                                            </div>
                                            <div class="basis-[34%] border-y border-r border-gray-200 bg-[#FFF6F2] flex justify-center items-center font-bold py-2">
                                                <p>
                                                    보존 이유
                                                </p>
                                            </div>
                                            <div class="basis-[33%] border-y border-gray-200 bg-[#FFF6F2] flex justify-center items-center font-bold py-2">
                                                <p>
                                                    보존 기간
                                                </p>
                                            </div>
                                        </div>
                                        <div class="w-full flex flex-row">
                                            <div class="basis-[33%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                                <p>
                                                    가. 계약 또는 청약철회 등에 관한 기록
                                                </p>
                                            </div>
                                            <div class="basis-[34%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                                <p>
                                                    전자상거래 등에서의 소비자보호에 관한 법률
                                                </p>
                                            </div>
                                            <div class="basis-[33%] border-b border-gray-200 flex justify-center items-center px-1 py-2">
                                                <p>
                                                    5년
                                                </p>
                                            </div>
                                        </div>
                                        <div class="w-full flex flex-row">
                                            <div class="basis-[33%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                                <p>
                                                    나. 대금결제 및 재화 등의 공급에 관한 기록
                                                </p>
                                            </div>
                                            <div class="basis-[34%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                                <p>
                                                    전자상거래 등에서의 소비자보호에 관한 법률
                                                </p>
                                            </div>
                                            <div class="basis-[33%] border-b border-gray-200 flex justify-center items-center px-1 py-2">
                                                <p>
                                                    5년
                                                </p>
                                            </div>
                                        </div>
                                        <div class="w-full flex flex-row">
                                            <div class="basis-[33%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                                <p>
                                                    다. 소비자의 불만 또는 분쟁처리에 관한 기록
                                                </p>
                                            </div>
                                            <div class="basis-[34%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                                <p>
                                                    전자상거래 등에서의 소비자보호에 관한 법률
                                                </p>
                                            </div>
                                            <div class="basis-[33%] border-b border-gray-200 flex justify-center items-center px-1 py-2">
                                                <p>
                                                    3년
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full flex flex-col">
                                    <p class="font-bold">
                                        4. 동의를 거부할 권리 및 동의를 거부할 경우의 접수 불가
                                    </p>
                                    <p>
                                        개인정보의 제공에 관한 동의는 원활한 고객상담 및 서비스 제공을 위함이고 거부할 경우 상담접수가 되지 않을 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex justify-center items-center py-20">
                            <button class="howard-btn">
                                등록하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center pb-[120px] pt-[80px]">
                <div class="container-box">
                    <div class="w-full flex justify-start">
                        <span class="noto-sans-bold text-[16px] tracking-[-0.8px]">
                            유의사항
                        </span>
                    </div>
                    <div class="mt-4">
                        <div class="w-full howard-info-border-b2">

                        </div>
                    </div>
                    <div class="w-full mt-4 p-10 bg-[#FAFAFA]">
                        <div class="w-full">
                            <p class="text-[12px] tracking-[-0.6px]">
                                유의사항입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- mobilie -->
    <div id="mobileArea" class="howard-contents lg:hidden w-full">
        <div class="w-full px-4">
            <!-- 메인 타이틀 -->
            <div class="w-full pt-8 pb-6">
                <div class="w-full flex justify-center mb-2">
                    <span class="howard-main-title-mobile">
                        고객의 소리
                    </span>
                </div>
                <div class="w-full flex justify-center">
                    <p class="howard-sub-title-mobile text-center">
                        고객님의 소중한 의견을 들려주세요.
                    </p>
                </div>
            </div>
        </div>
        <div class="w-full bg-[#FFF6F2] px-4 tracking-[-0.3px]">
            <div class="w-full flex justify-end mb-4">
                <span class="text-[#757575] text-[10px] pt-2">
                    ‘*’ 표기된 항목은 필수 입력 사항입니다.
                </span>
            </div>

            <div class="w-full flex flex-col space-y-[8px] pb-4">
                <div class="w-full">
                    <span class="noto-sans-bold text-[12px]">
                        구분*
                    </span>
                </div>
                <div id="mobileHotelSelect" class="w-full">
                    <a-select placeholder="호텔을 선택해 주세요." class="w-full" @change="divChange">
                        <a-select-option value="1">
                            하워드존슨
                        </a-select-option>
                        <a-select-option value="2">
                            데이즈 호텔 앤 스위트
                        </a-select-option>
                    </a-select>
                </div>
                <!-- <div v-if="isHotelSelect" class="w-full">
                    <select @change="hotelSelect($event)" name="" id="mobileSelect" class="w-full h-8 rounded border-[1px] howard-board-card-border-color text-[#212121]">
                        <option value="0">호텔을 선택해 주세요.</option>
                        <option value="1">전체</option>
                        <option value="2">호텔1</option>
                        <option value="3">호텔2</option>
                        <option value="4">호텔3</option>
                    </select>
                </div>
                <div v-else class="w-full">
                    <select @change="hotelSelect($event)" name="" id="mobileSelect" class="w-full h-8 rounded border-[1px] howard-board-card-border-color text-[#BDBDBD]">
                        <option value="0">호텔을 선택해 주세요.</option>
                        <option value="1">전체</option>
                        <option value="2">호텔1</option>
                        <option value="3">호텔2</option>
                        <option value="4">호텔3</option>
                    </select>
                </div>     -->

            </div>
            <div class="w-full flex flex-col space-y-[8px] pb-4">
                <div class="noto-sans-bold w-full text-[12px]">
                    <span class="noto-sans-bold text-[12px]">
                        문의분야*
                    </span>
                </div>
                <div id="mobileInquirySelect" class="w-full">
                    <a-select placeholder="문의 분야를 선택해 주세요." class="w-full" @change="inquiryChange">
                        <a-select-option value="1">
                            질문
                        </a-select-option>
                        <a-select-option value="2">
                            칭찬
                        </a-select-option>
                        <a-select-option value="3">
                            불만
                        </a-select-option>
                        <a-select-option value="4">
                            기타
                        </a-select-option>
                    </a-select>
                </div>
                <!-- <div v-if="isCategorySelect" class="w-full">
                    <select @change="categorySelect($event)" name="" id="mobileSelect" class="w-full h-8 rounded border-[1px] howard-board-card-border-color text-[#212121]">
                        <option value="0">문의분야를 선택해 주세요.</option>
                        <option value="1">분야1</option>
                        <option value="2">분야2</option>
                        <option value="3">분야3</option>
                    </select>
                </div>
                <div v-else class="w-full">
                    <select @change="categorySelect($event)" name="" id="mobileSelect" class="w-full h-8 rounded border-[1px] howard-board-card-border-color text-[#BDBDBD]">
                        <option value="0">문의분야를 선택해 주세요.</option>
                        <option value="1">분야1</option>
                        <option value="2">분야2</option>
                        <option value="3">분야3</option>
                    </select>
                </div> -->
            </div>
            <div class="w-full flex flex-col space-y-[8px] pb-4">
                <div class="noto-sans-bold w-full text-[12px]">
                    <span class="noto-sans-bold text-[12px]">
                        제목*
                    </span>
                </div>
                <div class="w-full">
                    <!-- <input type="text" class="w-full h-8 rounded border-[1px] howard-board-card-border-color" /> -->
                    <a-input placeholder="" class="h-8" />
                </div>
            </div>
            <div class="w-full flex flex-col space-y-[8px] pb-4">
                <div class="w-full text-[12px] font-bold">
                    <span class="noto-sans-bold text-[12px]">
                        내용*
                    </span>
                </div>
                <div class="w-full">
                    <!-- <textarea name="" id="" cols="30" rows="10" class="w-full h-[200px] rounded border-[1px] howard-board-card-border-color">

                    </textarea> -->
                    <a-textarea
                        placeholder=""
                        :auto-size="{ minRows: 4, maxRows: 4 }"
                    />
                </div>
            </div>
            <div class="w-full flex flex-col space-y-[8px] pb-4">
                <div class="w-full text-[12px] font-bold">
                    <span class="noto-sans-bold text-[12px]">
                        이름*
                    </span>
                </div>
                <div class="w-full">
                    <!-- <input type="text" class="w-full h-8 rounded border-[1px] howard-board-card-border-color" /> -->
                    <a-input placeholder="" class="h-8" />
                </div>
            </div>
            <div class="w-full flex flex-col space-y-[8px] pb-4">
                <div class="w-full text-[12px] font-bold">
                    <span class="noto-sans-bold text-[12px]">
                        휴대폰 번호*
                    </span>
                </div>
                <div class="w-full">
                    <!-- <input type="text" class="w-full h-8 rounded border-[1px] howard-board-card-border-color" /> -->
                    <a-input placeholder="" class="h-8" />
                </div>
            </div>
            <div class="w-full flex flex-col space-y-[8px] pb-4">
                <div class="w-full text-[12px] font-bold">
                    <span class="noto-sans-bold text-[12px]">
                        이메일
                    </span>
                </div>
                <div class="w-full flex justify-between space-x-[16px]">
                    <div class="basis-[49.5%]">
                        <!-- <input type="text" class="w-full h-8 rounded border-[1px] howard-board-card-border-color"/> -->
                        <a-input placeholder="" class="h-8" />
                    </div>
                    <div class="basis-[1%] flex justify-center items-center">
                        <span class="noto-sans-bold text-[12px]">@</span>
                    </div>
                    <div class="basis-[49.5%]">
                        <!-- <input type="text" class="w-full h-8 rounded border-[1px] howard-board-card-border-color"/> -->
                        <a-input placeholder="" class="h-8" />
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-between items-center">
                <div class="text-[12px] font-bold">
                    <span class="noto-sans-bold text-[12px]">
                        개인정보 수집/이용 동의 (필수)
                    </span>
                </div>
                <div class="flex items-center">
                    <input type="checkbox">
                    <span class="text-[12px] ml-1">동의합니다.</span>
                </div>
            </div>
            <div class="w-full border-b border-gray-200 my-3">

            </div>
            <div class="w-full p-4 bg-white mb-4">
                <!-- <p class="noto-sans-light text-[10px] tracking-[-0.5px]">
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다.개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다.개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다.
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다.개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다.개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다.
                </p> -->
                <div class="w-full noto-sans-light text-[10px] tracking-[-0.5px] text-black space-y-[16px]">
                    <div class="w-full flex flex-col">
                        <p class="font-bold">
                            1. 개인 정보 수집 항목
                        </p>
                        <p>
                            이름, 연락처, 이메일 주소
                        </p>
                    </div>
                    <div class="w-full flex flex-col">
                        <p class="font-bold">
                            2. 개인 정보 수집 목적
                        </p>
                        <p>
                            서비스 이용에 따른 본인 식별, 고지사항 전달, 불만사항의 의사소통 경로 확보 및 기타 원활한 양질의 서비스 제공을 위함입니다.
                        </p>
                    </div>
                    <div class="w-full flex flex-col">
                        <p class="font-bold">
                            3. 개인 정보의 보유, 이용기간
                        </p>
                        <p>
                            원칙적으로 개인정보의 수집 목적 또는 제공받은 목적이 달성되면 지체 없이 파기합니다.
                            다만, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법률에 의해 보존할 필요가 있는 경우에는 소비자의 불만 또는 분쟁처리에 관한 기록은 3년간 보존합니다.
                        </p>
                    </div>
                    <div class="w-full">
                        <div class="w-full">
                            <div class="w-full flex flex-row">
                                <div class="basis-[33%] border-y border-r border-gray-200 bg-[#FFF6F2] flex justify-center items-center font-bold py-2">
                                    <p>
                                        구분
                                    </p>
                                </div>
                                <div class="basis-[34%] border-y border-r border-gray-200 bg-[#FFF6F2] flex justify-center items-center font-bold py-2">
                                    <p>
                                        보존 이유
                                    </p>
                                </div>
                                <div class="basis-[33%] border-y border-gray-200 bg-[#FFF6F2] flex justify-center items-center font-bold py-2">
                                    <p>
                                        보존 기간
                                    </p>
                                </div>
                            </div>
                            <div class="w-full flex flex-row">
                                <div class="basis-[33%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                    <p>
                                        가. 계약 또는 청약철회 등에 관한 기록
                                    </p>
                                </div>
                                <div class="basis-[34%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                    <p>
                                        전자상거래 등에서의 소비자보호에 관한 법률
                                    </p>
                                </div>
                                <div class="basis-[33%] border-b border-gray-200 flex justify-center items-center px-1 py-2">
                                    <p>
                                        5년
                                    </p>
                                </div>
                            </div>
                            <div class="w-full flex flex-row">
                                <div class="basis-[33%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                    <p>
                                        나. 대금결제 및 재화 등의 공급에 관한 기록
                                    </p>
                                </div>
                                <div class="basis-[34%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                    <p>
                                        전자상거래 등에서의 소비자보호에 관한 법률
                                    </p>
                                </div>
                                <div class="basis-[33%] border-b border-gray-200 flex justify-center items-center px-1 py-2">
                                    <p>
                                        5년
                                    </p>
                                </div>
                            </div>
                            <div class="w-full flex flex-row">
                                <div class="basis-[33%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                    <p>
                                        다. 소비자의 불만 또는 분쟁처리에 관한 기록
                                    </p>
                                </div>
                                <div class="basis-[34%] border-b border-r border-gray-200 flex justify-start items-center px-1 py-2">
                                    <p>
                                        전자상거래 등에서의 소비자보호에 관한 법률
                                    </p>
                                </div>
                                <div class="basis-[33%] border-b border-gray-200 flex justify-center items-center px-1 py-2">
                                    <p>
                                        3년
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col">
                        <p class="font-bold">
                            4. 동의를 거부할 권리 및 동의를 거부할 경우의 접수 불가
                        </p>
                        <p>
                            개인정보의 제공에 관한 동의는 원활한 고객상담 및 서비스 제공을 위함이고 거부할 경우 상담접수가 되지 않을 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-center pb-4">
                <button class="howard-btn-mobile">
                    등록하기
                </button>
            </div>
        </div>
        <div class="w-full px-4 mb-8">
            <div class="w-full mt-6">
                <div class="">
                    <span class="noto-sans-bold text-[12px]">
                        유의사항
                    </span>
                </div>
            </div>
            <div class="w-full howard-info-border-b my-3">

            </div>
            <div class="w-full bg-[#FAFAFA] p-4">
                <p class="noto-sans-light text-[10px] tracking-[-0.5px]">
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다.개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다.개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다.
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다.개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다.개인정보 수집/이용 동의에 대한 내용입니다. 
                    개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다. 개인정보 수집/이용 동의에 대한 내용입니다.
                </p>
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
        return {
            isHotelSelect: false,
            isCategorySelect: false
        }
    },
    created() {
      
    },
    methods: {
        divChange(value) {
            // console.log(`selected ${value}`);
        },
        inquiryChange(value) {

        },
        hotelSelect(event) {
            if(event.target.value != null && event.target.value != undefined && event.target.value != "0" && event.target.value != 0) {
                this.isHotelSelect = true;
            } else {
                this.isHotelSelect = false;
            }
        },
        categorySelect(event) {
            if(event.target.value != null && event.target.value != undefined && event.target.value != "0" && event.target.value != 0) {
                this.isCategorySelect = true;
            } else {
                this.isCategorySelect = false;
            }
        },
    },
}
</script>
<style>
input {
    accent-color: #EE792F; 
}

input[type="checkbox"]:checked {
    color: white;
    background-color: white;
}

#webSelect {
  appearance:none;
	-webkit-appearance:none;
	-moz-appearance:none;
	-ms-appearance:none;
    background-position: calc(100% - 12px) center !important;
    background: url("~/assets/images/arrow_down_line_grey_24.svg") no-repeat;
    padding: 8px 32px 8px 16px;
    background-color: white;
}
#webSelect option:first-child{
  color: #BDBDBD;
}

#webSelect option { 
  color: #212121;
}


#mobileSelect {
  appearance:none;
	-webkit-appearance:none;
	-moz-appearance:none;
	-ms-appearance:none;
    background-position: calc(100% - 12px) center !important;
    background: url("~/assets/images/arrow_down_line_grey_24.svg") no-repeat;
    padding: 4px 32px 4px 16px;
    background-color: white;
    font-size: 10px;
}
#mobileSelect option:first-child{
  color: #BDBDBD;
  font-size: 10px;
}

#mobileSelect option { 
  color: #212121;
  font-size: 10px;
}

#desktopHotelSelect svg {
    color: #bfbfbf;
}

#desktopInquirySelect svg {
    color: #bfbfbf;
}

#mobileHotelSelect svg {
    color: #bfbfbf;
}

#mobileInquirySelect svg {
    color: #bfbfbf;
}

#desktopArea .ant-select-selection--single {
    height: 40px;
    padding-top: 4px;
    padding-bottom: 4px;
}

#desktopArea .ant-input {
    height: 40px;
}

#mobileArea .ant-select-selection--single {
    height: 32px;
}

#mobileArea .ant-input {
    height: 32px;
}
</style>
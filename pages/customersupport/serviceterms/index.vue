<template>
<div>
    <!-- 이용약관 -->
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full">
            <div class="flex flex-col justify-items-center items-center py-[120px] bg-[#FFF6F2]">
                <div class="">
                    <span class="howard-main-title">
                        이용약관
                    </span>
                </div>
                <div class="my-6">
                    <p class="howard-sub-title">
                        하워드존슨 인천에어포트 이용약관 입니다.
                    </p>
                </div>
                <div class="flex justify-center items-center">
                    <a-select default-value="1" @change="handleChange" class="w-60">
                        <a-select-option value="1">
                            V.1.0
                        </a-select-option>
                    </a-select>
                </div>
            </div>
            <div v-show="selectedVersion === '1'" class="w-full flex justify-center">
                <!-- <div class="container-box pt-[80px] pb-[120px]"> -->
                <div class="container-box py-20">
                    <!-- 제 1 장 총칙 -->
                    <div class="w-full mb-8">
                        <div class="pb-4">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제 1 장 총칙
                            </span>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 1 조 [목적]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    이 약관은 하워드존슨 바이 윈덤 인천공항(이하 ‘호텔’)에서 운영하는 홈페이지 <span style="color: #EE792F;">www.howardjohnsonincheon.com</span>에서 제공하는 인터넷 서비스(이하 ‘서비스’)의 이용 조건 및 절차에 관한 기본적인 사항에 관련 정의를 목적으로 합니다.
                                </p>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 2 조 [약관의 효력 및 변경]
                                </span>
                                <div class="pl-[42px] pt-4">
                                    <ul style="list-style-type: decimal;">
                                        <li style="padding-left: 4px;">
                                            이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            이 약관의 내용은 서비스 화면에 이를 공지하여 이용자에게 통지함으로써 효력을 발생합니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            호텔은 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 본 조 제 2항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다. 변경된 약관의 효력 발생일 이후 7일 이상 계속적인 서비스 이용은 약관의 변경사항에 동의한 것으로 간주됩니다.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 3 조 [약관 이외의 준칙]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    이 약관에 언급되지 않은 사항이 전기통신기본법, 전기통신사업법, 기타 관련법령에 규정되어 있는 경우 그 규정에 따라 적용할 수 있습니다.
                                </p>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 4 조 [용어의 정의]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    이 약관에서 사용하는 이용자란 호텔에서 운영하는 홈페이지를 방문하고 이를 이용하는 고객을 말합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 제 2 장 서비스 이용계약 -->
                    <div class="w-full mb-8">
                        <div class="pb-4">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제 2 장 서비스 이용계약
                            </span>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 5 조 [이용계약의 성립]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    서비스 이용계약은 이용자가 호텔이 정한 양식에 따라 호텔 예약 시 필요한 정보를 입력하고 “약관에 동의합니다.”라는 물음에 “동의” 버튼을 클릭하는 것으로 서비스 이용신청을 하고, 호텔이 이를 승인함으로써 성립합니다.
                                </p>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 6 조 [예약신청]
                                </span>
                                <div class="pl-[42px] pt-4">
                                    <ul style="list-style-type: decimal;">
                                        <li style="padding-left: 4px;">
                                            본 서비스를 이용하기 위해 이용자는 호텔이 정한 소정의 양식에 이용자의 개인 정보를 기록하여 예약을 신청합니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            만 19세 미만 아동은 본 서비스를 이용하실 수 없습니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            예약 신청 양식에 기재하는 모든 이용자 정보는 모두 실제 데이터인 것으로 간주됩니다. 실명이나 실제 정보를 입력하지 않은 사용자는 법적인 보호를 받을 수 없으며 서비스의 제한을 받을 수 있습니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            호텔은 예약자 중 온라인상 공인된 본인 확인이 어려운 이용자에 한하여 추가 확인 절차를 요구할 수 있습니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            이용자는 서비스 이용을 위해 신청할 경우 현재의 사실과 일치하는 완전한 정보를 제공하여야 하고, 이용자는 예약 시 제출한 이용자 정보가 변경되었을 경우 호텔이 정한 절차에 따라 정보 변경 등을 통하여 이를 수정해야 할 의무가 있습니다.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 7 조 [예약신청의 승낙]
                                </span>
                                <div class="pl-[42px] pt-4">
                                    <ul style="list-style-type: decimal;">
                                        <li style="padding-left: 4px;">
                                            호텔은 제6조에 따른 예약 신청 고객에 대하여 제2항, 제3항의 경우를 예외로 하여 서비스 예약 신청을 승낙합니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            호텔은 다음에 해당하는 경우에 그 신청에 대한 승낙 제한 사유가 해소될 때까지 승낙을 유보할 수 있습니다.
                                            <div class="pl-[42px] py-3">
                                                <ul style="list-style-type: disc;">
                                                    <li style="padding-left: 4px;">
                                                        서비스 관련 설비에 여유가 없는 경우
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        기술상 장애사유가 있는 경우
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        기타 호텔이 필요하다고 인정되는 경우
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li style="padding-left: 4px;">
                                            호텔은 다음에 해당하는 경우 이용 신청에 대해 승낙을 하지 않을 수 있습니다.
                                            <div class="pl-[42px] py-3">
                                                <ul style="list-style-type: disc;">
                                                    <li style="padding-left: 4px;">
                                                        다른 사람의 명의를 사용하여 신청한 경우
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        예약신청 시 이용자 정보를 허위로 기재하여 신청한 경우
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        기타 회사 소정의 이용신청요건을 충족하지 못하는 경우
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 8 조 [이용자 정보의 변경]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    이용자은 예약신청 시 기재한 정보가 변경되었을 경우, 온라인으로 수정을 하여야 하며 미 변경으로 인하여 발생되는 문제의 책임은 이용자에게 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 제 3 장 의무 -->
                    <div class="w-full mb-8">
                        <div class="pb-4">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제 3 장 의무
                            </span>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 9 조 [호텔의 의무]
                                </span>
                                <div class="pl-[42px] pt-4">
                                    <ul style="list-style-type: decimal;">
                                        <li style="padding-left: 4px;">
                                            호텔은 서비스 제공과 관련하여 취득한 이용자의 개인정보를 본인의 사전 승낙 없이 타인에게 공개 또는 배포할 수 없습니다. 단, 다음 각 호에 해당하는 경우는 예외입니다.
                                            <div class="pl-[42px] py-3">
                                                <ul style="list-style-type: disc;">
                                                    <li style="padding-left: 4px;">
                                                        전기통신기본법 등의 법률의 규정에 의해 국가기관의 요구가 있는 경우
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        기타 관계법령에서 정한 절차에 따른 요청이 있는 경우
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li style="padding-left: 4px;">
                                            본 조 제1 항의 범위 내에서, 호텔은 업무와 관련하여 이용자 전체 또는 일부의 개인 정보에 관한 통계 자료를 작성하여 이를 사용할 수 있고, 서비스를 통하여 이용자의 컴퓨터 쿠키를 전송할 수 있습니다.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 10 조 [이용자의 의무]
                                </span>
                                <div class="pl-[42px] pt-4">
                                    <ul style="list-style-type: decimal;">
                                        <li style="padding-left: 4px;">
                                            이용자는 서비스 이용 시 다음 각 호의 행위를 하지 않아야 합니다.
                                            <div class="pl-[42px] py-3">
                                                <ul style="list-style-type: disc;">
                                                    <li style="padding-left: 4px;">
                                                        다른 이용자의 정보를 부정하게 사용하는 행위
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        서비스에서 얻은 정보를 호텔의 사전승낙 없이 이용자의 개인용도 이외의 목적으로 복제하거나 이를 변경, 출판 및 방송 등에 사용하거나 타인에게 제공하는 행위
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        호텔의 저작권, 타인의 저작권 등 기타 권리를 침해하는 행위
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        공공질서 및 미풍양속에 위반되는 내용이 정보, 문장, 도형 등을 통해 타인에게 유포하는 행위
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        범죄와 결부된다고 객관적으로 판단하는 행위
                                                    </li>
                                                    <li style="padding-left: 4px;">
                                                        기타 관계법령에 위배되는 행위
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li style="padding-left: 4px;">
                                            이용자는 관계법령, 이 약관에서 규정하는 사항, 서비스 이용 안내 및 주의 사항을 준수 하여야 합니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            이용자는 내용별로 호텔이 서비스 공지사항에 게시하거나 별도로 공지한 이용 제한 사항을 준수하여야 합니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            이용자는 호텔의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없습니다.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 제 4 장 서비스 제공 및 이용 -->
                    <div class="w-full mb-8">
                        <div class="pb-4">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제 4 장 서비스 제공 및 이용
                            </span>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 11 조 [제공 서비스]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    호텔은 이용자의 서비스 이용 중 필요가 있다고 인정되는 다양한 정보에 대해 홈페이지 공지사항을 통해 이용자에게 제공할 수 있습니다.
                                </p>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 12 조 [광고주와의 거래]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    호텔은 이용자가 본 서비스상에 게재되어 있거나 본 서비스를 통한 광고주의 판촉활동에 이용자가 참여하거나 교신 또는 거래의 결과로써 발생하는 모든 손실 또는 손해에 대해 책임을 지지 않습니다.
                                </p>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 13 조 [서비스 이용 책임]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    이용자는 서비스를 이용하여 불법 상품을 판매하는 영업 활동을 할 수 없으며 특히 해킹, 돈벌기 광고, 음란사이트를 통한 상업행위, 상용 S/W 불법배포 등을 할 수 없습니다. 이를 어기고 발생한 영업활동의 결과 및 손실, 관계기관에 의한 구속 등 법적 조치 등에 관해서는 호텔이 책임을 지지 않습니다.
                                </p>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 14 조 [서비스 제한 및 정지]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신 사업자가 전기통신서비스를 중지하는 둥 기타 불가항력적 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한 하거나 정지할 수 있습니다. 호텔은 본 조 제 1 항의 규정에 의하여 서비스의 이용을 제한하거나 정지한 때에는 그 사유 및 제한기간 등을 지체 없이 이용자에게 알려야 합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- 제 5 장 기타 -->
                    <div class="w-full">
                        <div class="pb-4">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제 5 장 기타
                            </span>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 15 조 [면책조항]
                                </span>
                                <div class="pl-[42px] pt-4">
                                    <ul style="list-style-type: decimal;">
                                        <li style="padding-left: 4px;">
                                            호텔은 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            호텔은 이용자의 귀책사유로 인하여 서비스 이용에 장애가 발생한 경우에는 책임이 면제됩니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            호텔은 이용자가 호텔의 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나, 서비스 자료에 대한 취사 선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.
                                        </li>
                                        <li style="padding-left: 4px;">
                                            호텔은 이용자가 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 그 내용에 관하여는 책임이 면제됩니다.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[16px] noto-sans-bold">
                                    제 16 조 [관할법원]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    본 약관상의 분쟁에 대해 소송이 제기될 경우 호텔의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.
                                </p>
                            </div>
                        </div>
                        <div class="pb-4">
                            <div class="flex flex-col">
                                <span class="text-[14px] noto-sans-light">
                                    [부칙]
                                </span>
                                <p class="text-[14px] noto-sans-light">
                                    (시행일) 이 약관은 2017년 12월 31일부터 시행합니다.
                                </p>
                            </div>
                        </div>
                        
                    </div>


                </div>
            </div>
        </div>
    </div>
    <!-- mobilie -->
    <div class="howard-contents lg:hidden w-full">
        <!-- 메인 타이틀 -->
        <div class="w-full bg-[#FFF6F2] py-8 mb-8">
            <div class="w-full flex justify-center mb-2">
                <span class="howard-main-title-mobile">
                    이용약관
                </span>
            </div>
            <div class="w-full flex justify-center mb-2">
                <span class="howard-sub-title-mobile text-center">
                    하워드존슨 인천에어포트 이용약관 입니다.
                </span>
            </div>
            <div class="w-full flex justify-center items-center">
                <a-select default-value="1" @change="handleChange" class="w-40">
                    <a-select-option value="1">
                        V.1.0
                    </a-select-option>
                </a-select>
            </div>
        </div>


        <div v-show="selectedVersion === '1'" class="w-full px-4">
            <!-- 제 1 장 총칙 -->
            <div class="w-full mb-8">
                <div class="w-full mb-6">
                    <span class="noto-sans-bold text-[14px] text-[#EE792F]"  style="color: #EE792F;">
                        제 1 장 총칙
                    </span>
                </div>

                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 1 조 [목적]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            이 약관은 하워드존슨 바이 윈덤 인천공항(이하 ‘호텔’)에서 운영하는 홈페이지 <span style="color: #EE792F;">www.howardjohnsonincheon.com</span>에서 제공하는 인터넷 서비스(이하 ‘서비스’)의 이용 조건 및 절차에 관한 기본적인 사항에 관련 정의를 목적으로 합니다.
                        </p>
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 2 조 [약관의 효력 및 변경]
                        </span>
                    </div>
                    <div class="w-full">
                        <div class="pl-[32px] pt-2 text-xs">
                            <ul style="list-style-type: decimal;">
                                <li style="padding-left: 4px;">
                                    이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.
                                </li>
                                <li style="padding-left: 4px;">
                                    이 약관의 내용은 서비스 화면에 이를 공지하여 이용자에게 통지함으로써 효력을 발생합니다.
                                </li>
                                <li style="padding-left: 4px;">
                                    호텔은 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 본 조 제 2항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다. 변경된 약관의 효력 발생일 이후 7일 이상 계속적인 서비스 이용은 약관의 변경사항에 동의한 것으로 간주됩니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 3 조 [약관 이외의 준칙]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            이 약관에 언급되지 않은 사항이 전기통신기본법, 전기통신사업법, 기타 관련법령에 규정되어 있는 경우 그 규정에 따라 적용할 수 있습니다.
                        </p>
                    </div>
                </div>
                <div class="w-full">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 4 조 [용어의 정의]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            이 약관에서 사용하는 이용자란 호텔에서 운영하는 홈페이지를 방문하고 이를 이용하는 고객을 말합니다.
                        </p>
                    </div>
                </div>
            </div>
            <!-- 제 2 장 서비스 이용계약 -->
            <div class="w-full mb-6">
                <div class="w-full mb-6">
                    <span class="noto-sans-bold text-[14px] text-[#EE792F]"  style="color: #EE792F;">
                        제 2 장 서비스 이용계약
                    </span>
                </div>

                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 5 조 [이용계약의 성립]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            서비스 이용계약은 이용자가 호텔이 정한 양식에 따라 호텔 예약 시 필요한 정보를 입력하고 “약관에 동의합니다.”라는 물음에 “동의” 버튼을 클릭하는 것으로 서비스 이용신청을 하고, 호텔이 이를 승인함으로써 성립합니다.
                        </p>
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 6 조 [예약신청]
                        </span>
                    </div>
                    <div class="w-full">
                        <div class="pl-[32px] pt-2 text-xs">
                            <ul style="list-style-type: decimal;">
                                <li style="padding-left: 4px;">
                                    본 서비스를 이용하기 위해 이용자는 호텔이 정한 소정의 양식에 이용자의 개인 정보를 기록하여 예약을 신청합니다.
                                </li>
                                <li style="padding-left: 4px;">
                                    만 19세 미만 아동은 본 서비스를 이용하실 수 없습니다.
                                </li>
                                <li style="padding-left: 4px;">
                                    예약 신청 양식에 기재하는 모든 이용자 정보는 모두 실제 데이터인 것으로 간주됩니다. 실명이나 실제 정보를 입력하지 않은 사용자는 법적인 보호를 받을 수 없으며 서비스의 제한을 받을 수 있습니다.
                                </li>
                                <li style="padding-left: 4px;">
                                    호텔은 예약자 중 온라인상 공인된 본인 확인이 어려운 이용자에 한하여 추가 확인 절차를 요구할 수 있습니다.
                                </li>
                                <li style="padding-left: 4px;">
                                    이용자는 서비스 이용을 위해 신청할 경우 현재의 사실과 일치하는 완전한 정보를 제공하여야 하고, 이용자는 예약 시 제출한 이용자 정보가 변경되었을 경우 호텔이 정한 절차에 따라 정보 변경 등을 통하여 이를 수정해야 할 의무가 있습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 7 조 [예약신청의 승낙]
                        </span>
                    </div>
                    <div class="w-full">
                        <div class="pl-[32px] pt-2 text-xs">
                            <ul style="list-style-type: decimal;">
                                <li style="padding-left: 4px;">
                                    호텔은 제6조에 따른 예약 신청 고객에 대하여 제2항, 제3항의 경우를 예외로 하여 서비스 예약 신청을 승낙합니다.
                                </li>
                                <li style="padding-left: 4px;">
                                    호텔은 다음에 해당하는 경우에 그 신청에 대한 승낙 제한 사유가 해소될 때까지 승낙을 유보할 수 있습니다.
                                    <div class="pl-[32px] py-[6px] text-xs">
                                        <ul style="list-style-type: disc;">
                                            <li style="padding-left: 4px;">
                                                서비스 관련 설비에 여유가 없는 경우
                                            </li>
                                            <li style="padding-left: 4px;">
                                                기술상 장애사유가 있는 경우
                                            </li>
                                            <li style="padding-left: 4px;">
                                                기타 호텔이 필요하다고 인정되는 경우
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li style="padding-left: 4px;">
                                    호텔은 다음에 해당하는 경우 이용 신청에 대해 승낙을 하지 않을 수 있습니다.
                                    <div class="pl-[32px] pt-[6px] text-xs">
                                        <ul style="list-style-type: disc;">
                                            <li style="padding-left: 4px;">
                                                다른 사람의 명의를 사용하여 신청한 경우
                                            </li>
                                            <li style="padding-left: 4px;">
                                                예약신청 시 이용자 정보를 허위로 기재하여 신청한 경우
                                            </li>
                                            <li style="padding-left: 4px;">
                                                사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우
                                            </li>
                                            <li style="padding-left: 4px;">
                                                기타 회사 소정의 이용신청요건을 충족하지 못하는 경우
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 8 조 [이용자 정보의 변경]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            이용자은 예약신청 시 기재한 정보가 변경되었을 경우, 온라인으로 수정을 하여야 하며 미 변경으로 인하여 발생되는 문제의 책임은 이용자에게 있습니다.
                        </p>
                    </div>
                </div>
            </div>
            <!-- 제 3 장 의무 -->
            <div class="w-full mb-6">
                <div class="w-full mb-6">
                    <span class="noto-sans-bold text-[14px] text-[#EE792F]"  style="color: #EE792F;">
                        제 3 장 의무
                    </span>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 9 조 [호텔의 의무]
                        </span>
                    </div>
                    <div class="w-full">
                        <div class="pl-[32px] pt-2 text-xs">
                            <ul style="list-style-type: decimal;">
                                <li style="padding-left: 4px;">
                                    호텔은 서비스 제공과 관련하여 취득한 이용자의 개인정보를 본인의 사전 승낙 없이 타인에게 공개 또는 배포할 수 없습니다. 단, 다음 각 호에 해당하는 경우는 예외입니다.
                                    <div class="pl-[32px] py-[6px] text-xs">
                                        <ul style="list-style-type: disc;">
                                            <li style="padding-left: 4px;">
                                                전기통신기본법 등의 법률의 규정에 의해 국가기관의 요구가 있는 경우
                                            </li>
                                            <li style="padding-left: 4px;">
                                                범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우
                                            </li>
                                            <li style="padding-left: 4px;">
                                                기타 관계법령에서 정한 절차에 따른 요청이 있는 경우
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li style="padding-left: 4px;">
                                    본 조 제1 항의 범위 내에서, 호텔은 업무와 관련하여 이용자 전체 또는 일부의 개인 정보에 관한 통계 자료를 작성하여 이를 사용할 수 있고, 서비스를 통하여 이용자의 컴퓨터 쿠키를 전송할 수 있습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 10 조 [이용자의 의무]
                        </span>
                    </div>
                    <div class="w-full">
                        <div class="pl-[32px] pt-2 text-xs">
                            <ul style="list-style-type: decimal;">
                                <li style="padding-left: 4px;">
                                    이용자는 서비스 이용 시 다음 각 호의 행위를 하지 않아야 합니다.
                                    <div class="pl-[32px] py-[6px] text-xs">
                                        <ul style="list-style-type: disc;">
                                            <li style="padding-left: 4px;">
                                                다른 이용자의 정보를 부정하게 사용하는 행위
                                            </li>
                                            <li style="padding-left: 4px;">
                                                서비스에서 얻은 정보를 호텔의 사전승낙 없이 이용자의 개인용도 이외의 목적으로 복제하거나 이를 변경, 출판 및 방송 등에 사용하거나 타인에게 제공하는 행위
                                            </li>
                                            <li style="padding-left: 4px;">
                                                호텔의 저작권, 타인의 저작권 등 기타 권리를 침해하는 행위
                                            </li>
                                            <li style="padding-left: 4px;">
                                                공공질서 및 미풍양속에 위반되는 내용이 정보, 문장, 도형 등을 통해 타인에게 유포하는 행위
                                            </li>
                                            <li style="padding-left: 4px;">
                                                범죄와 결부된다고 객관적으로 판단하는 행위
                                            </li>
                                            <li style="padding-left: 4px;">
                                                기타 관계법령에 위배되는 행위
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li style="padding-left: 4px;">
                                    이용자는 관계법령, 이 약관에서 규정하는 사항, 서비스 이용 안내 및 주의 사항을 준수 하여야 합니다.
                                </li>
                                <li style="padding-left: 4px;">
                                    이용자는 내용별로 호텔이 서비스 공지사항에 게시하거나 별도로 공지한 이용 제한 사항을 준수하여야 합니다.
                                </li>
                                <li style="padding-left: 4px;">
                                    이용자는 호텔의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없습니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
             <!-- 제 4 장 서비스 제공 및 이용 -->
            <div class="w-full mb-8">
                <div class="w-full mb-6">
                    <span class="noto-sans-bold text-[14px] text-[#EE792F]"  style="color: #EE792F;">
                        제 4 장 서비스 제공 및 이용
                    </span>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 11 조 [제공 서비스]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            호텔은 이용자의 서비스 이용 중 필요가 있다고 인정되는 다양한 정보에 대해 홈페이지 공지사항을 통해 이용자에게 제공할 수 있습니다.
                        </p>
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 12 조 [광고주와의 거래]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            호텔은 이용자가 본 서비스상에 게재되어 있거나 본 서비스를 통한 광고주의 판촉활동에 이용자가 참여하거나 교신 또는 거래의 결과로써 발생하는 모든 손실 또는 손해에 대해 책임을 지지 않습니다.
                        </p>
                    </div>
                </div>
               <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 13 조 [서비스 이용 책임]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            이용자는 서비스를 이용하여 불법 상품을 판매하는 영업 활동을 할 수 없으며 특히 해킹, 돈벌기 광고, 음란사이트를 통한 상업행위, 상용 S/W 불법배포 등을 할 수 없습니다. 이를 어기고 발생한 영업활동의 결과 및 손실, 관계기관에 의한 구속 등 법적 조치 등에 관해서는 호텔이 책임을 지지 않습니다.
                        </p>
                    </div>
                </div>
                <div class="w-full">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 14 조 [서비스 제한 및 정지]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 전기통신사업법에 의한 기간통신 사업자가 전기통신서비스를 중지하는 둥 기타 불가항력적 사유가 있는 경우에는 서비스의 전부 또는 일부를 제한 하거나 정지할 수 있습니다. 호텔은 본 조 제 1 항의 규정에 의하여 서비스의 이용을 제한하거나 정지한 때에는 그 사유 및 제한기간 등을 지체 없이 이용자에게 알려야 합니다.
                        </p>
                    </div>
                </div>
                
                
            </div>
            <!-- 제 5 장 기타 -->
            <div class="w-full mb-6">
                <div class="w-full mb-6">
                    <span class="noto-sans-bold text-[14px] text-[#EE792F]"  style="color: #EE792F;">
                        제 5 장 기타
                    </span>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 15 조 [면책조항]
                        </span>
                    </div>
                    <div class="w-full">
                        <div class="pl-[32px] pt-2 text-xs">
                            <ul style="list-style-type: decimal;">
                                <li style="padding-left: 4px;">
                                    호텔은 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                                </li>
                                <li style="padding-left: 4px;">
                                    호텔은 이용자의 귀책사유로 인하여 서비스 이용에 장애가 발생한 경우에는 책임이 면제됩니다.
                                </li>
                                <li style="padding-left: 4px;">
                                     호텔은 이용자가 호텔의 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나, 서비스 자료에 대한 취사 선택 또는 이용으로 발생하는 손해 등에 대해서는 책임이 면제됩니다.
                                </li>
                                <li style="padding-left: 4px;">
                                     호텔은 이용자가 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 그 내용에 관하여는 책임이 면제됩니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-full mb-2">
                    <div class="w-full text-[12px]">
                        <span class="noto-sans-bold ">
                            제 16 조 [관할법원]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            본 약관상의 분쟁에 대해 소송이 제기될 경우 호텔의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.
                        </p>
                    </div>
                </div>
                <div class="w-full">
                    <div class="w-full text-[12px]">
                        <span class="">
                            [부칙]
                        </span>
                    </div>
                    <div class="w-full text-[12px]">
                        <p class="noto-sans-light">
                            (시행일) 이 약관은 2017년 12월 31일부터 시행합니다.
                        </p>
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
        return {
            selectedVersion: '',
        }
    },
    created() {
      this.selectedVersion = '1';
    },
    methods: {
        handleChange(value) {
            this.selectedVersion = value;
        },
    },
}
</script>
<style>
    
</style>
<template>
<div>
    <!-- 개인정보 처리 방침 -->
    <!-- web -->
    <div class="howard-contents hidden lg:block w-full">
        <div class="w-full">
            <div class="flex flex-col justify-items-center items-center py-[120px] bg-[#FFF6F2]">
                <div class="">
                    <span class="howard-main-title">
                        개인정보 처리방침
                    </span>
                </div>
                <div class="my-6">
                    <p class="howard-sub-title">
                        하워드존슨 인천에어포트 개인정보 처리방침 입니다.
                    </p>
                </div>
                <div class="flex justify-center items-center">
                    <a-select default-value="1" @change="handleChange" class="w-60">
                        <a-select-option value="1">
                            V.1.0
                        </a-select-option>
                        <!-- <a-select-option value="2">
                            test
                        </a-select-option> -->
                    </a-select>
                    <!-- <button class="px-3 py-[5px] border border-gray-400 rounded-lg bg-gray-400 text-white font-bold hover:bg-gray-300 hover:border-gray-300" @click="show">
                        보기
                    </button> -->
                </div>
            </div>
        </div>
        <!-- V.1.0 -->
        <div v-show="selectedVersion === '1'" class="w-full flex justify-center">
            <div class="container-box">
                <div class="container-box w-full pt-[80px] pb-[120px]">
                    <div class="w-full flex flex-col space-y-[80px]">
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제1조 총칙
                            </span>
                            <div class="space-y-[40px] text-[16px] tracking-[-0.8px]">    
                                <div>
                                    <p class="">
                                        하워드존슨 바이 윈덤 인천공항은 이용자들의 개인 정보 보호를 매우 중요하게 생각하며,
                                        이용자가 회사의 서비스 이용을 위해 온라인상에서 회사에 제공한 개인 정보가 보호 받을 수 있도록 최선을 다하고 있습니다. 
                                        이에 회사는 개인 정보 보호법, 정보 통신망 이용 촉진 등에 관한 법률 등 정보 통신 서비스 제공자가 준수하여야 할 관련 법규상의 
                                        개인 정보 보호 규정 및 정보통신부가 제정한 개인 정보 보호 지침을 준수하고 있습니다. 하워드존슨 바이 윈덤 인천공항은 
                                        개인 정보 보호 정책을 통하여 이용자들이 제공하는 개인 정보가 어떠한 용도와 방식으로 이용되고 있으며 개인 정보 보호를 위해 
                                        어떠한 조치가 취해지고 있는지 알려드립니다.
                                    </p>
                                </div>
                                <div>
                                    <p class="">
                                        하워드존슨 바이 윈덤 인천공항은 개인 정보 보호 정책을 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나 용이하게 볼 수 있도록 조치하고 있습니다.
                                    </p>
                                </div>
                                <div>
                                    <p class="">
                                        하워드존슨 바이 윈덤 인천공항의 개인 정보 보호 정책은 정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 수시로 
                                        변경될 수 있고, 이에 따른 개인 정보 보호 정책의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 그리고 개인 정보 보호 정책을
                                        개정하는 경우 하워드 존슨 인천 에어포트는 그 변경사항에 대하여 즉시 홈페이지를 통하여 게시하고 개정 일자 등을 부여하여
                                        개정된 사항을 이용자들이 쉽게 알아볼 수 있도록 하고 있습니다. 이용자들께서는 사이트 방문 시 수시로 확인하시기 바랍니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제2조 개인 정보의 수집 및 이용 목적
                            </span>
                            <div class="space-y-[40px] text-[16px] tracking-[-0.8px]">    
                                <div>
                                    <p class="">
                                        하워드존슨 바이 윈덤 인천공항 홈페이지는 별도의 사용자 등록 없이 언제든지 사용할 수 있습니다. 하워드존슨 바이 윈덤 인천공항은 
                                        이용자들에게 맞춤식 서비스를 비롯해, 보다 향상된 양질의 서비스를 제공하기 위해 이용자 개인의 정보를 수집하고 있습니다. 
                                        하워드존슨 바이 윈덤 인천공항은 이용자의 사전 동의 없이는 이용자의 개인 정보를 함부로 공개하지 않습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제3조 개인 정보 수집 및 이용 범위
                            </span>
                            <div class="space-y-[40px] text-[16px] tracking-[-0.8px]">    
                                <div>
                                    <p class="">
                                        하워드존슨 바이 윈덤 인천공항은 신규 서비스 개발이나 컨텐츠의 확충 시 기존 이용자들이 회사에 제공한 개인정보를 바탕으로 개발해야 할
                                            서비스의 우선순위를 보다 더 효율적으로 정하고, 이용자들이 필요로 할 컨텐츠를 합리적으로 선택하여 제공할 수 있습니다.
                                    </p>
                                </div>
                                <div>
                                    <p class="">
                                        하워드존슨 바이 윈덤 인천공항은 수집 및 이용하는 개인 정보의 범위는 아래와 같습니다.
                                    </p>
                                    <div class="pl-[42px]">
                                        <ul style="list-style-type: disc; color: #212121; margin-top: 16px;">
                                            <li>고객 센터에서 받는 필수 개인 정보는 이름과 이메일입니다. 해당 입력 정보는 고지사항 전달, 불만 처리 등 원활한 의사소통 경로의 확보를 위해 이용됩니다.</li>
                                            <li>숙박 예약 시 받는 필수 개인 정보는 예약자명, 연락처, 이메일, 신용카드 정보입니다. 입력된 예약 정보는 최선의 예약 업무를 위해 쓰입니다.</li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제4조 하워드 존슨 인천 에어포트가 수집한 개인 정보의 공유 및 제공
                            </span>
                            <div class="space-y-[40px] text-[16px] tracking-[-0.8px]">    
                                <div>
                                    <p class="">
                                        하워드존슨 바이 윈덤 인천공항은 이용자들의 개인 정보를 상단의 ‘제3조 개인 정보 수집 및 이용 범위’에서 고지한 범위 내에서 사용하며,
                                        이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인 정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
                                    </p>
                                    <div class="pl-[42px]">
                                        <ul style="list-style-type: disc; color: #212121; margin-top: 16px;">
                                            <li>법에 의해 요구된다고 선의로 판단되는 경우(예: 관련법에 의거 적법한 절차에 의한 정부기관의 요청이 있는 경우 등)</li>
                                            <li>법령이나 행정처분 등에 의해 개인 정보 제공이 요구되는 경우 (예: 법령에 의한 적법 절차에 의거 정부기관 등의 요청이 있는 경우)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제5조 쿠키(cookie)의 운영에 관한 사항
                            </span>
                            <div class="space-y-[40px] text-[16px] tracking-[-0.8px]">    
                                <div>
                                    <p class="">
                                        이용자들에게 보다 유용하고 적합한 서비스를 제공하기 위해 하워드 존슨 인천 에어포트의 인터넷 사이트는 이용자들의 정보를 저장하고 
                                        수시로 불러오는 ‘쿠키(cookie)’를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버(HTTP)가 이용자의 컴퓨터 브라우저에게 보내는 
                                        소량의 정보이며 이용자들의 PC 데스크에 저장 되기도 합니다. 쿠키는 이용자의 컴퓨터는 식별하지만 이용자를 개인적으로 식별하지 않습니다. 
                                        쿠키를 이용하여 이용자들이 방문한 하워드존슨 바이 윈덤 인천공항의 각 서비스와 웹사이트들에 대한 방문 및 이용 형태, 이용자 규모 등을 파악합니다. 
                                        이용자들은 쿠키에 대하여 사용 여부를 선택할 수 있습니다. 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용할 수도 있고, 
                                        쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 도 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제6조 개인 정보의 열람, 정정
                            </span>
                            <div class="space-y-[40px] text-[16px] tracking-[-0.8px]">    
                                <div>
                                    <p class="">
                                        개인정보의 열람 및 정정을 하고자 할 경우에는 담당자에게 서면, 전화 또는 이메일로 연락하시면 바로 조치해 드리겠습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제7조 개인 정보의 보유 기간 및 이용 기간
                            </span>
                            <div class="space-y-[40px] text-[16px] tracking-[-0.8px]">    
                                <div>
                                    <p class="">
                                        하워드존슨 바이 윈덤 인천공항은 ‘제3조 개인 정보 수집 및 이용 범위’에서 명시한 범위 내에서 개인 정보를 수집 및 이용하며, 
                                        개인 정보 이용 목적이 달성된 후에는 수집된 개인 정보를 파기합니다. 다만, 소비자에 관한 법률, 관계법령 등의 규정에 의하여 요구될 경우에는, 
                                        그 사실이 만료될 때까지 보유하며 그 목적이 달성되면 고객의 모든 정보는 삭제 또는 파기됩니다. 또한 제3자에게 제공된 경우, 제3자에게도 지체 없이 파기하도록 조치합니다.
                                        하워드존슨 바이 윈덤 인천공항은 보유한 개인정보를 보관 목적으로만 이용하며, 보존기간은 아래와 같습니다.
                                    </p>
                                    <div class="pl-[42px]">
                                        <ul style="list-style-type: decimal; color: #212121; margin-top: 16px;">
                                            <li style="padding-left: 4px;">
                                                계약 또는 청약철회 등에 관한 기록
                                                 <ul>
                                                    <li>
                                                        – 보존이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                                                    </li>
                                                    <li>
                                                        – 보존기간 : 5년
                                                    </li>    
                                                </ul>   
                                            </li>
                                            <li style="padding-left: 4px;">
                                                대금결제 및 재화 등의 공급에 관한 기록
                                                 <ul>
                                                    <li>
                                                        – 보존이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                                                    </li>
                                                    <li>
                                                        – 보존기간 : 5년
                                                    </li>    
                                                </ul>   
                                            </li>
                                            <li style="padding-left: 4px;">
                                                소비자의 불만 또는 분쟁처리에 관한 기록
                                                 <ul>
                                                    <li>
                                                        – 보존이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                                                    </li>
                                                    <li>
                                                        – 보존기간 : 3년
                                                    </li>    
                                                </ul>   
                                            </li>
                                            <li style="padding-left: 4px;">
                                                기타 고객의 동의를 득한 경우 : 동의를 득한 기간까지 보유
                                            </li>
                                        </ul>
                                    </div>
                                    <p class="mt-4">
                                        수집된 개인 정보는 하워드존슨 바이 윈덤 인천공항이 제공하는 서비스를 받으시는 동안 안전하게 보유되고, 이용 목적에 적합한 경우에만 이용하게 됩니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제8조 동의 철회 방법
                            </span>
                            <div class="space-y-[40px] text-[16px] tracking-[-0.8px]">    
                                <div>
                                    <p class="">
                                        이용자는 개인 정보의 수집 및 이용에 대해 동의하신 내용을 언제든지 철회할 수 있습니다. 동의 철회는 개인 정보 관리 책임자에게 서면,
                                        전화 또는 이메일로 연락하시면 지체없이 개인 정보를 파기하는 등 조치를 취하도록 하겠습니다.
                                    </p>
                                </div>
                                <div>
                                    <p class="">
                                        <span class="noto-sans-bold">
                                            [개인정보의 파기 및 절차방법]
                                        </span>
                                         <br>
                                        하워드존슨 바이 윈덤 인천공항은 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                                        <br>
                                        파기절차 및 방법은 다음과 같습니다.
                                    </p>
                                    <div class="pl-[42px]">
                                        <ul style="list-style-type: decimal; color: #212121; margin-top: 16px;">
                                            <li style="padding-left: 4px;">
                                                파기절차
                                                 <ul>
                                                    <li>
                                                        – 고객이 예약, 문의 등을 위해 입력하신 정보는 목적이 달성된 후내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 (보유 및 이용기간 참조) 일정 기간 저장된 후 파기 됩니다.
                                                    </li>
                                                    <li>
                                                        – 개인정보는 법률에 의한 경우로 보존되는 이외의 다른 목적으로 이용되지 않습니다.
                                                    </li>    
                                                </ul>   
                                            </li>
                                            <li style="padding-left: 4px;">
                                                파기방법
                                                 <ul>
                                                    <li>
                                                        – 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                                                    </li>
                                                    <li>
                                                        – 전자적 파일형태로 저장된 개인정보는 기록을 재생할수 없는 기술적 방법을 사용하여 삭제합니다.
                                                    </li>    
                                                </ul>   
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제9조 개인 정보의 위탁 처리
                            </span>
                            <div class="space-y-[40px] text-[16px] tracking-[-0.8px]">    
                                <div>
                                    <p class="">
                                        하워드존슨 바이 윈덤 인천공항은 서비스 향상을 위해서 이용자들의 개인 정보를 외부 전문 업체에 위탁하여 처리할 수 있습니다.
                                        개인 정보의 처리를 위탁하는 경우에는 미리 그 사실을 이용자들에게 공지할 것입니다. 또한 위탁 계약 등을 통하여 서비스 제공자의 
                                        개인 정보 보호 관련 지시 엄수, 개인 정보에 관한 비밀 유지, 제3자 제공의 금지 및 사고 시의 책임 부담 등을 명확히 규정하고 
                                        해당 계약 내용을 서면 또는 전자적으로 보관할 것입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제10조 개인 정보 관련 의견 수렴 및 불만 처리에 관한 사항
                            </span>
                            <div class="space-y-[16px] text-[16px] tracking-[-0.8px]">    
                                <div>
                                    <p class="">
                                        하워드존슨 바이 윈덤 인천공항은 개인 정보 보호와 관련하여 이용자 여러분들의 의견을 수렴하고 있으며 불만을 처리하기 위하여 
                                        방법을 마련하고 있습니다. 이용자들은 하단에 명시한 개인 정보 관리 책임자의 연락처를 참고하여 전화나 메일을 통하거나 
                                        호텔의 대표 이메일인 hellohojo@hojoincheon.com 으로 불만사항을 신고할 수 있고, 호텔은 이용자들의 신고 사항에 대하여 
                                        신속하고 충분한 답변을 해 드릴 것입니다. 또는 정부에서 설치하여 운영 중인 개인정보침해 신고센터, 대검찰청 사이버수사과, 
                                        경찰청 사이버안전국을 통해 개인 정보 침해에 대한 신고 및 상담을 요청할 수 있습니다.
                                    </p>
                                </div>
                                <div class="flex flex-col">
                                    <p class="">
                                        개인정보침해 신고센터 (
                                            <span style="color: #EE792F">
                                                privacy.kisa.or.kr / 118
                                            </span>)
                                    </p>
                                    <p class="">
                                        대검찰청 사이버수사과 (
                                            <span style="color: #EE792F">
                                                www.spo.go.kr / 1301
                                            </span>)
                                    </p>
                                    <p class="">
                                        경찰청 사이버안전국 (
                                            <span style="color: #EE792F">
                                                cyberbureau.police.go.kr/index.do / 182
                                            </span>)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex flex-col space-y-[40px]">
                            <span class="text-[#EE792F] text-[24px] noto-sans-bold tracking-[-1.2px]" style="color: #EE792F;">
                                제11조 개인 정보 관리 책임자
                            </span>
                            <div class="text-[16px] tracking-[-0.8px]">    
                                <ul class="ml-[21px] mb-4" style="list-style-type: inherit; color: #212121;">
                                    <li>
                                        이름: 김진호
                                    </li>
                                    <li>
                                        직위: 인사팀장
                                    </li>
                                    <li>
                                        전화번호: 
                                        <span style="color: #EE792F;">
                                            032 722 0031
                                        </span>
                                        
                                    </li>
                                    <li class="mb-4">
                                        이메일: 
                                        <span style="color: #EE792F;">
                                            dohr@hojoincheon.com
                                        </span>
                                    </li>
                                    <li>
                                        하워드존슨 바이 윈덤 인천공항
                                    </li>
                                    <li>
                                        전화번호: 
                                        <span style="color: #EE792F;">
                                            032 722 0000
                                        </span>
                                        
                                    </li>
                                    <li>
                                        이메일:  
                                        <span style="color: #EE792F;">
                                            hellohojo@hojoincheon.com
                                        </span>
                                    </li>
                                </ul>
                                <div>
                                    <p>
                                        개인정보보호정책 개정일자 : 2017년 12월 31일
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="selectedVersion === '2'" class="w-full flex justify-start items-start">
            <h1>
                테스트 버전
            </h1> 
        </div>
    </div>
    <!-- mobilie -->
    <div class="howard-contents lg:hidden w-full">
        <!-- 메인 타이틀 -->
        <div class="w-full bg-[#FFF6F2] py-8 mb-8">
            <div class="w-full flex justify-center mb-2">
                <span class="howard-main-title-mobile">
                    개인정보 처리방침
                </span>
            </div>
            <div class="w-full flex justify-center  mb-2">
                <span class="howard-sub-title-mobile text-center">
                    하워드존슨 인천에어포트 개인정보 처리방침 입니다.
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
            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제1조 총칙
                </span>
            </div>
            <div class="w-full space-y-[16px] flex flex-col mb-6 noto-sans-light tracking-[-0.6px]">
                <div class="w-full text-[12px]">
                    <p>
                        하워드존슨 바이 윈덤 인천공항은 이용자들의 개인 정보 보호를 매우 중요하게 생각하며, 
                        이용자가 회사의 서비스 이용을 위해 온라인상에서 회사에 제공한 개인 정보가 보호 받을 수 있도록 최선을 다하고 있습니다. 
                        이에 회사는 개인 정보 보호법, 정보 통신망 이용 촉진 등에 관한 법률 등 정보 통신 서비스 제공자가 준수하여야 할 관련 법규상의 
                        개인 정보 보호 규정 및 정보통신부가 제정한 개인 정보 보호 지침을 준수하고 있습니다. 하워드존슨 바이 윈덤 인천공항은 
                        개인 정보 보호 정책을 통하여 이용자들이 제공하는 개인 정보가 어떠한 용도와 방식으로 이용되고 있으며 개인 정보 보호를 위해 
                        어떠한 조치가 취해지고 있는지 알려드립니다. 
                    </p>
                </div>
                <div class="w-full text-[12px]">
                    <p>
                        하워드존슨 바이 윈덤 인천공항은 개인 정보 보호 정책을 홈페이지 첫 화면에 공개함으로써 
                        이용자들이 언제나 용이하게 볼 수 있도록 조치하고 있습니다.
                    </p>
                </div>
                <div class="w-full text-[12px]">
                    <p>
                        하워드존슨 바이 윈덤 인천공항의 개인 정보 보호 정책은 정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 
                        수시로 변경될 수 있고, 이에 따른 개인 정보 보호 정책의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 
                        그리고 개인 정보 보호 정책을 개정하는 경우 하워드 존슨 인천 에어포트는 그 변경사항에 대하여 즉시 홈페이지를 통하여 
                        게시하고 개정 일자 등을 부여하여 개정된 사항을 이용자들이 쉽게 알아볼 수 있도록 하고 있습니다. 
                        이용자들께서는 사이트 방문 시 수시로 확인하시기 바랍니다.
                    </p>
                </div>
            </div>
            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제2조 개인 정보의 수집 및 이용 목적
                </span>
            </div>
            <div class="w-full text-[12px] mb-6">
                <p class="noto-sans-light tracking-[-0.6px]">
                    하워드존슨 바이 윈덤 인천공항 홈페이지는 별도의 사용자 등록 없이 언제든지 사용할 수 있습니다. 
                    하워드존슨 바이 윈덤 인천공항은 이용자들에게 맞춤식 서비스를 비롯해, 보다 향상된 양질의 서비스를 제공하기 위해
                    이용자 개인의 정보를 수집하고 있습니다. 
                    하워드존슨 바이 윈덤 인천공항은 이용자의 사전 동의 없이는 이용자의 개인 정보를 함부로 공개하지 않습니다.
                </p>
            </div>

            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제3조 개인 정보 수집 및 이용 범위
                </span>
            </div>
            <div class="w-full space-y-[16px] flex flex-col mb-6 noto-sans-light tracking-[-0.6px]">
                <div class="w-full text-[12px]">
                    <p>
                        하워드존슨 바이 윈덤 인천공항은 신규 서비스 개발이나 컨텐츠의 확충 시 기존 이용자들이 회사에 제공한 개인정보를 바탕으로 
                        개발해야 할 서비스의 우선순위를 보다 더 효율적으로 정하고, 이용자들이 필요로 할 컨텐츠를 합리적으로 선택하여 제공할 수 있습니다.
                    </p>
                </div>
                <div class="w-full text-[12px]">
                   <p>하워드존슨 바이 윈덤 인천공항은 수집 및 이용하는 개인 정보의 범위는 아래와 같습니다.</p>
                   <div class="pl-[20px]">
                        <ul style="list-style-type: disc; color: #212121; margin-top: 16px;">
                            <li>고객 센터에서 받는 필수 개인 정보는 이름과 이메일입니다. 해당 입력 정보는 고지사항 전달, 불만 처리 등 원활한 의사소통 경로의 확보를 위해 이용됩니다.</li>
                            <li>숙박 예약 시 받는 필수 개인 정보는 예약자명, 연락처, 이메일, 신용카드 정보입니다. 입력된 예약 정보는 최선의 예약 업무를 위해 쓰입니다.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제4조 하워드 존슨 인천 에어포트가 수집한 개인 정보의 공유 및 제공
                </span>
            </div>
            <div class="w-full space-y-[16px] flex flex-col mb-6 noto-sans-light tracking-[-0.6px]">
                <div class="w-full text-[12px]">
                    <p>
                        하워드존슨 바이 윈덤 인천공항은 이용자들의 개인 정보를 상단의 ‘제3조 개인 정보 수집 및 이용 범위’에서 고지한 범위 내에서 사용하며,
                         이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인 정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
                    </p>
                    <div class="w-full text-[12px]">
                        <div class="pl-[20px]">
                            <ul style="list-style-type: disc; color: #212121; margin-top: 16px;">
                                <li>법에 의해 요구된다고 선의로 판단되는 경우(예: 관련법에 의거 적법한 절차에 의한 정부기관의 요청이 있는 경우 등)</li>
                                <li>법에 의해 요구된다고 선의로 판단되는 경우(예: 관련법에 의거 적법한 절차에 의한 정부기관의 요청이 있는 경우 등)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제5조 쿠키(cookie)의 운영에 관한 사항
                </span>
            </div>
            <div class="w-full text-[12px] mb-6">
                <p class="noto-sans-light tracking-[-0.6px]">
                    이용자들에게 보다 유용하고 적합한 서비스를 제공하기 위해 하워드 존슨 인천 에어포트의 인터넷 사이트는 이용자들의 정보를 저장하고 
                    수시로 불러오는 ‘쿠키(cookie)’를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버(HTTP)가 이용자의 컴퓨터 브라우저에게 보내는 
                    소량의 정보이며 이용자들의 PC 데스크에 저장 되기도 합니다. 쿠키는 이용자의 컴퓨터는 식별하지만 이용자를 개인적으로 식별하지 않습니다. 
                    쿠키를 이용하여 이용자들이 방문한 하워드존슨 바이 윈덤 인천공항의 각 서비스와 웹사이트들에 대한 방문 및 이용 형태, 이용자 규모 등을 파악합니다. 
                    이용자들은 쿠키에 대하여 사용 여부를 선택할 수 있습니다. 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용할 수도 있고, 
                    쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 도 있습니다.
                </p>
            </div>

            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제6조 개인 정보의 열람, 정정
                </span>
            </div>
            <div class="w-full text-[12px] mb-6">
                <p class="noto-sans-light tracking-[-0.6px]">
                    개인정보의 열람 및 정정을 하고자 할 경우에는 담당자에게 서면, 전화 또는 이메일로 연락하시면 바로 조치해 드리겠습니다.
                </p>
            </div>

            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제7조 개인 정보의 보유 기간 및 이용 기간
                </span>
            </div>
            <div class="w-full space-y-[16px] flex flex-col mb-6 noto-sans-light tracking-[-0.6px]">
                <div class="w-full text-[12px]">
                    <p>
                        하워드존슨 바이 윈덤 인천공항은 ‘제3조 개인 정보 수집 및 이용 범위’에서 명시한 범위 내에서 개인 정보를 수집 및 이용하며, 
                        개인 정보 이용 목적이 달성된 후에는 수집된 개인 정보를 파기합니다. 다만, 소비자에 관한 법률, 관계법령 등의 규정에 의하여 요구될 경우에는, 
                        그 사실이 만료될 때까지 보유하며 그 목적이 달성되면 고객의 모든 정보는 삭제 또는 파기됩니다. 
                        또한 제3자에게 제공된 경우, 제3자에게도 지체 없이 파기하도록 조치합니다. 하워드존슨 바이 윈덤 인천공항은 보유한 
                        개인정보를 보관 목적으로만 이용하며, 보존기간은 아래와 같습니다.
                    </p>
                    <div class="w-full text-[12px]">
                        <div class="pl-[20px]">
                            <ul style="list-style-type: decimal; color: #212121; margin-top: 16px;">
                                <li>
                                    계약 또는 청약철회 등에 관한 기록
                                    <ul>
                                        <li>
                                            – 보존이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                                        </li>
                                        <li>
                                            – 보존기간 : 5년
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    대금결제 및 재화 등의 공급에 관한 기록
                                    <ul>
                                        <li>
                                            – 보존이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                                        </li>
                                        <li>
                                            – 보존기간 : 5년
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    소비자의 불만 또는 분쟁처리에 관한 기록
                                    <ul>
                                        <li>
                                            – 보존이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                                        </li>
                                        <li>
                                            – 보존기간 : 3년
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    기타 고객의 동의를 득한 경우 : 동의를 득한 기간까지 보유
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p class="mt-4">
                        수집된 개인 정보는 하워드존슨 바이 윈덤 인천공항이 제공하는 서비스를 받으시는 동안 안전하게 보유되고, 이용 목적에 적합한 경우에만 이용하게 됩니다.
                    </p>
                </div>
            </div>

            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제8조 동의 철회 방법
                </span>
            </div>
            <div class="w-full space-y-[16px] flex flex-col mb-6 noto-sans-light tracking-[-0.6px]">
                <div class="w-full text-[12px]">
                    <p class="mb-4">
                        이용자는 개인 정보의 수집 및 이용에 대해 동의하신 내용을 언제든지 철회할 수 있습니다. 동의 철회는 개인 정보 관리 책임자에게 서면, 
                        전화 또는 이메일로 연락하시면 지체없이 개인 정보를 파기하는 등 조치를 취하도록 하겠습니다.
                    </p>
                    <p>
                        <span class="noto-sans-bold">
                            [개인정보의 파기 및 절차방법]
                        </span>
                        <br>
                        하워드존슨 바이 윈덤 인천공항은 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                        파기절차 및 방법은 다음과 같습니다.
                    </p>
                    <div class="w-full text-[12px]">
                        <div class="pl-[20px]">
                            <ul style="list-style-type: decimal; color: #212121; margin-top: 16px;">
                                <li>
                                    파기절차
                                    <ul>
                                        <li>
                                            – 고객이 예약, 문의 등을 위해 입력하신 정보는 목적이 달성된 후
                                            내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 (보유 및 이용기간 참조) 일정 기간 저장된 후 파기 됩니다.
                                        </li>
                                        <li>
                                            – 개인정보는 법률에 의한 경우로 보존되는 이외의 다른 목적으로 이용되지 않습니다.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    파기방법
                                    <ul>
                                        <li>
                                            – 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                                        </li>
                                        <li>
                                            – 전자적 파일형태로 저장된 개인정보는 기록을 재생할수 없는 기술적 방법을 사용하여 삭제합니다.
                                        </li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>    

            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제9조 개인 정보의 위탁 처리
                </span>
            </div>
            <div class="w-full text-[12px] mb-6">
                <p class="noto-sans-light tracking-[-0.6px]">
                    하워드존슨 바이 윈덤 인천공항은 서비스 향상을 위해서 이용자들의 개인 정보를 외부 전문 업체에 위탁하여 처리할 수 있습니다.
                    개인 정보의 처리를 위탁하는 경우에는 미리 그 사실을 이용자들에게 공지할 것입니다. 또한 위탁 계약 등을 통하여 서비스
                    제공자의 개인 정보 보호 관련 지시 엄수, 개인 정보에 관한 비밀 유지, 제3자 제공의 금지 및 사고 시의 책임 부담 등을
                    명확히 규정하고 해당 계약 내용을 서면 또는 전자적으로 보관할 것입니다.
                </p>
            </div>

            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제10조 개인 정보 관련 의견 수렴 및 불만 처리에 관한 사항
                </span>
            </div>
            <div class="w-full text-[12px] mb-6">
                <p class="noto-sans-light tracking-[-0.6px]">
                    하워드존슨 바이 윈덤 인천공항은 개인 정보 보호와 관련하여 이용자 여러분들의 의견을 수렴하고 있으며 불만을 처리하기 위하여 방법을 마련하고 있습니다. 
                    이용자들은 하단에 명시한 개인 정보 관리 책임자의 연락처를 참고하여 전화나 메일을 통하거나 호텔의 대표 이메일인 <span style="color: #EE792F;">hellohojo@hojoincheon.com</span> 으로 
                    불만사항을 신고할 수 있고, 호텔은 이용자들의 신고 사항에 대하여 신속하고 충분한 답변을 해 드릴 것입니다. 
                    또는 정부에서 설치하여 운영 중인 개인정보침해 신고센터, 대검찰청 사이버수사과, 경찰청 사이버안전국을 통해 개인 정보 침해에 대한 신고 및 상담을 요청할 수 있습니다.
                </p>
                <div class="flex flex-col mt-2">
                    <p class="noto-sans-light tracking-[-0.6px]">
                        개인정보침해 신고센터 ( 
                        <span style="color: #EE792F;">
                            privacy.kisa.or.kr / 118
                        </span>)
                    </p>
                    <p class="noto-sans-light tracking-[-0.6px]">
                        대검찰청 사이버수사과 (
                        <span style="color: #EE792F;">
                            www.spo.go.kr / 1301
                        </span>)
                    </p>
                    <p class="noto-sans-light tracking-[-0.6px]">
                        경찰청 사이버안전국 (
                        <span style="color: #EE792F;">
                            cyberbureau.police.go.kr/index.do / 182
                        </span>)
                    </p>
                </div>
            </div>

            <div class="w-full mb-4">
                <span class="noto-sans-bold text-[14px] text-[#EE792F] tracking-[-0.7px]" style="color: #EE792F;">
                    제11조 개인 정보 관리 책임자
                </span>
            </div>
            <div class="w-full text-[12px] mb-2">
                <div class="pl-[20px] noto-sans-light tracking-[-0.6px]">
                    <ul style="list-style-type: disc; color: #212121; margin-top: 16px;">
                        <li>이름: 김진호</li>
                        <li>직위: 인사팀장</li>
                        <li>전화번호: <span style="color: #EE792F;">032 722 0031</span></li>
                        <li class="mb-3">이메일: <span style="color: #EE792F;">dohr@hojoincheon.com</span></li>
                        <li>하워드존슨 바이 윈덤 인천공항</li>
                        <li>전화번호: <span style="color: #EE792F;">032 722 0000</span></li>
                        <li>이메일:  <span style="color: #EE792F;">hellohojo@hojoincheon.com</span></li>
                    </ul>
                </div>
            </div>
            <div class="mb-6">
                <p class="text-xs noto-sans-light tracking-[-0.6px]">
                    개인정보보호정책 개정일자 : 2017년 12월 31일
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
            selectedVersion: '',
        }
    },
    created() {
      this.selectedVersion = '1';
    },
    methods: {
        handleChange(value) {
            // console.log(`selected ${value}`);
            this.selectedVersion = value;
        },
    },
}
</script>
<style>
    
</style>
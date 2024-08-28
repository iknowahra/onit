interface iOfficeContent {
  title: string;
  details: string;
}

interface iOfficeInfo {
  main: string;
  sub: string;
  contents: iOfficeContent[];
}

const officeInfo: iOfficeInfo[] = [{
  main: '비상주사무실 안내',
  sub: '원스톱 비상주 서비스(법무 / 세무 연결)',
  contents: [
    {
      title: '제2종 근린생활시설',
      details: `모든 업종 사업자등록이 가능합니다. \n특수업종은 상담이 필요합니다.`,
    },
    {
      title: '비과밀억제권역',
      details:
        '법인 설립시 등록면허세 중과세 면제\n취득세 중과 배제 (9.4% -> 4.6%)',
    },
    {
      title: '계약 체결 단 10분',
      details:
        '개인사업자 : 신규등록 | 주소이전\n법인사업자 : 법인설립 | 주소이전',
    },
  ],
},
{
  main: '비상주사무실 안내',
  sub: '원스톱 비상주 서비스(법무 / 세무 연결)',
  contents: [
    {
      title: '제2종 근린생활시설',
      details: `모든 업종 사업자등록이 가능합니다. \n특수업종은 상담이 필요합니다.`,
    },
    {
      title: '비과밀억제권역',
      details:
        '법인 설립시 등록면허세 중과세 면제\n취득세 중과 배제 (9.4% -> 4.6%)',
    },
    {
      title: '계약 체결 단 10분',
      details:
        '개인사업자 : 신규등록 | 주소이전\n법인사업자 : 법인설립 | 주소이전',
    },
  ],
},
{
  main: '공유 사무실 안내',
  sub: '원스톱 비상주 서비스(법무 / 세무 연결)',
  contents: [
    {
      title: '비상주 사무실',
      details: `관공서 및 공공기관 실사 지원\n우편 등기 대리수령 톡알람`,
    },
    {
      title: '사업장 주소지 제공',
      details:
        '개인사업자 : 신규등록 | 주소이전\n법인사업자 : 법인설립 | 주소이전',
    },
    {
      title: '상주 사무실(초역세권)',
      details:
        '전석 퍼시스 가구(책상 의자 서랍)\n영등포구청역 도보 5분',
    },
  ],
},
{
  main: '비상주사무실 안내',
  sub: '원스톱 비상주 서비스(법무 / 세무 연결)',
  contents: [
    {
      title: '제2종 근린생활시설',
      details: `모든 업종 사업자등록이 가능합니다. \n특수업종은 상담이 필요합니다.`,
    },
    {
      title: '비과밀억제권역',
      details:
        '법인 설립시 등록면허세 중과세 면제\n취득세 중과 배제 (9.4% -> 4.6%)',
    },
    {
      title: '계약 체결 단 10분',
      details:
        '개인사업자 : 신규등록 | 주소이전\n법인사업자 : 법인설립 | 주소이전',
    },
  ],
},
];

export default officeInfo;
export type { iOfficeInfo };

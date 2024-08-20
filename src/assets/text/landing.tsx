interface iSlogan {
  sub: string;
  main: string;
  mainType: string[];
  details: string;
}

interface iBranch {
  label: string;
  value: number;
}

interface iIntroDetail {
  title: string;
  detail: string;
  tel: string;
  scroll: string;
}

interface iFooter {
  naver: string;
  policy1: string;
  policy2: string;
  copyright: string;
}

interface iLanding {
  slogan: iSlogan;
  branches: iBranch[];
  intro:
  iIntroDetail[];
  footer: iFooter;
}

const Landing: iLanding = {
  slogan: {
    sub: "모든 대표님들의 멋진 앞날을 응원하는 ON!T",
    main: "공유오피스 & 스터디카페",
    mainType: [
      "편리한 공유오피스",
      "가성비 상주|비상주오피스",
      "편안한 환경의 스터디카페",
    ],
    details:
      "온잇 공유오피스는 다년간의 투자 경험과 노하우를 지닌 세무 실무사가 함께 합니다.\n법인 설립, 사업자등록, 임대차 계약, 실사 대응, 우편물 관리 등 모든 방면에서 서포트가 가능합니다.",
  },
  branches: [
    { label: "지점을 선택하세요", value: -1 },
    {
      label: "인천 원당 1호점",
      value: 0,
    },
    {
      label: "경기 평택 2호점",
      value: 1,

    },
    { label: "서울 영등포구청 3호점", value: 2 },
  ],
  intro: [{
    title: "인천 원당점(비과밀억제권역)",
    detail: `온잇 공유오피스는 여러분의 비즈니스에 최적화된 업무 공간을 제공합니다.
인천검단신도시에 인접해있으며 상주/비상주 사무실을 합리적인 가격으로 이용할 수 있습니다.`,
    tel: "032)715-7555",
    scroll: "오픈 기념 이벤트 특가를 놓치기 싫다면?"
  },
  {
    title: "경기 평택점(비과밀억제권역)",
    detail: `법인|개인 사업자 등록을 위한 주소지제공 서비스를 전국 최저가로 제공합니다.
맞춤책상과 전좌석 시디즈 의자를 갖춘 편리한 업무 및 스터디 공간으로 이용할 수 있습니다.`,
    tel: "031)373-6128",
    scroll: "오픈 기념 이벤트 특가를 놓치기 싫다면?"
  },
  {
    title: "영등포구청점(역세권 도보5분)",
    detail: `최신인테리어와 넓은 1인실,2인실을 가성비 있는 가격으로 상주 사무실을 이용 가능합니다.
비상주 사무실은 오픈행사 영등포 최저가로 할인 및 추가제공합니다(변동). 
      `,
    tel: "02)2633-7004",
    scroll: "오픈 기념 이벤트 특가를 놓치기 싫다면?"
  },
  ]
  ,
  footer: {
    naver: "https://naver.me/GXAEbpo8",
    policy1: "개인정보취급방침 | ",
    policy2: "이용약관",
    copyright: "온잇 공유오피스 All right reserved.",
  },
};

export default Landing;
export type { iIntroDetail, iLanding }

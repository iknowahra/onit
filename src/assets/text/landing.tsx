import information from "./information";

interface iRouter {
  label: string;
  path: string;
}

type iIntro = Record<iRouter["path"], iIntroDetail>

interface iIntroDetail {
  path: string;
  label: string;
  title: string;
  detail: string;
  tel: string;
  scroll: string;
}


interface iLanding {
  intro: iIntro;
}


const Landing: iLanding = {
  intro: {
    "/": {
      label: "지점을 선택하세요",
      path: "",
      title: "",
      detail: "",
      tel: "",
      scroll: ""
    },
    "onedang": {
      path: "onedang",
      label: "인천 원당 1호점",
      title: "인천 원당점(비과밀억제권역)",
      detail: `온잇 공유오피스는 여러분의 비즈니스에 최적화된 업무 공간을 제공합니다.
인천검단신도시에 인접해있으며 상주/비상주 사무실을 합리적인 가격으로 이용할 수 있습니다.`,
      tel: "032)715-7555",
      scroll: "오픈 기념 이벤트 특가를 놓치기 싫다면?"
    },
    "pyeongtaek": {
      path: "pyeongtaek",
      label: "경기 평택 2호점",
      title: "경기 평택점(비과밀억제권역)",
      detail: `법인|개인 사업자 등록을 위한 주소지제공 서비스를 전국 최저가로 제공합니다.
맞춤책상과 전좌석 시디즈 의자를 갖춘 편리한 업무 및 스터디 공간으로 이용할 수 있습니다.`,
      tel: "031)373-6128",
      scroll: "오픈 기념 이벤트 특가를 놓치기 싫다면?"
    },
    "yeongdeungpo": {
      path: "yeongdeungpo",
      label: "서울 영등포구청 3호점",
      title: "영등포구청점(역세권 도보5분)",
      detail: `최신인테리어와 넓은 1인실,2인실을 가성비 있는 가격으로 상주 사무실을 이용 가능합니다.
비상주 사무실은 오픈행사 영등포 최저가로 할인 및 추가제공합니다(변동). 
      `,
      tel: "02)2633-7004",
      scroll: "오픈 기념 이벤트 특가를 놓치기 싫다면?"
    },
    "wonju": {
      path: "wonju",
      label: "강원 원주 4호점",
      title: "강원 원주점(비과밀억제권역)",
      detail: `강원 원주점은 비과밀억세권역으로 각종 세제혜택에 유리합니다.
상주/비상주 오피스를 전국에서 가장 저렴한 가격으로 이용할 수 있습니다.`,
      tel: "010-4239-8279",
      scroll: "오픈 특가 이벤트 진행 중!✨✨"
    },
    "daegu": {
      path: "daegu",
      label: "대구 칠곡 5호점",
      title: "대구 칠곡점(비과밀억제권역)",
      detail: `대구 칠곡점은 학정역 근처에 인접해있습니다.
상주(준비중)/비상주 오피스를 합리적인 가격으로 이용할 수 있습니다.`,
      tel: "0507-1478-5053",
      scroll: "오픈 특가 이벤트 진행 중!✨✨"
    },
    "bugae": {
      path: "bugae",
      label: "인천 부개 6호점",
      title: "인천 부개점",
      detail: `인천부개점은 타 공유오피스에 비해 가장 합리적인 금액으로 비상주 사무실을 제공합니다.
스터디카페도 최저가 수준으로 운영중이며, 개인석 이용시 오픈석을 무료로 제공합니다.`,
      tel: "032-278-0909",
      scroll: "가장 합리적인 가격으로 제공합니다✨✨"
    },
    "anyang": {
      path: "anyang",
      label: "경기 안양역 8호점",
      title: "경기 안양역점",
      detail: `안양역 도보 5분 거리의 안양 1번가 내에 위치하였습니다.
전좌석 고급 시디즈 의자로 구성되어 편안하고 넓은 사무실을 합리적인 가격으로 이용할 수 있습니다.
`,
      tel: "031-441-8282",
      scroll: "오픈 특가 0원 이벤트 진행 중!✨✨"
    },
  },
};

export default Landing;
export type { iIntroDetail, iLanding }

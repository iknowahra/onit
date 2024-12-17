interface iServiceInfo {
  park: boolean; // 일반주차여부
  robotPark: boolean; // 기계식주차여부
  wifi: boolean; // 무선와이파이여부
  genderSeparateToilet: boolean; // 남녀화장실구분여부
}

interface iAccountInfo {
  owner: string; // 계좌 소유자
  bank: string; // 은행명
  accountNo: string; // 계좌번호
}

interface iBusinessInfo {
  name: string; // 상호명
  owner: string; // 사업대표자명
  businessNo: string; // 사업자번호
  email: string; // 대표자이메일
}

interface iBranchInfoDetail {
  path: string; // router path
  name: string; // 지점 이름
  event: boolean;
  alias: string;
  lat: number; // 위도
  lng: number; // 경도
  address: string; // 주소
  oldAddress?: string; // 지번주소
  map: string; // 지도 링크
  tel: string; // 전화번호
  phone: string; // 휴대전화 번호
  time: string; // 운영시간
  service?: iServiceInfo; // 서비스 정보
  account?: iAccountInfo; // 계좌 정보
  business?: iBusinessInfo; // 사업자 정보
  blog?: string; // 블로그 주소
}

type iBranchInfo = Record<string, iBranchInfoDetail>;

const information: iBranchInfo = {
  onedang: {
    path: "onedang",
    alias: "인천 원당점",
    name: "인천 원당 1호점",
    event: true,
    lat: 37.594593, //위도
    lng: 126.6975021, //경도
    address:
      "인천 서구 고산후로121번길 15 삼경프라자 4층 401호",
    oldAddress: "인천 서구 원당동 825-7 삼경프라자 4층 401호",
    map: "https://naver.me/59i2c8xt",
    tel: "032)715-7555",
    phone: "010-4239-8279",
    time: "00:00 - 24:00(연중무휴)",
    service: {
      park: true, // 일반주차여부
      robotPark: false, //기계식주차여부
      wifi: true,  //무선와이파이여부
      genderSeparateToilet: true, //남녀화장실구분여부
    },
    account: {
      owner: "주식회사고우",
      bank: "농협은행",
      accountNo: "301-0334-7708-91"
    },
    business: {
      name: "주식회사고우",//상호명
      owner: "강윤권", //사업대표자명
      businessNo: "560-81-03060", //사업자번호
      email: "onitspace@naver.com" //대표자이메일
    },
    blog: "https://blog.naver.com/gowonit"
  },
  pyeongtaek: {
    path: "pyeongtaek",
    alias: "경기 평택점",
    event: true,
    name: "경기 평택 2호점",
    lat: 37.594593, //위도
    lng: 126.6975021, //경도
    address:
      "경기 평택시 중앙로 199 새샘빌딩 4층",
    oldAddress: "경기 평택시 비전동 764-1 새샘빌딩 4층",
    map: "https://naver.me/5smK3z6a",
    tel: "031)373-6128",
    phone: "010-4239-8279",
    time: "07:00 - 02:00 (연중무휴)",
    service: {
      park: false, // 일반주차여부
      robotPark: false, //기계식주차여부
      wifi: true,  //무선와이파이여부
      genderSeparateToilet: true, //남녀화장실구분여부
    },
    account: {
      owner: "주식회사고우",
      bank: "농협은행",
      accountNo: "301-0344-3855-71"
    },
    business: {
      name: "주식회사고우",//상호명
      owner: "강윤권", //사업대표자명
      businessNo: "560-81-03060", //사업자번호
      email: "onitspace@naver.com" //대표자이메일
    },
    blog: "https://blog.naver.com/gowonit"
  },
  yeongdeungpo: {
    path: "yeongdeungpo",
    alias: "서울 영등포구청점",
    name: "서울 영등포구청점 3호점",
    event: true,
    lat: 37.594593, //위도
    lng: 126.6975021, //경도
    address:
      "서울 영등포구 영등포로19길 15 3층",
    oldAddress: "서울 영등포구 당산동2가 122 3층",
    map: "https://naver.me/GhbEeqHC",
    tel: "02-2633-7004",
    phone: "",
    time: "00:00 - 24:00(연중무휴)",
    service: {
      park: true, // 일반주차여부
      robotPark: false, //기계식주차여부
      wifi: true,  //무선와이파이여부
      genderSeparateToilet: false, //남녀화장실구분여부
    },
    account: {
      owner: "",
      bank: "",
      accountNo: ""
    },
    business: {
      name: "주식회사 리츠비",//상호명
      owner: "김수인", //사업대표자명
      businessNo: "557-81-02901", //사업자번호
      email: "" //대표자이메일
    },
    blog: "https://www.instagram.com/onit_share_office/"
  },
  wonju: {
    path: "wonju",
    alias: "강원 원주점",
    event: false,
    name: "강원 원주 4호점",
    lat: 37.594593, //위도
    lng: 126.6975021, //경도
    address:
      "강원특별자치도 원주시 치악로 1555, 201호",
    oldAddress: "강원특별자치도 원주시 관설동 1461-1, 201호",
    map: "https://naver.me/xucEaRBU",
    tel: "",
    phone: "010-4239-8279",
    time: "00:00 - 24:00(연중무휴)",
    service: {
      park: true, // 일반주차여부
      robotPark: false, //기계식주차여부
      wifi: true,  //무선와이파이여부
      genderSeparateToilet: false, //남녀화장실구분여부
    },
    account: {
      owner: "주식회사 고우",
      bank: "농협은행",
      accountNo: "301-0355-8102-11"
    },
    business: {
      name: "주식회사고우",//상호명
      owner: "강윤권", //사업대표자명
      businessNo: "560-81-03060", //사업자번호
      email: "onitspace@naver.com" //대표자이메일
    },
    blog: "https://blog.naver.com/gowonit"
  },
  daegu: {
    path: "daegu",
    alias: "대구 칠곡점",
    event: true,
    name: "대구 칠곡 5호점",
    lat: 35.948077316856, //위도
    lng: 128.56727546143, //경도
    address:
      "대구 북구 학정동로 47 2층 서측",
    oldAddress: "대구 북구 학정동 976 2층 서측",
    map: "https://naver.me/5OQv7y7D",
    tel: "",
    phone: "0507-1478-5053",
    time: "00:00 - 24:00(연중무휴)",
    service: {
      park: true, // 일반주차여부
      robotPark: false, //기계식주차여부
      wifi: true,  //무선와이파이여부
      genderSeparateToilet: true, //남녀화장실구분여부
    },
    account: {
      owner: "주식회사 리리컴퍼니",
      bank: "국민은행",
      accountNo: "083701-04-095392"
    },
    business: {
      name: "주식회사 리리컴퍼니",//상호명
      owner: "김정자", //사업대표자명
      businessNo: "303-81-81707", //사업자번호
      email: "" //대표자이메일
    }
  },
  bugae: {
    path: "bugae",
    alias: "인천 부개점",
    event: true,
    name: "인천 부개 6호점",
    lat: 37.5047913, //위도
    lng: 126.7370765, //경도
    address:
      "인천 부평구 충선로 176-10 민우빌딩 4층,5층",
    oldAddress: "인천 부평구 부개동 12-152 민우빌딩 4층,5층",
    map: "https://naver.me/F9NS9ars",
    tel: "032-278-0909",
    phone: "",
    time: "06:00 - 02:00(연중무휴)",
    service: {
      park: true, // 일반주차여부
      robotPark: false, //기계식주차여부
      wifi: true,  //무선와이파이여부
      genderSeparateToilet: true, //남녀화장실구분여부
    },
    account: {
      owner: "주식회사 솔온컴퍼니",
      bank: "국민은행",
      accountNo: "086601-04-167803"
    },
    business: {
      name: "주식회사 솔온컴퍼니",//상호명
      owner: "이규범", //사업대표자명
      businessNo: "403-86-03457", //사업자번호
      email: "" //대표자이메일
    },
  },
  anyang: {
    path: "anyang",
    alias: "경기 안양역점",
    event: true,
    name: "경기 안양역 8호점",
    lat: 37.39817512055, //위도
    lng: 126.92341595438, //경도
    address:
      "경기 안양시 만안구 장내로143번길 15 연성빌딩 6층",
    oldAddress: "경기 안양시 만인구 안양동 674-261 6층",
    map: "https://naver.me/F741UYH3",
    tel: "031-441-8282",
    phone: "",
    time: "00:00 - 24:00(연중무휴)",
    service: {
      park: false, // 일반주차여부
      robotPark: true, //기계식주차여부
      wifi: true,  //무선와이파이여부
      genderSeparateToilet: true, //남녀화장실구분여부
    },
    account: {
      owner: "주식회사 유이어",
      bank: "국민은행",
      accountNo: "08370104095235"
    },
    business: {
      name: "주식회사 유이어",//상호명
      owner: "김영주", //사업대표자명
      businessNo: "897-86-03123", //사업자번호
      email: "" //대표자이메일
    },
    blog: "https://blog.naver.com/onit_anyang"
  }
}

export default information;
export type { iBranchInfo, iBranchInfoDetail };
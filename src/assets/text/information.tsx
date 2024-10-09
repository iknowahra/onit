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

interface iBranchInfo {
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
}

const information: iBranchInfo[] = [
  {
    path: "onedang",
    alias: "인천원당점",
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
    }
  },
  {
    path: "pyeongtaek",
    alias: "경기평택점",
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
    }
  },
  {
    path: "yeongdeungpo",
    alias: "영등포구청점",
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
    }
  },
  {
    path: "wonju",
    alias: "강원원주점",
    event: false,
    name: "강원 원주 4호점",
    lat: 37.594593, //위도
    lng: 126.6975021, //경도
    address:
      "강원특별자치도 원주시 치악로 1555, 201호",
    oldAddress: "강원특별자치도 원주시 관설동 1461-1, 201호",
    map: "https://naver.me/xDJjEaJB",
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
    }
  },
];

export default information;
export type { iBranchInfo };
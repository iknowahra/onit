interface iPriceDetail {
  subject: string;
  detail: string;
  reservation: string;
  tab: Array<{
    category: string;
    title: string;
    price: Array<{
      badge?: string;
      title: string;
      detail: string;
      price: string;
      discount?: string;
      photo?: any;
    }>;
  }>;

}

type iPrice = Record<string, iPriceDetail>;

const priceInfo: iPrice = {
  onedang: {
    subject: '인천 원당점 이용가격 안내',
    detail: "합리적인 가격으로 최적화된 업무 환경을 제공합니다.",
    reservation: "",
    tab: [
      {
        category: "office",
        title: '상주|비상주 사무실',
        price: [
          {
            badge: 'Best',
            title: '상주사무실(3인) 1개월',
            detail: '넓은 공간(5평), 개별 냉난방, 공용 복합기',
            price: "440,000원(VAT포함)"
          },
          {

            title: '비상주 사무실 1년',
            detail: '보증금 없음. 월 3만원',
            price: "396,000원(VAT포함)"
          },
          {
            badge: '추천',
            title: '비상주 사무실 2년',
            detail: '보증금 없음. 월 2만원',
            price: "528,000원(VAT포함)"
          },
          {
            title: '공용 컴퓨터 & 복합기',
            detail: '무료 사용',
            price: "무료 제공"
          },
        ],
      },
      {
        category: "study",
        title: '스터디 카페',
        price: [
          {
            badge: 'Best',
            title: '4주 기간권',
            detail: '사물함 무료 이용 가능',
            price: "77,000원"
          },
          {

            title: '2주 기간권',
            detail: '사물함 무료 이용 가능',
            price: "44,000원"
          },
          {
            title: '공용 컴퓨터 & 복합기',
            detail: '인쇄, 복사, 스캔 무료 사용가능',
            price: "무료 제공"
          },
        ],
      }
    ]
  },
  pyeongtaek: {
    subject: '경기 평택점 이용가격 안내',
    detail: "편리하고 조용한 공간에서 집중하고 싶다면 온잇 경기평택점!",
    reservation: "https://naver.me/FqWSOJzk",
    tab: [
      {
        category: "office",
        title: '비상주 사무실',
        price: [
          {
            title: '비상주 사무실 6개월',
            detail: '보증금 없음. 월 3만 5만원',
            price: "231,000원(VAT포함)"
          },
          {

            title: '비상주 사무실 1년',
            detail: '보증금 없음. 월 3만원',
            price: "396,000원(VAT포함)"
          },
          {
            badge: '추천⭐️',
            title: '비상주 사무실 2년',
            detail: '보증금 없음. 월 2만원',
            price: "528,000원(VAT포함)"
          },
          {
            title: '공용 컴퓨터 & 복합기',
            detail: '무료 사용',
            price: "무료 제공"
          },
        ],
      },
      {
        category: "study",
        title: '당일이용권',
        price: [
          {
            title: '당일권(2시간)',
            detail: '오픈실 다인실(공용) 자유석',
            price: "2,000원"
          },
          {

            title: '당일권(5시간)',
            detail: '오픈실 다인실(공용) 자유석',
            price: "5,000원",
          },
          {

            title: '당일권(10시간)',
            detail: '오픈실 다인실(공용) 자유석',
            price: "10,000원",
          },
          {
            badge: 'Best',
            title: '당일권(1일권)',
            detail: '오픈실 다인실(공용) 자유석',
            price: "19,000원",
          },
        ],
      },
      {
        category: "study_time",
        title: '정액권',
        price: [
          {
            title: '50시간/3개월',
            detail: '오픈실 다인실(공용) 자유석',
            price: "50,000원"
          },
          {
            badge: '추천⭐️',
            title: '100시간/5개월',
            detail: '오픈실 다인실(공용) 자유석',
            price: "80,000원",
          },
          {
            title: '2주 기간권',
            detail: '오픈실 다인실(공용) 자유석',
            price: "40,000원"
          },
          {

            title: '4주 기간권',
            detail: '오픈실 다인실(공용) 자유석',
            price: "70,000원",
          },
          {

            title: '8주 기간권',
            detail: '오픈실 다인실(공용) 자유석',
            price: "110,000원",
          },
          {
            badge: 'Best',
            title: '12주 기간권',
            detail: '오픈실 다인실(공용) 자유석',
            price: "180,000원",
          },
        ],
      },
      {
        category: "other",
        title: '지정석(1인)',
        price: [
          {
            title: '2주 기간권',
            detail: '1인실(여 | 공용), 다인실(여)',
            price: "50,000원"
          },
          {

            title: '4주 기간권',
            detail: '1인실(여 | 공용), 다인실(여)',
            price: "80,000원",
          },
          {

            title: '8주 기간권',
            detail: '1인실(여 | 공용), 다인실(여)',
            price: "140,000원",
          },
          {
            badge: 'Best',
            title: '12주 기간권',
            detail: '1인실(여 | 공용), 다인실(여)',
            price: "200,000원",
          },
        ],
      },
      {
        category: "other2",
        title: '지정석(2인)',
        price: [
          {
            title: '2주 기간권',
            detail: '2인실 (넓은방)',
            price: "70,000원"
          },
          {

            title: '4주 기간권',
            detail: '2인실 (넓은방)',
            price: "100,000원",
          },
          {

            title: '8주 기간권',
            detail: '2인실 (넓은방)',
            price: "160,000원",
          },
          {
            badge: 'Best',
            title: '12주 기간권',
            detail: '2인실 (넓은방)',
            price: "220,000원",
          },
        ],
      },
    ]
  },
  yeongdeungpo: {
    subject: '영등포구청점 이용가격 안내',
    detail: "거품없는 가격으로 최적화된 업무 환경을 제공합니다.",
    reservation: "https://naver.me/GRoOa2j9",
    tab: [
      {
        category: "office",
        title: '상주 사무실',
        price: [
          {
            title: '1인실 내측/1개월',
            detail: '최신인테리어, 넓은사무실',
            price: "25~30만원(VAT별도)",
          },
          {
            title: '1인실 창측/1개월',
            detail: '최신인테리어, 넓은사무실',
            price: "33~36만원(VAT별도)",
          },
          {
            title: '2인실 내측/1개월',
            detail: '최신인테리어, 넓은사무실',
            price: "45~50만원(VAT별도)",
          },
          {
            badge: 'Best',
            title: '2인실 창측/1개월',
            detail: '최신인테리어, 넓은사무실',
            price: "55~60만원(VAT별도)",
          },
        ],
      },
      {
        category: "study",
        title: '비상주사무실',
        price: [
          {
            title: '개인사업자 12개월',
            detail: '오픈이벤트 2개월 추가(변동)',
            price: "월 2만원(VAT별도)",
            discount: "1년24만원(VAT별도)"
          },
          {

            title: '개인사업자 24개월',
            detail: '오픈이벤트 4개월 추가(변동)',
            price: "월 1.8만원(VAT별도)",
            discount: "2년43.2만원(VAT별도)"
          },
          {
            title: '법인사업자 12개월',
            detail: '오픈이벤트 2개월 추가(변동)',
            price: "월 2.5만원(VAT별도)",
            discount: "1년30만원(VAT별도)"
          },
          {
            title: '법인사업자 24개월',
            detail: '오픈이벤트 4개월 추가(변동)',
            price: "월 2만원(VAT별도)",
            discount: "2년48만원(VAT별도)"
          },
        ],
      }
    ]
  },
  wonju: {
    subject: '강원 원주점 이용가격 안내',
    detail: "합리적인 가격으로 최적화된 업무 환경을 제공합니다.",
    reservation: "",
    tab: [
      {
        category: "office",
        title: '비상주 사무실',
        price: [
          {
            title: '비상주 사무실 6개월',
            detail: '보증금 없음. 월 3만 5만원',
            price: "231,000원(VAT포함)"
          },
          {

            title: '비상주 사무실 1년',
            detail: '보증금 없음. 월 3만원',
            price: "396,000원(VAT포함)"
          },
          {
            badge: '추천⭐️',
            title: '비상주 사무실 2년',
            detail: '보증금 없음. 월 2만원',
            price: "528,000원(VAT포함)"
          },
        ],
      },
      {
        category: "study",
        title: '상주 사무실',
        price: [
          {
            badge: '🔥오픈 할인가🔥',
            title: '상주사무실(2인) 1개월',
            detail: '4평, 냉난방기 무료',
            price: "27~33만원(VAT별도)",
          },
          {
            badge: '🔥오픈 할인가🔥',
            title: '상주사무실(3인) 1개월',
            detail: '5평, 냉난방기 무료',
            price: "36만원(VAT별도)",
          },
          {
            title: '공용 컴퓨터 & 복합기',
            detail: '무료 사용',
            price: "무료 제공"
          },
        ],
      },
    ]
  },
  daegu: {
    subject: '대구 칠곡점 이용가격 안내',
    detail: "성공적인 비즈니스를 위한 비상주 사무실",
    reservation: "",
    tab: [
      {
        category: "office",
        title: '비상주 사무실',
        price: [
          {
            title: '비상주 사무실 6개월',
            detail: '보증금 없음. 월 3만 5만원',
            price: "210,000원(VAT포함)"
          },
          {

            title: '비상주 사무실 1년',
            detail: '보증금 없음. 월 2.8만원',
            price: "336,000원(VAT포함)"
          },
          {
            badge: '추천⭐️',
            title: '비상주 사무실 2년',
            detail: '보증금 없음. 월 2만원',
            price: "480,000원(VAT포함)"
          },
        ],
      },
      {
        category: "study",
        title: '상주 사무실',
        price: [
          {
            badge: '🚧오픈 준비중🚧',
            title: '상주사무실 준비중',
            detail: '쾌적한 사무실 준비중',
            price: "미정(오픈전)",
          },
        ],
      },
    ]
  },
  bugae: {
    subject: '인천 부개점 이용가격 안내',
    detail: "성공적인 비즈니스를 위한 비상주 사무실",
    reservation: "",
    tab: [
      {
        category: "office",
        title: '비상주사무실 & 스터디카페',
        price: [
          {
            title: '비상주 사무실 6개월',
            detail: '개인 | 법인 동일',
            price: "월 20,000원(VAT별도)"
          },
          {
            title: '비상주 사무실 12개월',
            detail: '개인 | 법인 동일',
            price: "월 15,000원(VAT별도)"
          },
          {
            badge: '추천⭐️',
            title: '비상주 사무실 24개월',
            detail: '개인 | 법인 동일',
            price: "월 15,000원(VAT포함🔥)"
          },
          {
            title: '스터디카페',
            detail: '최저가 운영중',
            price: "1시간 1,500원 ~"
          },
        ],
      },
    ]
  },
  anyang: {
    subject: '경기 안양역점 이용가격 안내',
    detail: "성공적인 비즈니스를 위한 비상주 사무실",
    reservation: "",
    tab: [
      {
        category: "office",
        title: '비상주|상주 사무실',
        price: [
          {
            badge: 'best',
            title: '상주 1인실 내측(1개월)',
            detail: '쾌적한인테리어,시디즈의자',
            price: "15만원~(VAT별도)"
          },
          {
            badge: '추천⭐️',
            title: '비상주 사무실 12개월',
            detail: 'VAT 별도',
            price: "개인2만원,법인3만원"
          },
          {
            title: '입주사 회의실',
            detail: '6인실 회의실',
            price: "무료 사용"
          },
          {
            title: '공용 컴퓨터 & 복합기',
            detail: '무료 사용',
            price: "무료 제공"
          },
        ],
      },
    ]
  },
};

export default priceInfo;
export type { iPriceDetail };

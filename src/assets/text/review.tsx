interface iReviewContent {
  details: string;
  tags: string[];
  user: string;
  source: string;
}

interface iReview {
  main: string;
  sub: string;
  subTitle: string;
  contents: iReviewContent[];
}

const review: iReview[] = [{
  main: '사용자들의 생생 리뷰',
  sub: '온잇 공유오피스 & 스터디카페',
  subTitle: '인천 원당점 ',
  contents: [
    {
      details: `자격증 공부때문에 가까운 스터디카페 알아보던중 가격이 저렴해서 가봤는데 생각보다 깔끔하더라구요.
큼직한 사물함도 무료라고해서 바로 등록했어요~
공유오피스라고해서 뭔가했는데 비상주라 사람이 오는게 아니라 조용하고 한적해서 좋아요.`,
      tags: ["분위기가 편안해요🥰", "친절해요💗"],
      user: '*씨6',
      source: '네이버 지도 리뷰',

    },
    {
      details: `공부하기에 깔끔하고 깨끗해서 좋은 것 같아요 ! 
이것저것 많고 비싼 것보다 필요한 것만 갖춰져있고 가격이 싸서 부담이 되지 않아서 좋아요 ㅎㅎ
`,
      tags: ["친절해요💗"],
      user: '*H 02',
      source: '네이버 지도 리뷰',

    },
    {
      details:
        `타 스터디 카페보다 저렴해서 방문하게 되었습니다!! 
        조용하고 깨끗해서 공부하기 좋습니다!! 
        `,
      tags: ["분위기가 편안해요🥰"],
      user: '*en0620',
      source: '네이버 지도 리뷰',
    },
  ],
},
{
  main: '사용자들의 생생 리뷰',
  sub: '온잇 공유오피스 & 스터디카페',
  subTitle: '경기 평택점 ',
  contents: [
    {
      details: `오랜만에 좋은 스터디카페에 정착한 것 같아서 기쁩니다!
사장님도 친절하시고 스카도 조용하고 아늑하니 공부하기 딱 좋네요 감사합니당🙇‍♀️🙇‍♀️`,
      tags: ["집중하기 좋아요💻", "가성비가 좋아요💰", "친절해요💗"],
      user: '*무소희',
      source: '네이버 지도 리뷰',
    },
    {
      details: `수능이 얼마 남지 않은 상황에서 공부할수 있는 장소를 찾아보다가
가성비가 좋고 사람도 많지 않아서 바로 여기에 4주권을 끊었다.
사장님도 너무 착하시고 학습분위기도 잘 잡혀있어서 앞으로도 계속 이용할 예정이다.
`,
      tags: ["집중하기 좋아요💻", "가성비가 좋아요💰", "친절해요💗", "분위기 관리가 철저해요☝️", "오래 머무르기 좋아요🙂"],
      user: 'lee****',
      source: '네이버 지도 리뷰',
    },
    {
      details:
        `주말에 조용히 업무하려고 방문했는데,
생각했던 것보다 시설도 좋고 깔끔해서 넘 맘에 드네요~
떠드는 사람도 없으니 집중이 잘 되서 더욱 좋았어요~
무엇보다 간식과 커피가 비치되어 있어서
출출할 때 당 충전하기 좋네요~!
앞으로도 집에서 집중 안될 때마다 온잇 스터디카페를 찾을 것 같아요!
        `,
      tags: ["가성비가 좋아요💰", "시설이 깔끔해요✨", "커피가 맛있어요☕️", "인테리어가 멋져요🛋️", "좌석이 편해요🪑"],
      user: '*hima99',
      source: '네이버 지도 리뷰',
    },
  ],
},
{
  main: '사용자들의 생생 리뷰',
  sub: '온잇 공유오피스',
  subTitle: '서울 영등포구청점 ',
  contents: [
    {
      details: `1인사업자여서 공유오피스 구하고 있었는데 딱 알맞는 곳 찾았네요ㅎㅎ
늦은시간 예약했는데도 친절하게 상담해주시고,
젊은사장님이셔서 그런지 제가 필요로 하는것을 알아서 먼저 체크해주시더라구요^^`,
      tags: ["인테리어가 멋져요🛋️", "가성비가 좋아요💰", "친절해요💗", "시설이 깔끔해요✨", "대화하기 좋아요🗣️"],
      user: '*EZI24',
      source: '네이버 지도 리뷰',

    },
    {
      details: `여러곳 상담하고 돌아다녀 봤는데,
그냥 여기가 답이네요. 깔끔 쾌적.
사장님도 친절하시고 답장 칼이시네요.
정착합니다. 다른곳 돌아다니시며 시간낭비 하지 마시길 바랍니다.😁
`,
      tags: ["가성비가 좋아요💰", "인테리어가 멋져요🛋️", "매장이 넓어요👀", "친절해요💗", "아늑해요🥰"],
      user: '*ashaoppaaa',
      source: '네이버 지도 리뷰',
    },
    {
      details:
        `저렴하게 계약할 수 있어서 너무 좋았아요.
사장님이 전화도 친절하신데 실제로 보니 더 친절하세요.
시설도 최근에 인테리어가 마무리 된 것이다보니 너무 깨끗했습니다.
잘 이용할게요!
        `,
      tags: ["가성비가 좋아요💰", "친절해요💗", "분위기 관리가 철저해요☝️", "집중하기 좋아요💻", "룸이 잘 되어있어요🔑"],
      user: '200****',
      source: '네이버 지도 리뷰',

    },
  ],
},
{
  main: '사용자들의 생생 리뷰',
  sub: '온잇 공유오피스',
  subTitle: '강원 원주점 ',
  contents: [],
},
{
  main: '사용자들의 생생 리뷰',
  sub: '온잇 공유오피스',
  subTitle: '대구 칠곡점 ',
  contents: [],
}];
export default review;
export type { iReview };

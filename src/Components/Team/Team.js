import LeftPhoto from '../../assets/images/Team/Photo1.png';
import RightPhoto from '../../assets/images/Team/Photo2.png';

import CEO from '../../assets/images/Team/CEO.png';

import Dev1 from '../../assets/images/Team/Dev1.png';
import Dev2 from '../../assets/images/Team/Dev2.png';
import Dev3 from '../../assets/images/Team/Dev3.png';

import Arch1 from '../../assets/images/Team/Architect1.png';
import Arch2 from '../../assets/images/Team/Architect2.png';

import Saler1 from '../../assets/images/Team/Saler1.png';
import Saler2 from '../../assets/images/Team/Saler2.png';

import Design from '../../assets/images/Team/Design.png';

export const descImgs = {
  left: { img: LeftPhoto, alt: '왼쪽 사진' },
  right: { img: RightPhoto, alt: '오른쪽 사진' },
};

export const profileImgs = {
  CEO: {
    img: CEO,
    alt: '최윤석 사진',
  },
  DEV: [
    { img: Dev1, alt: '나상우 사진' },
    { img: Dev2, alt: '오범수 사진' },
    { img: Dev3, alt: '조영현 사진' },
  ],
  ARCH: [
    { img: Arch1, alt: '전정표 사진' },
    { img: Arch2, alt: '문효원 사진' },
  ],
  SALER: [
    { img: Saler1, alt: '황성지 사진' },
    { img: Saler2, alt: '이소정 사진' },
  ],
  DESIGN: { img: Design, alt: '조성현 사진' },
};

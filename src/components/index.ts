export { default as Buttons } from '@components/buttons/Buttons.js';

let xxx = "%%%CSS내용물여기로%%%";

if(xxx){
  // 초기화
  const style = document.createElement("style");
  style.textContent = xxx;
  document.head.append(style);
  xxx = "";
}

// 빌드와 배포 사이 과정에서, 너가 index.js 안에서 %%%CSS내용물여기로%%% 찾아가지고 이거를
// css파일 내용으로 바꿔치기한다
// 이거 한 뒤에 배포하도록.
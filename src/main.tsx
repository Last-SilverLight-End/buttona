import ReactDOM from 'react-dom/client'
//import{Buttons} from '@hunterkiller404/buttona';
import React from 'react';
import  Buttons  from './components/buttons/Buttons';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Buttons size='small'> 쪼리핑은 신인가? </Buttons>
    <Buttons size='middle'> 나는 신인가? </Buttons>
    <Buttons size='large'> 알략은 신인가? </Buttons>
    <Buttons > 블루 아카이브는 신인가? </Buttons>
    <Buttons> 너는 신인가? </Buttons>
    <Buttons> 이창근은 신인가? </Buttons>
    <Buttons> 빡빢이는 신인가? </Buttons>
    <Buttons> 치킨은 신인가? </Buttons>
  </>
)

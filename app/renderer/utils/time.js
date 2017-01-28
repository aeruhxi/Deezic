export const humanizeSeconds = (second) => {
  const oneDigitNumber = (num) => {
    return num >= 0 && num <=9;
  };

  let time = Math.trunc(second);
  let sec = time % 60;
  time = Math.trunc(time / 60);
  let min = time % 60;
  time = Math.trunc(time / 60);
  let hour = time % 24;

  let humanizedTime = '';
  if (hour) humanizedTime += (oneDigitNumber(hour) ? `0${hour}` : hour) + ':';
  humanizedTime += (oneDigitNumber(min) ? `0${min}` : min) + ':';
  humanizedTime += (oneDigitNumber(sec) ? `0${sec}` : sec);

  return humanizedTime;
};

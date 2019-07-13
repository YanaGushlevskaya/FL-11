let formatTime = time => {
  let days = Math.floor(time / 60 / 24) + ' day(s) ';
  let hours = Math.floor((time / 60) % 24) + ' hour(s) ';
  let minutes = Math.floor(time % 60) + ' minute(s)';

  return `${days} ${hours} ${minutes}`;
};

formatTime(3601);

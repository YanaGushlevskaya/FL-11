let formatTime = time => {
  const DAYS = Math.floor(time / 60 / 24) + ' day(s) ';
  const HOURS = Math.floor((time / 60) % 24) + ' hour(s) ';
  const MINUTES = Math.floor(time % 60) + ' minute(s)';

  return `${DAYS} ${HOURS} ${MINUTES}`;
};

formatTime(3601);

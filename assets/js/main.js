const today = moment();
const firstKiss = moment([2019, 05, 19]);
const diffDays = today.diff(firstKiss, 'days') * (-1)

document.querySelector('.count__day--num').innerHTML = diffDays
function angryProfessor(k, a) {
  onTimeCount = 0;
  for(let t of a) {
    if(t<=0) onTimeCount++;
  }
  return (onTimeCount >= k) ? 'NO' : 'YES';
}

console.log(angryProfessor(3, [-1,-3,4,2]));
function accum(s) {
  var outcome;
  outcome = s[0].toUpperCase();
  for (var i = 1; i < s.length; i++){
    outcome = outcome + "-" + s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
  }
  return outcome;
}




console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

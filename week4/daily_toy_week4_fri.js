function convertScoreToGradeWithPlusAndMinus(score) {
  if (score > 100 || score < 0){
    return "INVALID SCORE";
  } else if (100 >= score && score >= 98 ){
    return "A+";
  } else if (97 >= score && score >= 93){
    return "A";
  } else if (92 >= score && score >= 90){
    return "A-";
  } else if (89 >= score && score >= 88){
    return "B+";
  } else if (87 >= score && score >= 83){
    return "B";
  } else if (82 >= score && score >= 80){
    return "B-";
  } else if (79 >= score && score >= 78){
    return "C+";
  } else if (77 >= score && score >= 73){
    return "C";
  } else if (72 >= score && score >= 70){
    return "C-";
  } else if (69 >= score && score >= 68){
    return "D+";
  } else if (67 >= score && score >= 63){
    return "D";
  } else if (62 >= score && score >= 60){
    return "D-";
  } else {
    return "F";
  }
}



var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'

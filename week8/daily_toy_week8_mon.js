function htmlify(string) {
  return "<p>" + string.replace(/\&/g, '&amp;').replace(/\–/g, '&ndash;').replace(/\’/g, '&rsquo;').replace(/\“/g, '&ldquo;').replace(/\”/g, '&rdquo;') + '</p>';
}





// Punctuation               Char    Encoded
// dash                       –       &ndash;
// apostrophe                 ’       &rsquo;
// ampercant                  &       &amp;
// open quotation marks       “       &ldquo;
// close quotation marks      ”       &rdquo;
//
// Example:
console.log(htmlify("Jess says “Frank & Joe ---aren’t the best bloggers”"));
//
// Returns:
// <p>Jess says & ldquo;Frank & amp; Joe aren& rsquo;t the best bloggers& rdquo;</p>

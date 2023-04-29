/*  Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"  */

// My solution:
function getIssuer(number) {
  const string = number.toString();
 
 if (string.startsWith('34') || string.startsWith('37')) {
   if (string.length === 15) {
     return 'AMEX';
   }
 } else if (string.startsWith('6011')) {
   if (string.length === 16) {
     return 'Discover';
   }
 } else if (string.startsWith('51') || string.startsWith('52') || string.startsWith('53') || string.startsWith('54') || string.startsWith('55')) {
   if (string.length === 16) {
     return 'Mastercard';
   }
 } else if (string.startsWith('4')) {
            if (string.length === 13 || string.length === 16) {
   return 'VISA';
 }
  }
    return 'Unknown'
}
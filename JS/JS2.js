let number=prompt('Please enter number from 0 to 31');

if (number >= 0 && number <= 10) {
    alert( "Перша декада" );
} else if (number >= 11 && number <= 20) {
    alert( "Друга декада" );
} else if (number >= 21 && number <= 31) {
    alert( "Третя декада" );
}
else {
    alert('Please enter correct number')
}
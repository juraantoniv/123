let number=prompt('Please enter number from 0 to 59');

if (number >= 0 && number <= 14) {
    alert( "Перша чверть" );
} else if (number >= 15 && number <= 29) {
    alert( "Друга чверть" );
} else if (number >= 30 && number <= 44) {
    alert( "Третя чверть" );
} else if (number >= 45 && number <= 60) {
    alert( "Четверта чверть" );
} else {
    alert('Please enter correct number')
}
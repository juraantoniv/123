let a =prompt("Please enter day of the week")

switch (a) {
    case 1:
        alert( 'Понеділок-Зал' );
        break;
    case 2:
        alert( 'Вівторок-Басейн' );
        break;
    case 3:
        alert( 'Середа-Відпосинок' );
        break;
    case 4:
        alert( 'Четвер- Кино' );
        break;
    case 5:
        alert( 'Пятница- Футбол' );
        break;
    case 6:
        alert( 'Субота- Дім' );
        break;
    case 7:
        alert( 'Пятница-Церква' );
        break;
    default:
        alert( "Нема такого дня" );
}
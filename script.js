// var bouton_non = document.getElementById('non');
// bouton_non.onClick = function(){
// 	var backgr = document.getElementById('back-black')
// 	backgr.remove('back-black');
// }
var non = document.getElementsByClassName('choix-non');
console.log(non);
for (var i = 0 ; i <= non.length ; i++) {
	non.addEventListener('click',function(){
		console.log('ok');
	});
}

// function getInfo(){
// var hello = document.createElement('div')
// var raman = document.getElementById('jhund')
// var newImg = document.createElement('img')
// var textHere = document.createTextNode('write ji')
// hello.appendChild(textHere)
// newImg.setAttribute('src', 'http://i1.wp.com/www.lyricshawa.com/wp-content/uploads/2016/09/Gaddi-Meri.jpg?resize=604%2C280')
// hello.setAttribute('id','hi')
// hello.appendChild(newImg)

// raman.appendChild(hello)


// // hello.appendChild(newImg)

// }
var answers = [
{
	answer:"0"
},
{
	answer:"obama"
},
{
	answer:"walmart"
},
{
	answer:"eminem"
},
{
	answer:"isolate"
},
{
	answer:"fifa"
},
{
	answer:"rosie"
},
{
	answer:"new delhi,india"
},
{
	answer:"$101 million"
},
{
	answer:"Marshall Bruce Mathers"
},
]

function getInfo() {
	var correct = 0;
	var incorrect = 0;
    for (var i = 0; i < answers.length; i++) {
		var wrong = answers[i].answer
		var right = document.getElementById('answer' + [i]).value
		var spot = document.getElementById('question' +[i])
		var button = document.getElementById('bhinda').value
		button.className = 'animated flash'
		if (right == wrong){
              spot.className = 'correct'
              correct++
		} else {
			spot.className = 'incorrect'
			incorrect++
		}
        
	} 
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}











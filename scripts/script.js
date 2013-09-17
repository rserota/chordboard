$(document).ready(function(){
	var down7=false
	var down8=false
	var down9=false
	var down0=false
	$(document).keydown(function(event){
////////// Left hand events		
		if(event.which === 49){
			console.log('1!')
			$('#chords .keybound').css('background-color','blue')
			$('#1').css('background-color','green')
		}
		if(event.which === 50){
			console.log('2!')
			$('#chords .keybound').css('background-color','blue')
			$('#2').css('background-color','green')
		}
		if(event.which === 51){
			console.log('3!')
			$('#chords .keybound').css('background-color','blue')
			$('#3').css('background-color','green')
		}
		if(event.which === 52){
			console.log('4!')
			$('#chords .keybound').css('background-color','blue')
			$('#4').css('background-color','green')
		}

/////////// Right hand events
		if(event.which === 55 && down7===false){
			down7=true
			console.log('7!')
			$('#7').css('background-color','green')
		}
		if(event.which === 56 && down8===false){
			down8=true
			console.log('8!')
			$('#8').css('background-color','green')
		}
		if(event.which === 57 && down9===false){
			down9=true
			console.log('9!')
			$('#9').css('background-color','green')
		}
		if(event.which === 48 && down0===false){
			down0=true
			console.log('0!')
			$('#0').css('background-color','green')
		}
	})
	$(document).keyup(function(event){
		if(event.which === 55){
			console.log('7!')
			$('#7').css('background-color','blue')
			down7=false
		}
		if(event.which === 56){
			console.log('8!')
			$('#8').css('background-color','blue')
			down8=false
		}
		if(event.which === 57){
			console.log('9!')
			$('#9').css('background-color','blue')
			down9=false
		}
		if(event.which === 48){
			console.log('0!')
			$('#0').css('background-color','blue')
			down0=false
		}
	})
})
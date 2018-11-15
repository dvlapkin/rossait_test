function showsendbutton(){
	if (($('#name').val()!="")&&($('#tel').val()!="")&&($('#email').val()!="")) 
		$('.sendbutton').css('visibility','visible');
}
function hidesendbutton(){
	$('.sendbutton').css('visibility','hidden');
}
function modalshow(){
	$('.modalbackground').css('visibility','visible');
		if (($('#name').val()!="")&&($('#tel').val()!="")&&($('#email').val()!="")){
		$('.sendbutton').css('visibility','visible');}
}

window.onload=function(){

$('.button').on('click',function(){
	setTimeout(modalshow(),500);
	})

	
$('#modalform').submit(function(e){
	e.preventDefault();	

	var name=$('#name').val();
	var tel=$('#tel').val();
	var email=$('#email').val();
/*проверка инпутов полностью*/	
	var rename=/^[а-яА-Яa-zA-ZёЁ]{2,20}$/;
	if (!rename.test(name)) {
		alert ('Только буквы в имени, больше 2');return;};
		
	var retel=/^[\d\+\(][\d\(\)\ -]{8,16}\d$/;	
	if (!retel.test(tel)) {
		alert('Номер телефона введен неверно');return;};
	
	var remail=/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;	
	if (!remail.test(email)) {
		alert('E-mail введен неверно');return;};	
/* если ок - то пост*/	
	$.ajax({
		 type: 'POST',
		 url: 'modal.php',
		 data: $('#modalform').serialize(),
		 success: function (data) {
			$('.modalbackground').css('visibility','hidden'); 
			$('.sendbutton').css('visibility','hidden');
			$('.main').css('width','300');
			$('.main').css('height','10em');
			$('.button').css('visibility','hidden');			
			$('.txt').css('visibility','visible');
			$('.txt').html(data);
			$('.clearbutton').on('click',function(){
				$('.txt').css('visibility','hidden');
				$('.button').css('visibility','visible');
				$('.main').css('width','10em');
				$('.main').css('height','3em');
				})	
		 },
		 error: function (jqXHR, text, error) {
			console.log(text,error);
		 }
		 });	
	})

/*проверка инпутов на лету по введенному символу*/
	
$('#name').on('input',function(){
	var name=$('#name').val();
	var rename=/^[а-яА-Яa-zA-ZёЁ]{1,20}$/;
	if (rename.test(name)) {
		showsendbutton();
	}else{
		$('#name').val($('#name').val().slice(0,-1));		
		alert ('Больше 2х букв должно быть в имени');
		if ($('#name').val()=='') hidesendbutton();
		return;}
	})
	
$('#tel').on('input',function(){
	var tel=$('#tel').val();
	var retel=/^[\d\(\)\ \+-]{1,20}$/;	
	if (retel.test(tel)) {
		showsendbutton();
	}else{
		$('#tel').val($('#tel').val().slice(0,-1));
		alert('Номер телефона вводится неверно');
		if ($('#tel').val()=='') hidesendbutton();
		return;}
	})	
	
$('#email').on('input',function(){
	var mail=$('#email').val();
	var remail=/^[\w-\.@]{1,40}$/;	
	if (remail.test(mail)) {
		showsendbutton();
	}else{
		$('#email').val($('#email').val().slice(0,-1));
		alert('Емаил вводится неверно');
		if ($('#email').val()=='') hidesendbutton();
		return;}
	})	
	
	
};


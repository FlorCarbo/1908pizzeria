let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let mail = document.getElementById('mail');
let celular = document.getElementById('celular');
let comenzales = document.getElementById('comenzales');
let fecha = document.getElementById('fecha');	

    function enviarFormulario(){        
        let mensajesError = ["Por favor completa los siguientes campos: "];
		let mensajeResumen = ["Resumen de los datos: "];

		if (nombre.value ===null  || nombre.value ===''){
			mensajesError.push("Nombre");
		} else{mensajeResumen.push(nombre.value);}
		
		if (apellido.value ===null  || apellido.value ===''){
			mensajesError.push("Apellido");
		} else{mensajeResumen.push(apellido.value);}

       if ( celular.value.length<10 ){ 
			mensajesError.push("Ingresa un celular válido ");
		}  else{mensajeResumen.push("Te enviaremos un Whatsapp confirmando disponibilidad al " + celular.value );}

		if (fecha.value ===null  || fecha.value ===''){
			mensajesError.push("Selecciona la fecha ");
		}

		let dia = new Date(fecha.value);
		
		if (dia.getDay()===1 ){
			alert("Los Lunes no abrimos, podes hacer tu reserva de Martes a Domingos ");
		} else{mensajeResumen.push("El dia ingresado es: " + dia.toLocaleDateString());}

		if (dia.getHours()>20 && dia.getMinutes()>31 || dia.getHours()<18){
			alert("El horario para reservas es hasta las 20:30 Hs");
		} else{mensajeResumen.push("a las " + dia.getHours() + ":" + dia.getMinutes() );}

		if(mail.value.includes("@") && mail.value.includes(".com")){
			mensajeResumen.push("Mail: " + mail.value);
		} else {mensajesError.push("Por favor ingresar un mail valido para que podamos confirmar disponibilidad");}

		

		if (nombre.value!='' && apellido.value!='' && comenzales.value!='' && fecha.value!='' && dia.getDay()!=1 && celular.value.length==10 && mail.value.includes("@") && mail.value.includes(".com")){
			alert(mensajeResumen.join(' '));
			window.location.href ='mailto:florenciacarbonara.facultad@gmail.com?subject='
                         + "Reserva " + encodeURIComponent(nombre.value)
                         + "&body=" 
                         + encodeURIComponent(
					     "Nombre y Apellido: " + nombre.value + " " + apellido.value + "\r" +
						 "Mail: " + mail.value + "\r" +
						 "Celular: " + celular.value + "\r" +
						 "Día: " + dia.toLocaleDateString() + "\r" +
						 "Horario: " + dia.getHours() + ":" + dia.getMinutes());	
		} else{alert(mensajesError.join(' , '));}


	}
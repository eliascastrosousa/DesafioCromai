function confirmar() {
    var ca1 = document.getElementById('ad') 
    var ca2 = document.getElementById('op') //puxando as variaveis do html
    var ca = Number(ca1.value) //convertendo
    var co = Number(ca2.value)
    var hipotenusa = (co**2+ca**2)**(1/2)
    var msg = document.getElementById('msg') //msg da tela
    msg.innerHTML = `A medida da Hipotenusa (c²) é: ${hipotenusa.toFixed(2)}`
    
    
}
let hub = ``
function calcTriangle(base, altura) {
    return (base * altura)/2
}
function calcRectangle(base, altura) {
    return base * altura
}
function calcSquare(lado) {
    return lado ** 2
}
function calcTrapeze(baseMaior, baseMenor , altura) {
    return (baseMaior + baseMenor) * altura / 2
}
function calcCircle(raio) {
    return 3.14 * (raio ** 2)
}
do {
    switch(hub) {
        case '1':
            let base = parseInt(prompt('Digite a base'))
            let altura = parseInt(prompt('Digite a altura'))
            alert(calcTriangle(base , altura))
            break
        case '2':
            let base2 = parseInt(prompt('Digite a base'))
            let altura2 = parseInt(prompt('Digite a altura'))
            alert(calcRectangle(base2 , altura2))
            break
        case '3':
            let lado = parseInt(prompt('Digite o lado'))
            alert(calcSquare(lado))
            break
        case '4':
            let baseMaior = parseInt(prompt('Digite a base maior'))
            let baseMenor = parseInt(prompt('Digite a base menor'))
            let altura3 = parseInt(prompt('Digite a altura'))
            calcTrapeze(baseMaior , baseMenor , altura3)
            break
        case '5':
            let raio = parseInt(prompt('Digite o raio'))
            alert(calcCircle(raio))
            break            
    }
    hub = prompt(`OPÇÕES DE CALCULO DE ÁREA:\n1:Triangulo\n2:Retângulo\n3:Quadrado\n4:Trapezio\n5:Circulo\n6:Sair`)
} while (hub != '6')
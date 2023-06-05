function nota(num1) {
    let ultinum = num1 % 10
    if (num1 > 37) {
        if (ultinum = 3 || 8) {
            num1 = num1 + 2
        } else if (ultinum = 4 || 9) {
            num1 = num1 + 1
        }
        console.log("Aprovado!")
    } else {
        console.log("BANIDO")
    }
    console.log(`Com a nota ${num1}!`);

}
nota(38)

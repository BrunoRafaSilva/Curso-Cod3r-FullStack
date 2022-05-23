function Pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(function() {
        self.idade++ //this.idade++
        console.log(self.idade)
    }/*.bind(this) se ao inves de self tiver this no self.idade*/, 1000)
}

new Pessoa
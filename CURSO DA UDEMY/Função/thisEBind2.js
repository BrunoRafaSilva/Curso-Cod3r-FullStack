function Pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this) se ao inves de self tiver this*/, 1000)
}

new Pessoa
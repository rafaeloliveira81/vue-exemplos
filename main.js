// # interpolação de texto
var app = new Vue({
    el: '#app',
    data: {
        mensagem: 'Olá Vue JS'
    }
})

// # interligação de atributos e elementos
var app2 = new Vue({
    el: '#app-2',
    data: {
        mensagem: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
})

// # Elementos Condicionais
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

// # Loop com elementos
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Aprender JavaScript' },
            { text: 'Aprender Vue' },
            { text: 'Criar algo incrível' }
        ]
    }
})

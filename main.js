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

// # Interação do usuário
var app5 = new Vue({
    el: '#app-5',
    data: {
        mensagem: 'Olá Vue!'
    },
    methods: {
        inverter: function() {
            this.mensagem = this.mensagem.split('').reverse().join('')
        }
    }
})

// # Two-way binding
var app6 = new Vue({
    el: '#app-6',
    data: {
        mensagem: 'Interligação de mão dupla'
    }
})

// # Componente
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        listaDeCompras: [
            { id: 0, text: 'Vegetais' },
            { id: 1, text: 'Queijo' },
            { id: 2, text: 'Carne' }
        ]
    }
})

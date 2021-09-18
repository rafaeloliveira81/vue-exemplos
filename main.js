var app = new Vue({
    el: '#app',
    data: {
        mensagem: 'Olá Vue JS'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        mensagem: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

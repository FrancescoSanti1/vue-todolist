var app = new Vue(
    {
        el: "#myApp",
        data: {
            nuovaTask: "",
            coseDaFare: [
                {text: "Fare la spesa", done: false},
                {text: "Mettere le gomme termiche", done: false},
                {text: "Pagare F24", done: false},
                {text: "Chiamare la mamma", done: true},
                {text: "Fare almeno 15.000 passi", done: false},
                {text: "Leggere dieci pagine", done: true}
            ]
        },
        methods: {
            eliminaTask: function(indice) {
                this.coseDaFare.splice(indice, 1);
            },
            aggiungiTask: function() {
                let nuovoOggetto = {text: this.nuovaTask, done: false};
                this.coseDaFare.push(nuovoOggetto);
                this.nuovaTask = "";
            },
            segnaComeFatta: function(indice) {
                this.coseDaFare[indice].done = true;
            }
        }
});
// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue({
    el: '#root',
    data: {

        arrayMails : [],

    },


    mounted(){
        for (var i = 0; i <= 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((pluto) => {
                    this.arrayMails.push(pluto.data.response);
                    console.log(pluto.data.response);
                });

        }
        
    }
});
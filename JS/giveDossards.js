"use strict";
const app = Vue.createApp({
    data() {
        return {
            participants: [],
            json: null,
        }
    },
    methods: {
    },
    computed : {
        sortedTickets() {
            return this.participants;
        }
    
    },
    mounted() {
        fetch("../request/listTickets.php")
            .then(response => response.json())
            .then(lstPers => {
                this.participants = lstPers;
        });
    }
});
app.mount("#app")         
            
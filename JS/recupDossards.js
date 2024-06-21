"use strict";
const app = Vue.createApp({
    data() {
        return {
            dossards: [],
            search : null
        }
    },
    methods: {
        deleteDossard(dossard) {
            let formData = new FormData();
            formData.append("id", dossard[0]);
            fetch("../request/DeleteDossard.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(lstDossards => {
                this.dossards = lstDossards;
            });
            location.reload();
        },
        errorDossard(dossard){
            let formData = new FormData();
            formData.append("id", dossard[0]);
            fetch("../request/ErrorDossard.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(lstDossards => {
                this.dossards = lstDossards;
            });
            location.reload();
        }
    },
    computed: {
        dossardSearch() {
            let dossards = this.dossards;
            if(!this.search) {
                return dossards;
            }
            let search = this.search.toLowerCase();
            return dossards.filter(dossard => {
                return dossard.last_name.toLowerCase().includes(search) || dossard.first_name.toLowerCase().includes(search);
            });
        }
    },
    mounted() {
        fetch("../request/listDossards.php")
        .then(response => response.json())
        .then(lstDossards => {
            this.dossards = lstDossards;
        });
    }
});
app.mount("#app");
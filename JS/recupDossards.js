"use strict";
const app = Vue.createApp({
    data() {
        return {
            dossards: [],
        }
    },
    methods: {
        deleteDossard(dossard) {
            let formData = new FormData();
            formData.append("id", dossard.id);
            fetch("../request/DeleteDossard.php", {
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
    mounted() {
        fetch("../request/listDossards.php")
        .then(response => response.json())
        .then(lstDossards => {
            this.dossards = lstDossards;
        });
    }
});
app.mount("#app");
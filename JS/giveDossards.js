"use strict";
const app = Vue.createApp({
    data() {
        return {
            participants: [],
            json: null,
            selected_participant: null,
            selectedParticipantValue: null,
        }
    },
    methods: {
        selectParticipant(selected_participant) {
            this.selectedParticipantValue = this.participants.find(participant => participant.last_name === selected_participant.split(" ")[0] && participant.first_name === selected_participant.split(" ")[1]);
            this.selectedParticipantValue.payment_status = this.selectedParticipantValue.payment_status === "paid";
        },
        linkToDossard() {
            let formData = new FormData();
            formData.append("id", this.selectedParticipantValue.id);
            fetch("../request/giveDossards.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(lstPers => {
                this.participants = lstPers;
            });
        },
        updatePlateNumber(plateNumber){
            alert(plateNumber);
            let formData = new FormData();
            formData.append("id", this.selectedParticipantValue.id);
            formData.append("plateNumber", plateNumber);
            fetch("../request/updatePlateNumber.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(lstPers => {
                this.participants = lstPers;
            });
        }
    },
    computed : {
        sortedTickets() {
            return this.participants;
        },
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
            
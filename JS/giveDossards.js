"use strict";
const app = Vue.createApp({
    data() {
        return {
            participants: [],
            json: null,
            selected_participant: null,
            selectedParticipantValue: null,
            resultMessage: null,
        }
    },
    methods: {
        selectParticipant(selected_participant) {
            this.selectedParticipantValue = this.participants.find(participant => participant.last_name === selected_participant.split(" ")[0] && participant.first_name === selected_participant.split(" ")[1]);
            this.selectedParticipantValue.payment_status = this.selectedParticipantValue.payment_status === "paid";
        },
        updatePlateNumber(plateNumber){
            let formData = new FormData();
            formData.append("id", this.selectedParticipantValue.vehicles_id);
            formData.append("plate_number", plateNumber);
            fetch("../request/UpdatePlateNumber.php", {
                method: "POST",
                body: formData
            });
        },
        setPayementStatus() {
            let formData = new FormData();
            formData.append("id", this.selectedParticipantValue.tickets_id);
            formData.append("payment_status", this.selectedParticipantValue.payment_status ? "paid" : "unpaid");
            fetch("../request/SetPayementStatus.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(result => {
                this.resultMessage = result;
            });
        },
        updateComment(comment){
            let formData = new FormData();
            formData.append("id", this.selectedParticipantValue.tickets_id);
            formData.append("content", comment);
            fetch("../request/UpdateComment.php", {
                method: "POST",
                body: formData
            });
        },
        giveDossard() {
            let formData = new FormData();
            formData.append("id_ticket", this.selectedParticipantValue.tickets_id);
            formData.append("number", this.selectedParticipantValue.dossard_number);
            formData.append("color_number", this.selectedParticipantValue.font_color);
            formData.append("background_color", this.selectedParticipantValue.dossard_color);
            fetch("../request/LinkDossardToTicket.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(result => {
                this.resultMessage = result;
            });
            location.reload();
        },
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
            
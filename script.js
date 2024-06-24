// Data for each house
const houseData = {
    Esther: 500,
    Ruth: 750,
    Matthew: 600,
    Daniel: 800
};

document.addEventListener("DOMContentLoaded", () => {
    updateFunds();
});

function updateFunds() {
    document.getElementById('funds-esther').innerText = `$${houseData.Esther}`;
    document.getElementById('funds-ruth').innerText = `$${houseData.Ruth}`;
    document.getElementById('funds-matthew').innerText = `$${houseData.Matthew}`;
    document.getElementById('funds-daniel').innerText = `$${houseData.Daniel}`;
}

function openModal(house) {
    document.getElementById('modal-house-name').innerText = `Comment on House ${house}`;
    document.getElementById('comment-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('comment-modal').style.display = 'none';
}

function submitComment() {
    const comment = document.getElementById('comment-text').value;
    if (comment) {
        alert(`Your comment has been submitted: ${comment}`);
        document.getElementById('comment-text').value = '';
        closeModal();
    } else {
        alert('Please enter a comment.');
    }
}

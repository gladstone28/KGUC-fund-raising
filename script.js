document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  updateFunds();
  document.getElementById('comment-form').addEventListener('submit', submitComment);
});

// Data for each house
const houseData = {
    Esther: 210000,
    Ruth: 210000,
    Matthew: 210000,
    Daniel: 210000
};

document.addEventListener("DOMContentLoaded", () => {
    updateFunds();
    document.getElementById('comment-form').addEventListener('submit', submitComment);
});

function updateFunds() {
    document.getElementById('funds-esther').innerText = `$${houseData.Esther}`;
    document.getElementById('funds-ruth').innerText = `$${houseData.Ruth}`;
    document.getElementById('funds-matthew').innerText = `$${houseData.Matthew}`;
    document.getElementById('funds-daniel').innerText = `$${houseData.Daniel}`;
}

function openModal(house) {
    document.getElementById('modal-house-name').innerText = `Comment on House ${house}`;
    document.getElementById('house-name').value = house;
    document.getElementById('comment-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('comment-modal').style.display = 'none';
}

function submitComment(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xjkbboeb", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Your comment has been submitted.');
            form.reset();
            closeModal();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            })
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form');
    });
}


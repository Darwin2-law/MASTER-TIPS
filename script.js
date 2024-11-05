document.addEventListener("DOMContentLoaded", function () {
    const adminAccess = true; // Set to true if user is admin, otherwise false.
    const adminBar = document.getElementById("adminBar");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");
    const closeButton = document.querySelector(".close-button");

    // Display icon bar only for admins
    if (!adminAccess) {
        adminBar.style.display = "none";
    }

    // Icon actions for displaying content or redirection
    const iconActions = {
        adminIcon: function () {
            modalContent.innerHTML = `<h2>Admin Panel</h2><p>Manage website settings and users.</p>`;
            modal.style.display = "flex";
        },
        communityChart: function () {
            window.location.href = "community_charts.html";
        },
        vipGames: function () {
            modalContent.innerHTML = `<h2>VIP Games</h2><p>Access exclusive VIP match predictions.</p>`;
            modal.style.display = "flex";
        },
        fixed_Odds: function () {
            window.location.href = "fixed_odds.html";
            modalContent.innerHTML = `<h2>Jackpot Games</h2><p>Try your luck with the jackpot games!</p>`;
            modal.style.display = "flex";
        },
    
        jackpot: function () {
            modalContent.innerHTML = `<h2>Jackpot Games</h2><p>Try your luck with the jackpot games!</p>`;
            modal.style.display = "flex";
        },
        megaJackpot: function () {
            window.location.href = "mega_jackpot.html";
        },

        vipGames: function () {
            window.location.href = "vip.html";
        },

        jackpot: function () {
            window.location.href = "jackpot.html";
        },

        adminIcon: function () {
            window.location.href = "admin.html";
        },

        Megabar: function () {
            window.location.href = "mega.html";
        },

        booking: function () {
            window.open("https://chat.whatsapp.com/KwHuhrfGwyGCVamRFrI61t");
        }
    };

    // Assign click events to each icon
    Object.keys(iconActions).forEach(iconId => {
        const iconElement = document.getElementById(iconId);
        if (iconElement) {
            iconElement.addEventListener("click", iconActions[iconId]);
        }
    });

    // Close modal when the close button is clicked
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const adminAccess = true; // Set to true if user is an admin; otherwise, false.

    const addRowButton = document.getElementById("addRowButton");
    if (adminAccess) {
        addRowButton.style.display = "block"; // Show button only to admin
    }

    window.addRow = function () {
        const tableBody = document.querySelector("#matchTable tbody");
        const rowCount = tableBody.rows.length + 1;

        // Ensure no more than 20 rows are added
        if (rowCount > 20) {
            alert("Only 20 rows allowed.");
            return;
        }

        // Create a new row
        const newRow = tableBody.insertRow();
        newRow.insertCell(0).textContent = rowCount;
        newRow.insertCell(1).textContent = "Team A"; // Placeholder, replace with input if needed
        newRow.insertCell(2).textContent = "Team B"; // Placeholder
        newRow.insertCell(3).textContent = "Win"; // Placeholder
        newRow.insertCell(4).textContent = "Draw"; // Placeholder
        newRow.insertCell(5).textContent = "Loss"; // Placeholder
    };
});

function showData(type) {
    const dataDisplay = document.getElementById('dataDisplay');
    const matchData = JSON.parse(localStorage.getItem('matchData')) || [];
    dataDisplay.innerHTML = '';

    const table = document.createElement('table');
    table.className = 'data-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>No.</th>
                <th>Team A</th>
                <th>Team B</th>
                <th>Win</th>
                <th>Draw</th>
                <th>Loss</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    const tbody = table.getElementsByTagName('tbody')[0];
    matchData.forEach((match, index) => {
        const newRow = tbody.insertRow();
        newRow.insertCell(0).innerText = index + 1;
        newRow.insertCell(1).innerText = match.teamA;
        newRow.insertCell(2).innerText = match.teamB;
        newRow.insertCell(3).innerText = match.win;
        newRow.insertCell(4).innerText = match.draw;
        newRow.insertCell(5).innerText = match.loss;
    });

    dataDisplay.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
    const formationSelect = document.getElementById('formation-select');
    const playerPositionsContainer = document.getElementById('player-positions');
    const editableNames = document.querySelectorAll('.editable-name');

    // Define las posiciones para cada formación
    const formations = {
        '4-4-2': [
            { top: '5%', left: '50%' }, // GK
            { top: '25%', left: '10%' }, { top: '20%', left: '35%' }, { top: '20%', left: '65%' }, { top: '25%', left: '90%' }, // DF
            { top: '50%', left: '10%' }, { top: '45%', left: '35%' }, { top: '45%', left: '65%' }, { top: '50%', left: '90%' }, // MF
            { top: '75%', left: '35%' }, { top: '75%', left: '65%' } // FW
        ],
        '4-3-3': [
            { top: '5%', left: '50%' }, // GK
            { top: '25%', left: '10%' }, { top: '20%', left: '35%' }, { top: '20%', left: '65%' }, { top: '25%', left: '90%' }, // DF
            { top: '45%', left: '25%' }, { top: '40%', left: '50%' }, { top: '45%', left: '75%' }, // MF
            { top: '70%', left: '10%' }, { top: '80%', left: '50%' }, { top: '70%', left: '90%' } // FW
        ],
        '3-5-2': [
            { top: '5%', left: '50%' }, // GK
            { top: '20%', left: '25%' }, { top: '15%', left: '50%' }, { top: '20%', left: '75%' }, // DF
            { top: '40%', left: '5%' }, { top: '45%', left: '25%' }, { top: '50%', left: '50%' }, { top: '45%', left: '75%' }, { top: '40%', left: '95%' }, // MF
            { top: '75%', left: '35%' }, { top: '75%', left: '65%' } // FW
        ],
        '5-3-2': [
            { top: '5%', left: '50%' }, // GK
            { top: '20%', left: '5%' }, { top: '15%', left: '25%' }, { top: '10%', left: '50%' }, { top: '15%', left: '75%' }, { top: '20%', left: '95%' }, // DF
            { top: '45%', left: '25%' }, { top: '50%', left: '50%' }, { top: '45%', left: '75%' }, // MF
            { top: '75%', left: '35%' }, { top: '75%', left: '65%' } // FW
        ]
    };

    /**
     * Renders the player positions on the field based on the selected formation.
     * @param {string} formationKey - The key for the selected formation (e.g., '4-4-2').
     */
    function renderFormation(formationKey) {
        playerPositionsContainer.innerHTML = '';
        const positions = formations[formationKey];

        positions.forEach((pos, index) => {
            const playerSpot = document.createElement('div');
            playerSpot.classList.add('player-spot');
            playerSpot.style.left = pos.left;
            playerSpot.style.top = pos.top;
            
            const playerCircle = document.createElement('div');
            playerCircle.classList.add('player-circle');
            
            const playerName = document.createElement('div');
            playerName.classList.add('editable-name', 'player-name');
            playerName.textContent = 'Nombre';

            playerSpot.appendChild(playerCircle);
            playerSpot.appendChild(playerName);
            playerPositionsContainer.appendChild(playerSpot);
        });
    }

    // Event listener for formation selection
    formationSelect.addEventListener('change', (e) => {
        renderFormation(e.target.value);
    });

    // Event listeners for editable names
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('editable-name')) {
            const currentName = target.textContent;
            const newName = prompt('Ingresa el nuevo nombre:', currentName);
            if (newName !== null && newName.trim() !== '') {
                target.textContent = newName.trim();
            }
        }
    });

    // Initial render when the page loads
    renderFormation(formationSelect.value);
});

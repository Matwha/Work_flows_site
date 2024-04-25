document.addEventListener('DOMContentLoaded', function() {
    const addStageButton = document.getElementById('addStage');
    const stagesArea = document.getElementById('stagesArea');
    let stageCount = 0;

    function addStage() {
        stageCount++;
        const stageDiv = document.createElement('div');
        stageDiv.classList.add('stage');
        stageDiv.innerHTML = `
            <label for="stage-${stageCount}-name">Stage ${stageCount} Name:</label>
            <input type="text" id="stage-${stageCount}-name" name="stage-${stageCount}-name" required>
            
            <label for="stage-${stageCount}-approver">Approver Email:</label>
            <input type="email" id="stage-${stageCount}-approver" name="stage-${stageCount}-approver" required>
            
            <button type="button" class="removeStage">Remove Stage</button>
        `;
        stagesArea.appendChild(stageDiv);

        // Attach event listener to the remove button
        stageDiv.querySelector('.removeStage').addEventListener('click', function() {
            stagesArea.removeChild(stageDiv);
        });
    }

    addStageButton.addEventListener('click', addStage);

    // Add initial stage
    addStage();
});

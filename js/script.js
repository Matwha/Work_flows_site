document.addEventListener('DOMContentLoaded', function() {
    const addStageButton = document.getElementById('addStage');
    const stagesArea = document.getElementById('stagesArea');
    let stageCount = 0;

    addStageButton.addEventListener('click', function() {
        stageCount++;
        const stageDiv = document.createElement('div');
        stageDiv.classList.add('stage');
        stageDiv.setAttribute('id', 'stage-' + stageCount);
        stageDiv.innerHTML = `
            <label for="stage-${stageCount}-name">Stage ${stageCount} Name:</label>
            <input type="text" id="stage-${stageCount}-name" name="stage-${stageCount}-name" required>
            
            <label for="stage-${stageCount}-approver">Approver:</label>
            <input type="email" id="stage-${stageCount}-approver" name="stage-${stageCount}-approver" required>
            
            <button type="button" class="removeStage" data-stage="${stageCount}">Remove Stage</button>
        `;
        stagesArea.appendChild(stageDiv);
    });

    stagesArea.addEventListener('click', function(event) {
        if (event.target.classList.contains('removeStage')) {
            const stageId = event.target.getAttribute('data-stage');
            const stageDiv = document.getElementById('stage-' + stageId);
            stagesArea.removeChild(stageDiv);
        }
    });
});

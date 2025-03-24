document.addEventListener('DOMContentLoaded', function() {
    // Initial icebreaker questions
    const initialIcebreakers = [
        "What is your dream vacation destination?",
        "What is a recent movie or TV show that you enjoyed?",
        "If you could have any superpower, what would it be?",
        "What's your favorite way to spend a day off?",
        "What's one hobby you'd like to get into?",
        "What was your first job?",
        "If you could meet any historical figure, who would it be?",
        "What's the best piece of advice you've ever received?",
        "What's your go-to comfort food?",
        "If you could instantly become an expert in something, what would it be?",
        "What's a skill you'd like to learn this year?",
        "What's your favorite season and why?",
        "If you could live anywhere in the world, where would it be?",
        "What's the last book you really enjoyed?",
        "What music have you been listening to lately?",
        "What's your favorite breakfast food?",
        "If you could switch jobs with anyone for a day, who would it be?",
        "What's something you're looking forward to?",
        "What's your favorite way to exercise or stay active?",
        "If you could instantly learn any language, which would you choose?",
        "What's the most interesting place you've ever visited?",
        "What's a small win you've had recently?",
        "What's the most interesting fact you know?",
        "What's your favorite type of cuisine?",
        "What was your favorite subject in school?",
        "If you could have dinner with any celebrity, who would it be?",
        "What's a goal you're currently working toward?",
        "What's your favorite local spot in your area?",
        "If you could time travel, would you go to the past or future?",
        "What's the best concert or performance you've attended?",
        "What's something you've learned recently?",
        "What's your favorite app on your phone right now?",
        "If you could be a character in any TV show, which would you choose?",
        "What's a technology you can't live without?",
        "What's a favorite childhood memory?",
        "What's a podcast you enjoy listening to?",
        "If you had a theme song, what would it be?",
        "What's the most beautiful place you've ever seen?",
        "What would be your perfect weekend?",
        "What's something you're proud of accomplishing?",
        "What's your favorite board game or card game?",
        "What's a hidden talent you have?",
        "What's your favorite holiday tradition?",
        "If you were a chef, what would be your signature dish?",
        "What's a book that changed your perspective on something?",
        "If you could master any musical instrument instantly, which would you choose?",
        "What's your go-to karaoke song?",
        "What's the best gift you've ever received?",
        "If you could solve one world problem, what would it be?",
        "What's your favorite quote or saying?",
        "What's something on your bucket list?",
        "If you could have dinner with anyone from history, who would it be?",
        "What's your favorite childhood cartoon or TV show?",
        "What's something you're grateful for this week?",
        "If you could instantly gain any skill, what would it be?",
        "What's the most adventurous thing you've ever done?",
        "What's your favorite time of day and why?",
        "If you could be an Olympic athlete, which sport would you choose?",
        "What's a place you'd like to visit but haven't yet?",
        "What's something unexpected that brings you joy?",
        "If you had to eat one cuisine for the rest of your life, what would it be?",
        "What fictional world would you most like to live in?",
        "What's your favorite way to relax after a long day?",
        "If you could have a conversation with your younger self, what would you say?",
        "What's a hobby or interest that might surprise people about you?",
        "What's the best compliment you've ever received?",
        "If you could instantly learn any language, which would you choose?",
        "What's your ideal morning routine?",
        "If you could bring back any fashion trend, what would it be?",
        "What's the most useful app on your phone?",
        "If you could live in any time period, when would it be?",
        "What's your favorite outdoor activity?",
        "If you could have any animal as a pet (domesticated), what would you choose?",
        "What's a simple pleasure you enjoy?",
        "If you were a superhero, what would your costume look like?",
        "What's the most memorable concert or live performance you've attended?",
        "If you could experience any event in history, what would you choose?",
        "What's your favorite museum or cultural site you've visited?",
        "If you had to teach a class on something, what would you teach?",
        "What's something you're passionate about outside of work?",
        "If you could witness any event past, present, or future, what would it be?",
        "What's a tradition from your culture or family that you value?",
        "If you could be known for one thing, what would you want it to be?",
        "What's your favorite childhood game?",
        "If money were no object, what would you do with your time?",
        "What's a random skill you have that not many people know about?",
        "If you could teleport anywhere for lunch today, where would you go?",
        "What's something you've done that you never thought you would do?",
        "If you could swap lives with someone for a day, who would it be?",
        "What's a food combination that you enjoy that others might find strange?",
        "If you were to start a business, what kind would it be?",
        "What's your favorite word in any language and why?",
        "If you could be any fictional character, who would you be?",
        "What's an interesting fact about the place where you grew up?",
        "If you could meet any living person for coffee, who would you pick?",
        "What's something you're looking forward to in the coming months?",
        "If you could be an expert in any field instantly, which would you choose?",
        "What's a memorable road trip or journey you've taken?"
    ];

    // Initial team members
    const initialTeamMembers = [
        'Nick', 'Josh', 'Raul', 'Ray', 'Sue', 'Dale', 'Cristina', 'Matthew', 
        'Bobbi', 'Allison', 'Marin', 'Anna', 'Darcy', 'Char', 'Blesson', 
        'Jason', 'Rachel', 'Al', 'Jenny'
    ];

    // State
    let availableIcebreakers = [];
    let usedIcebreakers = [];
    let teamMembersList = [];
    let selectedIcebreaker = null;
    let suggestedIcebreakers = [];
    let selectedTeamMembers = { primary: '', backup: '' };

    // DOM elements
    const generateBtn = document.getElementById('generateBtn');
    const resetViewBtn = document.getElementById('resetViewBtn');
    const resetDataBtn = document.getElementById('resetDataBtn');
    const resultsContainer = document.getElementById('resultsContainer');
    const icebreakersContainer = document.getElementById('icebreakersContainer');
    const primaryHost = document.getElementById('primaryHost');
    const backupHost = document.getElementById('backupHost');
    const statsInfo = document.getElementById('statsInfo');
    const viewUsedBtn = document.getElementById('viewUsedBtn');
    const reviewAllBtn = document.getElementById('reviewAllBtn');
    const editTeamBtn = document.getElementById('editTeamBtn');
    const usedIcebreakersSection = document.getElementById('usedIcebreakersSection');
    const usedIcebreakersContainer = document.getElementById('usedIcebreakersContainer');
    const allIcebreakersSection = document.getElementById('allIcebreakersSection');
    const allIcebreakersContainer = document.getElementById('allIcebreakersContainer');
    const teamMembersSection = document.getElementById('teamMembersSection');
    const teamMembersContainer = document.getElementById('teamMembersContainer');
    const newTeamMember = document.getElementById('newTeamMember');
    const addTeamMemberBtn = document.getElementById('addTeamMemberBtn');
    const teamMemberWarning = document.getElementById('teamMemberWarning');

    // Initialize data from localStorage or defaults
    function initializeData() {
        const storedUsedIcebreakers = localStorage.getItem('usedIcebreakers');
        const storedAvailableIcebreakers = localStorage.getItem('availableIcebreakers');
        const storedTeamMembers = localStorage.getItem('teamMembers');
        
        if (storedUsedIcebreakers && storedAvailableIcebreakers) {
            usedIcebreakers = JSON.parse(storedUsedIcebreakers);
            availableIcebreakers = JSON.parse(storedAvailableIcebreakers);
        } else {
            availableIcebreakers = [...initialIcebreakers];
            usedIcebreakers = [];
        }
        
        if (storedTeamMembers) {
            teamMembersList = JSON.parse(storedTeamMembers);
        } else {
            teamMembersList = [...initialTeamMembers];
        }
        
        updateStatsInfo();
        renderTeamMembers();
        checkTeamMembersCount();
    }

    // Update stats information
    function updateStatsInfo() {
        statsInfo.textContent = `Used icebreakers: ${usedIcebreakers.length} | Available: ${availableIcebreakers.length}`;
    }

    // Save state to localStorage
    function saveState() {
        localStorage.setItem('usedIcebreakers', JSON.stringify(usedIcebreakers));
        localStorage.setItem('availableIcebreakers', JSON.stringify(availableIcebreakers));
        localStorage.setItem('teamMembers', JSON.stringify(teamMembersList));
        updateStatsInfo();
    }

    // Randomly select team members
    function selectRandomTeamMembers() {
        const shuffled = [...teamMembersList].sort(() => 0.5 - Math.random());
        return {
            primary: shuffled[0],
            backup: shuffled[1]
        };
    }

    // Randomly select icebreakers
    function selectRandomIcebreakers() {
        // If we have fewer than 3 available icebreakers, recycle some used ones
        if (availableIcebreakers.length < 3) {
            // Calculate how many icebreakers to recycle (all except the 20 most recently used)
            const recycleCount = Math.min(usedIcebreakers.length, usedIcebreakers.length - 20);
            
            if (recycleCount > 0) {
                // Get the oldest used icebreakers to recycle
                const toRecycle = usedIcebreakers.slice(0, recycleCount);
                
                // Update state by moving recycled icebreakers back to available
                availableIcebreakers = [...availableIcebreakers, ...toRecycle];
                usedIcebreakers = usedIcebreakers.slice(recycleCount);
                saveState();
            }
        }
        
        // Randomly select 3 icebreakers from available pool
        const shuffled = [...availableIcebreakers].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }

    // Render suggested icebreakers
    function renderSuggestedIcebreakers() {
        icebreakersContainer.innerHTML = '';
        
        suggestedIcebreakers.forEach(icebreaker => {
            const li = document.createElement('li');
            li.className = `p-3 rounded-md cursor-pointer transition-colors duration-300 icebreaker-item ${selectedIcebreaker === icebreaker ? 'icebreaker-selected' : 'bg-gray-100 hover:bg-gray-200'}`;
            li.textContent = icebreaker;
            
            if (selectedIcebreaker === icebreaker) {
                const span = document.createElement('span');
                span.className = 'ml-3 text-green-800 font-semibold';
                span.textContent = '✓ Selected';
                li.appendChild(span);
            }
            
            li.addEventListener('click', () => {
                handleIcebreakerSelect(icebreaker);
            });
            
            icebreakersContainer.appendChild(li);
        });
    }

    // Render used icebreakers
    function renderUsedIcebreakers() {
        usedIcebreakersContainer.innerHTML = '';
        
        usedIcebreakers.forEach((icebreaker, index) => {
            const li = document.createElement('li');
            li.className = 'py-1 border-b border-gray-100 last:border-b-0';
            li.textContent = `${index + 1}. ${icebreaker}`;
            usedIcebreakersContainer.appendChild(li);
        });
    }

    // Render all available icebreakers
    function renderAllIcebreakers() {
        allIcebreakersContainer.innerHTML = '';
        
        availableIcebreakers.forEach((icebreaker, index) => {
            const li = document.createElement('li');
            li.className = 'py-1 px-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-100 cursor-pointer flex justify-between items-center';
            
            const span = document.createElement('span');
            span.textContent = icebreaker;
            li.appendChild(span);
            
            const button = document.createElement('button');
            button.className = 'ml-2 text-xs bg-green-100 hover:bg-green-200 text-green-800 py-1 px-2 rounded';
            button.textContent = 'Mark as Used';
            li.appendChild(button);
            
            li.addEventListener('click', () => {
                handleMoveToUsed(icebreaker);
            });
            
            allIcebreakersContainer.appendChild(li);
        });
    }

    // Render team members
    function renderTeamMembers() {
        teamMembersContainer.innerHTML = '';
        
        teamMembersList.forEach((member, index) => {
            const li = document.createElement('li');
            li.className = 'py-2 px-3 border-b border-gray-100 last:border-b-0 flex justify-between items-center bg-gray-50';
            
            const span = document.createElement('span');
            span.textContent = member;
            li.appendChild(span);
            
            const button = document.createElement('button');
            button.className = 'ml-2 text-xs bg-red-100 hover:bg-red-200 text-red-800 py-1 px-2 rounded';
            button.textContent = 'Remove';
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                handleRemoveTeamMember(member);
            });
            li.appendChild(button);
            
            teamMembersContainer.appendChild(li);
        });
    }

    // Check team members count
    function checkTeamMembersCount() {
        if (teamMembersList.length < 2) {
            teamMemberWarning.classList.remove('hidden');
        } else {
            teamMemberWarning.classList.add('hidden');
        }
    }

    // Handle icebreaker selection
    function handleIcebreakerSelect(icebreaker) {
        // Move the selected icebreaker from available to used
        availableIcebreakers = availableIcebreakers.filter(item => item !== icebreaker);
        usedIcebreakers.push(icebreaker);
        selectedIcebreaker = icebreaker;
        saveState();
        renderSuggestedIcebreakers();
    }

    // Handle moving an icebreaker to used
    function handleMoveToUsed(icebreaker) {
        availableIcebreakers = availableIcebreakers.filter(item => item !== icebreaker);
        usedIcebreakers.push(icebreaker);
        saveState();
        renderAllIcebreakers();
    }

    // Handle adding a team member
    function handleAddTeamMember() {
        const member = newTeamMember.value.trim();
        if (member !== '' && !teamMembersList.includes(member)) {
            teamMembersList.push(member);
            saveState();
            renderTeamMembers();
            checkTeamMembersCount();
            newTeamMember.value = '';
        }
    }

    // Handle removing a team member
    function handleRemoveTeamMember(member) {
        teamMembersList = teamMembersList.filter(item => item !== member);
        saveState();
        renderTeamMembers();
        checkTeamMembersCount();
    }

    // Generate new icebreakers and hosts
    function handleGenerate() {
        suggestedIcebreakers = selectRandomIcebreakers();
        selectedTeamMembers = selectRandomTeamMembers();
        selectedIcebreaker = null;
        
        resultsContainer.classList.remove('hidden');
        resetViewBtn.classList.remove('hidden');
        
        primaryHost.textContent = selectedTeamMembers.primary;
        backupHost.textContent = selectedTeamMembers.backup;
        
        renderSuggestedIcebreakers();
    }

    // Reset view
    function handleResetView() {
        resultsContainer.classList.add('hidden');
        resetViewBtn.classList.add('hidden');
        selectedIcebreaker = null;
        suggestedIcebreakers = [];
    }

    // Reset all data
    function handleResetData() {
        // Get the first used icebreaker if it exists
        const firstUsedIcebreaker = usedIcebreakers.length > 0 ? usedIcebreakers[0] : null;
        
        // Reset the localStorage
        localStorage.removeItem('usedIcebreakers');
        localStorage.removeItem('availableIcebreakers');
        
        // Reset to initial state but keep first used icebreaker if it exists
        if (firstUsedIcebreaker) {
            // Filter out the first used icebreaker from initialIcebreakers
            availableIcebreakers = initialIcebreakers.filter(icebreaker => icebreaker !== firstUsedIcebreaker);
            usedIcebreakers = [firstUsedIcebreaker];
        } else {
            availableIcebreakers = [...initialIcebreakers];
            usedIcebreakers = [];
        }
        
        saveState();
        handleResetView();
        alert('All icebreakers have been reset to their initial state while preserving the first used icebreaker.');
    }

    // Toggle used icebreakers section
    function toggleUsedIcebreakers() {
        if (usedIcebreakersSection.classList.contains('hidden')) {
            usedIcebreakersSection.classList.remove('hidden');
            viewUsedBtn.textContent = 'Hide Used Icebreakers';
            renderUsedIcebreakers();
        } else {
            usedIcebreakersSection.classList.add('hidden');
            viewUsedBtn.textContent = 'View Used Icebreakers';
        }
    }

    // Toggle all icebreakers section
    function toggleAllIcebreakers() {
        if (allIcebreakersSection.classList.contains('hidden')) {
            allIcebreakersSection.classList.remove('hidden');
            reviewAllBtn.textContent = 'Hide All Icebreakers';
            renderAllIcebreakers();
        } else {
            allIcebreakersSection.classList.add('hidden');
            reviewAllBtn.textContent = 'Review All Icebreakers';
        }
    }

    // Toggle team members section
    function toggleTeamMembers() {
        if (teamMembersSection.classList.contains('hidden')) {
            teamMembersSection.classList.remove('hidden');
            editTeamBtn.textContent = 'Hide Team Members';
        } else {
            teamMembersSection.classList.add('hidden');
            editTeamBtn.textContent = 'Edit Team Members';
        }
    }

    // Initialize event listeners
    function initEventListeners() {
        generateBtn.addEventListener('click', handleGenerate);
        resetViewBtn.addEventListener('click', handleResetView);
        resetDataBtn.addEventListener('click', handleResetData);
        viewUsedBtn.addEventListener('click', toggleUsedIcebreakers);
        reviewAllBtn.addEventListener('click', toggleAllIcebreakers);
        editTeamBtn.addEventListener('click', toggleTeamMembers);
        addTeamMemberBtn.addEventListener('click', handleAddTeamMember);
        
        newTeamMember.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleAddTeamMember();
            }
        });
    }

    // Initialize the application
    function init() {
        initializeData();
        initEventListeners();
    }

    // Start the app
    init();
});

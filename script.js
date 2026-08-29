let habits = JSON.parse(localStorage.getItem("habits")) || [];

const habitInput = document.getElementById("habitInput");
const addHabitBtn = document.getElementById("addHabitBtn");
const habitList = document.getElementById("habitList");
const emptyMessage = document.getElementById("emptyMessage");

function getToday() {
    return new Date().toISOString().split("T")[0];
}

function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits));
}

function addHabit() {
    const name = habitInput.value.trim();

    if (name === "") {
        alert("Please enter a habit.");
        return;
    }

    const habit = {
        id: Date.now(),
        name: name,
        completedDates: [],
        bestStreak: 0
    };

    habits.push(habit);

    saveHabits();
    habitInput.value = "";

    renderHabits();
}

function toggleHabit(id) {
    const habit = habits.find(h => h.id === id);
    const today = getToday();

    if (!habit) return;

    if (habit.completedDates.includes(today)) {
        habit.completedDates = habit.completedDates.filter(date => date !== today);
    } else {
        habit.completedDates.push(today);
    }

    habit.bestStreak = calculateBestStreak(habit.completedDates);

    saveHabits();
    renderHabits();
}

function deleteHabit(id) {
    habits = habits.filter(habit => habit.id !== id);

    saveHabits();
    renderHabits();
}

function calculateCurrentStreak(dates) {
    if (dates.length === 0) return 0;

    const sortedDates = [...dates].sort().reverse();

    let streak = 0;
    let currentDate = new Date();

    for (let date of sortedDates) {
        const expectedDate = currentDate.toISOString().split("T")[0];

        if (date === expectedDate) {
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
        } else {
            break;
        }
    }

    return streak;
}

function calculateBestStreak(dates) {
    if (dates.length === 0) return 0;

    const sortedDates = [...dates].sort();

    let best = 1;
    let current = 1;

    for (let i = 1; i < sortedDates.length; i++) {
        const previous = new Date(sortedDates[i - 1]);
        const currentDate = new Date(sortedDates[i]);

        const difference =
            (currentDate - previous) / (1000 * 60 * 60 * 24);

        if (difference === 1) {
            current++;
            best = Math.max(best, current);
        } else {
            current = 1;
        }
    }

    return best;
}

function renderHabits() {
    habitList.innerHTML = "";

    const today = getToday();

    emptyMessage.style.display =
        habits.length === 0 ? "block" : "none";

    let completedToday = 0;
    let bestStreak = 0;

    habits.forEach(habit => {
        const completed = habit.completedDates.includes(today);

        if (completed) {
            completedToday++;
        }

        const currentStreak =
            calculateCurrentStreak(habit.completedDates);

        bestStreak = Math.max(bestStreak, habit.bestStreak);

        const habitElement = document.createElement("div");

        habitElement.className =
            `habit ${completed ? "completed" : ""}`;

        habitElement.innerHTML = `
            <button class="check-btn"
                onclick="toggleHabit(${habit.id})">
                ${completed ? "✓" : ""}
            </button>

            <div class="habit-info">
                <div class="habit-name">${habit.name}</div>
                <div class="streak">
                    🔥 ${currentStreak} day streak
                    · ${habit.completedDates.length} completed
                </div>
            </div>

            <button class="delete-btn"
                onclick="deleteHabit(${habit.id})">
                🗑
            </button>
        `;

        habitList.appendChild(habitElement);
    });

    document.getElementById("totalHabits").textContent = habits.length;
    document.getElementById("completedToday").textContent = completedToday;
    document.getElementById("bestStreak").textContent = bestStreak;

    document.getElementById("today").textContent =
        new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "short"
        });
}

addHabitBtn.addEventListener("click", addHabit);

habitInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addHabit();
    }
});

renderHabits();

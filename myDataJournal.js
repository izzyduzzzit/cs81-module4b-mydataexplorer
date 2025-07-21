// Izarra Villareal CS 81 JavaScript Module 4 Assignment 4B: My Personal Data Objects

const weekData = [
    { day: "Monday", sleepHours: 5, screenTime: 12, mood: "Stressed", caffeineIntake: 3, focusLevel: 6 },
    { day: "Tuesday", sleepHours: 6, screenTime: 11, mood: "Stressed", caffeineIntake: 3, focusLevel: 6 },
    { day: "Wednesday", sleepHours: 6, screenTime: 4, mood: "Happy", caffeineIntake: 2, focusLevel: 9 },
    { day: "Thursday", sleepHours: 7, screenTime: 6, mood: "Anxious", caffeineIntake: 4, focusLevel: 8 },
    { day: "Friday", sleepHours: 7, screenTime: 12, mood: "Anxious", caffeineIntake: 2, focusLevel: 8 },
    { day: "Saturday", sleepHours: 6, screenTime: 8, mood: "Relaxed", caffeineIntake: 2, focusLevel: 9 },
    { day: "Sunday", sleepHours: 7, screenTime: 6, mood: "Content", caffeineIntake: 3, focusLevel: 4 }
];

/* Predictions about my code:

Which day had the most screen time?
Monday's usually have the most screen time, or Wednesdays becauser work gets really busy.

Best focus day?
The best focus days are usually Friday or on the weekends.

Is more caffeine helping?
It probably isn't helping my anxiety and stress, but it is part of my morning ritual.

*/

function findHighestScreenTime(data) {
    return data.reduce((maxDay, currentDay) => currentDay.screenTime > maxDay.screenTime ? currentDay : maxDay);
}

function averageSleep(data) {
    const totalSleep = data.reduce((sum, day) => sum + day.sleepHours, 0);
    return (totalSleep / data.length).toFixed(2);
}

function mostFrequentMood(data) {
    const moodCount = {};
    data.forEach(day => {
        moodCount[day.mood] = (moodCount[day.mood] || 0) + 1;
    });
    return Object.keys(moodCount).reduce((a, b) => moodCount[a] > moodCount[b] ? a : b);
}

function correlateCaffeineToFocus(data) {
    const caffeineFocusMap = {};
    data.forEach(day => {
        if (!caffeineFocusMap[day.caffeineIntake]) {
            caffeineFocusMap[day.caffeineIntake] = { totalFocus: 0, count: 0 };
        }
        caffeineFocusMap[day.caffeineIntake].totalFocus += day.focusLevel;
        caffeineFocusMap[day.caffeineIntake].count += 1;
    });
    for (const caffeine in caffeineFocusMap) {
        caffeineFocusMap[caffeine].averageFocus = (caffeineFocusMap[caffeine].totalFocus / caffeineFocusMap[caffeine].count).toFixed(2);
    }
    return caffeineFocusMap;
}

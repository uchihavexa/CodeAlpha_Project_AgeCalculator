document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value) - 1; // Month is 0-indexed
    let year = parseInt(document.getElementById('year').value);

    if (!isValidDate(day, month + 1, year)) {
        document.getElementById('result').textContent = "Please enter a valid date.";
        return;
    }

    let dob = new Date(year, month, day);
    let age = calculateAge(dob);

    document.getElementById('result').textContent = `You are ${age} years old.`;
});

function calculateAge(dob) {
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

function isValidDate(day, month, year) {
    let date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

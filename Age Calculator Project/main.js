const btn = document.getElementById("btn");
const result = document.getElementById("result");
btn.addEventListener("click", () => {
    const birthDate = document.getElementById("birthDate").value;
    if (!birthDate) {
        result.textContent = "Please enter a valid date.";
        return;
    }

    const today = new Date();
    const birth = new Date(birthDate);

    if (birth > today) {
        result.textContent = "Birth date cannot be in the future.";
        return;
    }

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    result.textContent = `Your age is ${age} years.`;
});
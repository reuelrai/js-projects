let count = 0;

const value = document.querySelector("#value") as HTMLSpanElement;
const btns = document.querySelectorAll(".btn") as NodeListOf<HTMLButtonElement>;

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = (e.currentTarget as HTMLButtonElement).classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = "green";
        } else if(count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }
        value.textContent = count.toString();

    });
});
const btn = document.getElementById("btn");
const adviceId = document.getElementById("advice-text");
const motivationTextElement = document.getElementById("motivation-text")



const generateMotivationText = async () => {
    // Byter ut texten i P tagen, där motivations/råd texten kommer upp.
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const motivation = data.slip.advice;
    motivationTextElement.textContent = `"${motivation}"`;
    
    // byter ut P tagen som då visar vilket nummer på texten de är som visas.
    const adviceText = data.slip.id;
    adviceId.textContent = `ADVICE #${adviceText}`
};

btn.addEventListener('click', generateMotivationText);
    


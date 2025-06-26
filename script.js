const texts = [
    "Herzlich Willkommen!",
    "Es freut uns, Sie auf der agit2025 begrüßen zu dürfen. Diese Website wurde von DIG-Studenten der Uni Salzburg entwickelt, um Ihnen Ihren Aufenthalt zu erleichtern.",
    "Die Website enthält nützliche Informationen über die Konferenz, aber auch über die wunderschöne Stadt Salzburg, für einen schönen Tag, auch abseits der Konferenz.",
    "Um das AGIT-Konferenzprogramm, den Stadtplan von Salzburg oder den Marktplatz einzusehen und uns kennenzulernen, verwenden Sie bitte das Menü am oberen Bildschirmrand."
  ];
  
  let index = 0;
  
  const textBlock = document.getElementById("textBlock");
  const paragraph = textBlock.querySelector(".intro-text p");
  
  textBlock.addEventListener("click", () => {
    // Добавить fade-out
    textBlock.querySelector(".intro-text").classList.add("fade-out");
  
    setTimeout(() => {
      index = (index + 1) % texts.length;
      paragraph.textContent = texts[index];
  
      // Удалить fade-out, чтобы снова стало видно
      textBlock.querySelector(".intro-text").classList.remove("fade-out");
    }, 500); // соответствует transition в CSS
  });
  
  
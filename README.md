# Character Counter (Počítadlo znaků a slov)

Webová aplikace pro detailní analýzu vloženého textu v reálném čase. Projekt vznikl v rámci procvičování JavaScriptu, práce s objekty, regulárními výrazy a dynamické manipulace s DOMem.

## Co aplikace umí
* **Počítání v reálném čase:** Okamžitý výpočet celkového počtu znaků a slov při psaní.
* **Chytré dělení slov:** Využití regulárních výrazů pro správné rozlišení slov s českou diakritikou.
* **Statistika písmen:** Po kliknutí na tlačítko spočítá výskyt jednotlivých písmen abecedy.
* **Odstranění diakritiky:** Písmena s háčky a čárkami převede na základní abecedu (např. `č` -> `c`), aby byla statistika přesná.
* **TOP 3 nejčastější slova:** Vyhledá a seřadí 3 nejčastěji používaná slova v textu (s filtrem na slova delší než 2 znaky).

## Použité technologie
* HTML5
* CSS3
* JavaScript (ES6+)

## Struktura souborů
* `index.html` – vstupní textové pole, tlačítka a kostra tabulek
* `style.css` – základní vzhled a rozvržení tabulek
* `functions.js` – pomocné funkce
* `script.js` – hlavní logika událostí (`input`, `click`), normalizace textu a práce s objekty

## Co jsem se na tom naučil
* Normalizace textu a odstraňování diakritiky v JS (`normalize("NFD")`, `replace`).
* Práce s regulárními výrazy (Regex) pro filtrování a rozdělování textu.
* Převod objektu na pole a jeho řazení podle hodnot (`Object.entries`, `.sort()`).
* Generování HTML tabulek dynamicky přes JavaScript (`createElement`, `appendChild`).


const definitions = {
    'Блок': 'Блок — это основной строительный элемент в Minecraft, из которого состоит мир. Например, земля, камень, дерево.',
    'Крипер': 'Крипер — это тихий враг, который взрывается рядом с игроком, если подойти слишком близко.',
    'Дерево': 'Дерево — это важный ресурс, который добывают с помощью рук или топора. Из него делают инструменты и строят дома.',
    'Кирка': 'Кирка — это инструмент для добычи твёрдых материалов, таких как камень или руда.',
    'Верстак': 'Верстак — это предмет, который позволяет создавать более сложные вещи, инструменты и оружие.',
    'Руда': 'Руда — это блоки, содержащие полезные материалы, например, уголь, железо или алмазы.',
    'Моб': 'Моб — это любое существо в Minecraft: животное, монстр или житель.',
    'Алмазы': 'Алмазы — это ценный ресурс, используемый для создания самых прочных инструментов и брони.',
    'Портал': 'Портал — это магический проход в другое измерение, например, в Нижний мир или Край.',
    'Факел': 'Факел — это источник света, который защищает от появления монстров в тёмных местах.'
};

function showDefinition(term) {
  const definitionElement = document.getElementById('definition');
  definitionElement.innerHTML = `<p><strong>${term}:</strong> ${definitions[term]}</p>`;
}

// Обработчик события для клика по терминам
function handleTermClick(term) {
  showDefinition(term);
}

// Обработчик события для поля ввода
document.getElementById('termInput').addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  const terms = document.querySelectorAll('.term');
  let foundTerm = null;

  terms.forEach(term => {
      const termText = term.textContent.toLowerCase();
      if (termText === filter) { // Проверяем на полное совпадение
          term.style.display = ''; // Показываем термин
          foundTerm = term.textContent; // Сохраняем найденный термин
      } else if (termText.includes(filter)) { // Проверяем на частичное совпадение
          term.style.display = ''; // Показываем термин
      } else {
          term.style.display = 'none'; // Скрываем термин
      }
  });

  // Если найден термин, показываем его определение
  if (foundTerm) {
      showDefinition(foundTerm);
  } else if (filter === '') {
      // Если поле поиска пустое, показываем все термины и очищаем определение
      terms.forEach(term => {
          term.style.display = ''; // Показываем все термины
      });
      document.getElementById('definition').innerHTML = '<p>Выберите термин, чтобы увидеть его определение.</p>'; // Сообщение по умолчанию
  } else {
      document.getElementById('definition').innerHTML = '<p>Термин не найден.</p>'; // Сообщение, если ничего не найдено
  }
});

// Изначально показываем все термины
document.querySelectorAll('.term').forEach(term => {
  term.style.display = ''; // Убедимся, что все термины видимы
});

// Добавляем обработчик клика для всех терминов
document.querySelectorAll('.term').forEach(term => {
  term.addEventListener('click', function() {
      handleTermClick(term.textContent);
  });
});
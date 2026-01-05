// Функция для переключения отображения расписания предмета
function toggleSubject(element) {
    const scheduleGrid = element.nextElementSibling;
    const isActive = element.classList.contains('active');
    
    // Закрыть все другие предметы
    document.querySelectorAll('.subject-title').forEach(title => {
        if (title !== element) {
            title.classList.remove('active');
            const grid = title.nextElementSibling;
            grid.classList.remove('show');
            grid.style.display = 'none';
        }
    });
    
    // Переключить текущий предмет
    if (isActive) {
        element.classList.remove('active');
        scheduleGrid.classList.remove('show');
        setTimeout(() => {
            scheduleGrid.style.display = 'none';
        }, 300);
    } else {
        element.classList.add('active');
        scheduleGrid.style.display = 'grid';
        setTimeout(() => {
            scheduleGrid.classList.add('show');
        }, 10);
    }
}

// Плавная прокрутка наверх
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Обработка формы обратной связи
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Формируем текст для Telegram
            let telegramText = `📝 Новая заявка с сайта!\n\n`;
            telegramText += `👤 Имя: ${name}\n`;
            telegramText += `📱 Телефон: ${phone}\n`;
            if (subject) {
                const subjects = {
                    'math': 'Математика',
                    'russian': 'Русский язык',
                    'informatics': 'Информатика',
                    'society': 'Обществознание'
                };
                telegramText += `📚 Предмет: ${subjects[subject]}\n`;
            }
            if (message) {
                telegramText += `💬 Сообщение: ${message}`;
            }
            
            // Открываем Telegram с предзаполненным текстом
            const telegramUrl = `https://t.me/only5only?text=${encodeURIComponent(telegramText)}`;
            window.open(telegramUrl, '_blank');
            
            // Показываем сообщение пользователю
            alert('Спасибо за заявку! Сейчас откроется Telegram для отправки сообщения.');
            
            // Очищаем форму
            contactForm.reset();
        });
    }
});

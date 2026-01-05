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
});

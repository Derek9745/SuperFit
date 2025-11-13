/*class horizontalDatePicker{
    constructor(currentMonth,currentWeekday,currentDay){
        this.currentMonth = currentMonth;
        this.currentWeekday = currentWeekday;
        this.currentDay = currentDay;
        this.date = new Date();
        this.date.setMonth(this.currentMonth);
        this.date.setDate(this.currentDay);

    
  // DOM references
        this.monthLabel = document.querySelector('.monthLabel');
        this.prevMonthBtn = document.querySelector('.prevMonthBtn');
        this.nextMonthBtn = document.querySelector('.nextMonthBtn');
        this.dayPicker = document.querySelector('.dayPicker');
    }



}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const currentMonth = today.getMonth(); // 0-11
const currentWeekday = today.getDay(); // 0-6
const currentDay = today.getDate(); //
const date = new Date();
const datePicker = new horizontalDatePicker(currentMonth,currentWeekday,currentDay); // November 9
*/

class HorizontalDatePicker {
  constructor() {
    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.currentDay = this.today.getDate();

    // DOM references
    this.monthLabel = document.querySelector('.monthLabel');
    this.prevMonthBtn = document.querySelector('.prevMonthBtn');
    this.nextMonthBtn = document.querySelector('.nextMonthBtn');
    this.dayPicker = document.querySelector('.dayPicker');

    this.renderMonth();
    this.addEventListeners();
  }

  renderMonth() {
    this.monthLabel.textContent = `${monthNames[this.currentMonth]} ${this.currentYear}`;
    this.renderDays();
  }

  renderDays() {
    this.dayPicker.innerHTML = ''; // Clear previous days

    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.currentYear, this.currentMonth, i);
      const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });

      const dayDiv = document.createElement('div');
      dayDiv.classList.add('currentDate');
      if (
        i === this.today.getDate() &&
        this.currentMonth === this.today.getMonth() &&
        this.currentYear === this.today.getFullYear()
      ) {
        dayDiv.classList.add('highlight');
      }

      dayDiv.innerHTML = `<span class="currentDayLabel">${weekday}</span> <span class="currentDayDate">${i}</span>`;
      this.dayPicker.appendChild(dayDiv);
    }
  }

  addEventListeners() {
    this.prevMonthBtn.addEventListener('click', () => {
      this.currentMonth--;
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }
      this.renderMonth();
    });

    this.nextMonthBtn.addEventListener('click', () => {
      this.currentMonth++;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear++;
      }
      this.renderMonth();
    });
  }
}

// Month names array
const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

// Initialize the picker
const datePicker = new HorizontalDatePicker();

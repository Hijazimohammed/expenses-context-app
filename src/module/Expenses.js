class Expenses {
  id;
  title;
  date;
  value;
  desc;

  constructor(title, date, value, desc) {
    this.title = title;
    this.date = date;
    this.value = value;
    this.desc = desc;
  }
}

export default Expenses;

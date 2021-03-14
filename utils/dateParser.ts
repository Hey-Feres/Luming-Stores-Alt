export class DateParser {
  day(){
    return new Date().getDate()
  }

  month(){
    return new Date().getMonth() + 1
  }

  year(){
    return new Date().getFullYear()
  }

  weekDay(){
    return new Date().getDay()
  }

  hour(){
    return new Date().getHours()
  }

  minutes(){
    return new Date().getMinutes()
  }

  weekDayName(){
    const weekDayNumber = new Date().getDay()
    const weekDayNames = [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado"
    ]
    return weekDayNames[weekDayNumber]
  }

  monthName(){
    const monthNumber = new Date().getMonth()
    const monthNames = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ]
    return monthNames[monthNumber]
  }

  dateString(){
    return `${this.weekDayName()}, ${this.day()} de ${this.monthName()}`
  }

  clockString(){
    return `${this.hour()}:${this.minutes()}`
  }
}
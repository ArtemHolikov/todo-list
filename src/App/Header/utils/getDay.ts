export const getCurrentDay = () => {
    const date = new Date();
    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

    switch (days[date.getDay()]) {
        case "Неділя": {
            return 'Sunday'.toUpperCase();
        }
        case 'Понеділок': {
            return 'Monday'.toUpperCase();
        }
        case 'Вівторок': {
            return 'Tuesday'.toUpperCase();
        }
        case 'Середа': {
            return 'Wednesday'.toUpperCase();
        }
        case 'Четвер': {
            return 'Thursday'.toUpperCase();
        }
        case "П'ятниця": {
            return 'Friday'.toUpperCase();
        }
        case 'Субота': {
            return 'Saturday'.toUpperCase();
        }
    }
}


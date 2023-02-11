
import moment from 'moment';

export class DateService {

    formatDate(date: string, lang: number, hasHours: boolean): string {
        if (date) {
            let format = lang === 2 ? 'MM/DD/YYYY' : 'DD/MM/YYYY';
            const momentDate = moment(date);
            if (hasHours) {
                format += ' HH:mm';
            }
            return momentDate.format(format);
        }
        return '';
    }
}

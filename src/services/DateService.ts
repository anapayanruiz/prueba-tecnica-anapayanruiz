
import moment from 'moment';

export class DateService {

    formatDate(date: string, hasHours: boolean): string {
        if (date) {
            let format = 'DD/MM/YYYY';
            const momentDate = moment(date);
            if (hasHours) {
                format += ' HH:mm';
            }
            return momentDate.format(format);
        }
        return '';
    }
}

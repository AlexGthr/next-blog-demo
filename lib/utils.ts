import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export function formatDate(date: Date): string {
    return format(new Date(date), "do MMMM yyyy" + " à " + "HH:mm", { locale: fr }) ?? "Date invalide";
}
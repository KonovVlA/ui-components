/**
 * Возвращает дату (день.месяц.год) первого аргумента со временем второго аргумента.
 * При отсутствии источника, время нормализируется в соответствии с типом (00:00 / 23:59)
 */
export declare function preserveTime(targetDate: Date, type: 'start' | 'end', sourceDate?: Date): Date;

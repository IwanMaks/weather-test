// Утилиты для формирования комбинированных и условных классов для стилей
export function classNames(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

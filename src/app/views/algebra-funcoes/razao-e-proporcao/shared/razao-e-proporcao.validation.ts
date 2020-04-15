import { ValidationErrors, AbstractControl } from '@angular/forms';

export function SoPodeUmaIncognita(
  control: AbstractControl
): ValidationErrors | null {
  const a = control.get('a').value;
  const b = control.get('b').value;
  const c = control.get('c').value;
  const d = control.get('d').value;

  let cont = 0;

  if (isNumber(a)) {
    cont++;
  }

  if (isNumber(b)) {
    cont++;
  }

  if (isNumber(c)) {
    cont++;
  }

  if (isNumber(d)) {
    cont++;
  }

  return cont === 3 ? null : { umaIncognita: true };
}

function isNumber(value: string | number): boolean {
  return value !== '' || isNaN(Number(value.toString()));
}

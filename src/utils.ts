export const displayValue = (value?: string) => {
  return value || "-";
}

export const emailRow = (label: string, value?: string) => {
  return `<tr> <td style="padding-bottom: 5px"> <strong>${label}:</strong> ${displayValue(value)} </td> </tr>`;
}
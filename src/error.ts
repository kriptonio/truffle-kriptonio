// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: any) {
  const parts = [];
  if (error.code) {
    parts.push(error.code);
  }

  if (error.subCode) {
    parts.push(error.subCode);
  }

  if (error.details) {
    parts.push(error.details);
  }

  return parts.join('. ');
}

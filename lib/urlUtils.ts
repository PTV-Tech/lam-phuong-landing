export function extractSearchParam(
  searchParams: { [key: string]: string | string[] | undefined },
  paramName: string,
): string[] {
  const param = searchParams[paramName];

  if (!param) return [];

  const value = Array.isArray(param) ? param[0] : param;
  return value.split("|").filter(Boolean);
}

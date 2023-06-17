export async function fetchAppApi<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(`/api/products${input}`, init);

  const result = await data.json();

  return result as T;
}

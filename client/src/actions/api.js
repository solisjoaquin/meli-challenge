import environment from "../environment";

export async function getItems(search) {
  if (!search) return [];
  const response = await fetch(`${environment.apiUrl}/items?search=${search}`);
  const items = await response.json();

  return items;
}

export async function getItem(id) {
  const response = await fetch(`${environment.apiUrl}/items/${id}`);
  const item = await response.json();

  return item;
}

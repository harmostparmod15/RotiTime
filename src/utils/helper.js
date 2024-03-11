export function filterData(searchInput, restaurants) {
  const filData = restaurants.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filData;
}

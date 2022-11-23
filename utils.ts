export function makeInitials(name: string) {
  return name
    .split(" ")
    .map((str) => str.substring(0, 1))
    .join("");
}

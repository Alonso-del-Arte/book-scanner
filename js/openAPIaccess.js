export async function lookUp(isbn) {
    const response = await fetch("https://openlibrary.org/isbn/" + isbn);
    return await response.json();
}

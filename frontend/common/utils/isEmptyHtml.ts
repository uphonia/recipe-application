// Editor text area from 'react-simple-wysiwyg' library leaves behind
// a block element instead of a true empty string, which mucks up any
// form validation that is checking for an empty text field.
// This util will check if a text field value is truly empty
export function isEmptyHtml(str: unknown): boolean {
  if (typeof str !== "string") return true;

  const stripped = str
    .replace(/<br\s*\/?>/gi, "")
    .replace(/<\/?p>/gi, "")
    .replace(/<[^>]*>/g, "")
    .trim();

  return stripped.length === 0;
}

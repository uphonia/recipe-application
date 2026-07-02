type DjangoValidationError = {
  isValidationError: true;
  fields: Record<string, string[]>;
};

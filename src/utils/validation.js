export const validation = {
  required: value => {
    if (!value) return 'Missing Field';
  },

  equal: (value, value2) => {
    if (value !== value2) return 'Values are not equal';
  },
}

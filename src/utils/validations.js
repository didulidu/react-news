import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: messages.required,
    oneOf: messages.oneOf,
  },
  string: {
    email: messages.email,
  },
});

export default Yup;

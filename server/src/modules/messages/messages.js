const message = {};

message.success = (text, payload) => (
  {
    message: {
      text,
      type: 'success',
    },
    payload,
  }
);

message.error = (text, payload) => (
  {
    message: {
      text,
      type: 'error',
    },
    payload,
  }
);

export default message;

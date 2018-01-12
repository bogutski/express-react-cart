const message = {};

message.success = text => (
  {
    message: {
      text,
      type: 'success',
    },
  }
);

message.error = text => (
  {
    message: {
      text,
      type: 'error',
    },
  }
);

export default message;

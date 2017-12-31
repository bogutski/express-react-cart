import React from 'react';

export const TextField = ({
  input, meta, label, descr,
}) => (
  <div>
    {/* <pre>{JSON.stringify(meta, 0, 2)}</pre> */}

    <div className={[
      'form-group',
      meta.invalid && meta.touched ? 'has-warning' : null,
    ].join(' ')}
    >
      {label && <label htmlFor={input.name}>{label}</label>}

      <input
        {...input}
        className={[
          'form-control',
          !meta.valid && meta.touched ? 'form-control-warning' : null,
        ].join(' ')}
      />

      {meta.invalid && meta.touched && <div className="form-control-feedback">{meta.error}</div>}

      <small className="form-text text-muted">{descr}</small>

    </div>
  </div>
);

export const TextArea = '';


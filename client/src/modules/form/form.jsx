import React from 'react';

export const TextField = ({
  input, meta, label, placeholder, descr,
}) => (
  <div>
    {/* <pre>{JSON.stringify(meta, 0, 2)}</pre> */}

    <div className={[
      'form-group',
      meta.invalid && meta.touched ? 'has-warning' : null,
      meta.valid && meta.touched ? 'has-success' : null,
    ].join(' ')}
    >
      {label && <label className="col-form-label" htmlFor={input.name}>{label}</label>}

      <input
        {...input}
        placeholder={placeholder}
        className={[
          'form-control',
          meta.invalid && meta.touched ? 'form-control-warning' : null,
          meta.valid && meta.touched ? 'form-control-success' : null,
        ].join(' ')}
      />

      {meta.invalid && meta.touched && <div className="form-control-feedback">{meta.error}</div>}

      <small className="form-text text-muted">{descr}</small>

    </div>
  </div>
);

export const TextArea = '';


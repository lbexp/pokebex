/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Input({value, placeholder, required, changeEvent }) {
  return (
    <input
      css={css`
        font-size: 18px;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
      `}
      value={value}
      onChange={changeEvent}
      placeholder={placeholder}
      required={required}
    />
  )
};

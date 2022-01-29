/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Form({ children, submitEvent }) {
  return (
    <form
      css={css`
        width: 100%;
      `}
      onSubmit={submitEvent}
    >
      { children }
    </form>
  )
};

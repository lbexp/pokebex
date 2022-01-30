/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Icon({ children, type, clickEvent, disabled }) {
  return (
    <button
      css={css`
        font-size: 18px;
        padding: 5px;
        border-radius: 5px;
        width: 100%;
      `}
      type={type}
      onClick={clickEvent}
      disabled={disabled}
    >
      { children }
    </button>
  );
};

Icon.defaultProps = {
  type: 'button',
};

export default Icon;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function Base({ children, type, clickEvent }) {
  const styles = {
    primary: {
      background: '#385ca9',
      color: '#ffffff',
    },
    secondary: {
      background: '#f2f2f2',
      color: '#616161',
    }
  }

  return (
    <button
      css={css`
        font-size: 18px;
        padding: 15px;
        background: ${styles[type].background};
        color: ${styles[type].color};
        border-radius: 5px;
        width: 100%;
      `}
      onClick={clickEvent}
    >
      { children }
    </button>
  );
};

Base.defaultProps = {
  type: 'primary',
};

export default Base;

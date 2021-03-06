import React from "react";
import styled, { css } from "styled-components";

/*******************************************************************
 *                            **Types**                            *
 *******************************************************************/
export interface ICheckboxProps
  extends React.ComponentPropsWithoutRef<"input"> {
  color?: string;
}

/*******************************************************************
 *                  **Utility functions/constants**                *
 *******************************************************************/
const CHECKBOX_SIZE = 15;

/*******************************************************************
 *                            **Styles**                           *
 *******************************************************************/
const Container = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const Stack = styled.span`
  position: relative;
  display: inline-grid;
  justify-content: center;
  align-items: center;

  &:not(:only-child) {
    margin-right: 5px;
  }

  & > * {
    grid-row: 1;
    grid-column: 1;
  }
`;

const sharedStyles = css`
  display: inline-block;
  width: ${CHECKBOX_SIZE}px;
  height: ${CHECKBOX_SIZE}px;
`;

const disabledStyles = css`
  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled) {
    cursor: pointer;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  ${sharedStyles}
  margin: 0;
  padding: 0;
  z-index: 2;

  /* Hide checkbox visually but remain accessible to screen readers. */
  opacity: 0;

  ${disabledStyles}
`;

const focusedStyles = css`
  ${HiddenCheckbox}:not(:disabled).focus-visible + & {
    border: 1.5px solid ${({ theme }) => theme.color.black};
  }
`;

const hoveredStyles = css`
  ${HiddenCheckbox}:not(:disabled):checked:hover + & {
    border: 1.5px solid ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.black};
  }

  ${HiddenCheckbox}:not(:disabled):not(:checked):hover + & {
    border: 1.5px solid ${({ theme }) => theme.color.greyMedium};
  }
`;

const checkedStyles = css`
  ${HiddenCheckbox}:checked + & {
    background-color: ${({ theme }) => theme.color.black};
  }
`;

const StyledCheckbox = styled.span<{ color?: string }>`
  ${sharedStyles}

  background-color: ${({ color = "", theme }) =>
    theme.color[color] || color || "inherit"};

  border-radius: ${({ theme }) => theme.borderRadius.checkbox}px;
  z-index: 1;

  transition: all 100ms;
  border: 1.5px solid transparent;
  ${hoveredStyles}
  ${focusedStyles}
  ${checkedStyles}
`;

/*******************************************************************
 *                           **Component**                         *
 *******************************************************************/
const Checkbox: React.FC<ICheckboxProps> = ({
  className,
  type, // unused
  color,
  children,
  ...rest
}) => (
  <Container className={className}>
    <Stack>
      <HiddenCheckbox {...rest} />
      <StyledCheckbox color={color} />
    </Stack>
    {children}
  </Container>
);

export default Checkbox;

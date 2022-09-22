import React, { ReactElement, FunctionComponent, ComponentProps } from 'react';
import { styled } from '../../stitches.config';
import { DotLoader } from '../loader';

const StyledButton = styled('button', {
  appearance: 'none',
  border: 'none',
  background: 'transparent',
  fontSize: '$lg',
  lineHeight: '$md',
  borderRadius: '$lg',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '$7',
  cursor: 'pointer',
  transition: 'all $transitions$2',
  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  '&:focus, &:active': {
    outline: 'none',
  },
  '&:focus': {
    $$shadowColor: '$colors$system300',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 2px, $$shadowColor 0px 0px 0px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
  },
  variants: {
    size: {
      '2xl': {
        padding: '$9 $12',
        borderRadius: '$xl',
        fontSize: '$lg',
        lineHeight: '$lg',
        height: '$16',
      },
      xl: {
        padding: '$5 $10',
        borderRadius: '$xl',
        fontSize: '$lg',
        lineHeight: '$lg',
        height: '$12',
      },
      lg: {
        padding: '$4 $8',
        borderRadius: '$lg',
        fontSize: '$md',
        lineHeight: '$md',
        height: '$10',
      },
      md: {
        padding: '$3 $5',
        borderRadius: '$md',
        fontSize: '$sm',
        lineHeight: '$md',
        height: '$8',
      },
      sm: {
        padding: '$1 $4',
        borderRadius: '$sm',
        fontSize: '$sm',
        lineHeight: '$sm',
        height: '$6',
      },
      xs: {
        padding: '$1 $3',
        borderRadius: '$sm',
        fontSize: '$xs',
        lineHeight: '$xs',
        height: '$5',
      },
      xxs: {
        padding: '$1 $2',
        borderRadius: '$sm',
        fontSize: '$xxs',
        lineHeight: '$xxs',
        height: '$4',
      },
    },
    variant: {
      default: {
        background: '$black50',
        color: '$neutral800',
        '&:hover, &:focus': {
          color: '$neutral900',
          background: '$black100',
        },
        '&:active': {
          color: '$neutral900',
          background: '$black200',
        },
      },
      primary: {
        background: '$primary400',
        color: '$white900',
        '&:hover': {
          background: '$primary500',
        },
        '&:focus': {
          background: '$primary500',
        },
        '&:active': {
          background: '$primary600',
        },
      },
      accent: {
        background: '$tertiary600',
        color: '$white900',
        '&:hover, &:focus': {
          background: '$tertiary700',
        },
        '&:active': {
          background: '$tertiary800',
        },
      },
      secondary: {
        background: 'transparent',
        color: '$tertiary500',
        border: '$borderWidths$sm solid $colors$tertiary600',
        '&:hover, &:focus': {
          color: '$tertiary600',
        },
        '&:hover': {
          border: '$borderWidths$sm solid $tertiary500',
        },
        '&:focus': {
          border: '$borderWidths$sm solid $tertiary600',
        },
        '&:active': {
          color: '$tertiary700',
          background: '$tertiary100',
          border: '$borderWidths$sm solid $tertiary700',
        },
      },
    },
    isText: {
      true: {
        background: 'transparent',
        border: 'none',
        color: '$neutral700',
        fontWeight: '$7',
        padding: 0,
        '&:hover, &:active, &:focus': {
          background: 'transparent',
          borderColor: 'transparent',
        },
      },
    },
    isTransparent: {
      true: {
        border: 'none',
        background: 'transparent',
        '&:active, &:focus, &:hover': {
          borderColor: 'transparent',
          background: 'transparent',
        },
      },
    },
    isLoading: {
      true: {
        pointerEvents: 'none',
      },
    },
    isIcon: {
      true: {
        padding: 0,
        justifyContent: 'center',
        width: '$10',
        height: '$10',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      isText: true,
      css: {
        color: '$secondary500',
        '&:hover, &:focus, &:active': {
          color: '$secondary700',
        },
      },
    },
    {
      variant: 'primary',
      isLoading: true,
      css: {
        background: '$primary700',
      },
    },
    {
      variant: 'accent',
      isText: true,
      css: {
        color: '$tertiary600',
        '&:hover, &:focus, &:active': {
          color: '$tertiary700',
        },
      },
    },
    {
      variant: 'default',
      isText: true,
      css: {
        color: '$neutral700',
        '&:hover, &:focus, &:active': {
          color: '$neutral900',
        },
      },
    },
    {
      variant: 'default',
      isLoading: true,
      css: {
        background: '$black100',
        '& div': {
          background: '$neutral800',
        },
      },
    },
    {
      variant: 'secondary',
      isLoading: true,
      css: {
        background: '$tertiary100',
        '& div': {
          background: '$tertiary700',
        },
      },
    },
    {
      isIcon: true,
      isTransparent: true,
      css: {
        padding: 0,
        width: 'auto',
        height: 'auto',
      },
    },
    {
      isIcon: true,
      size: 'xxl',
      css: {
        width: '$16',
        height: '$16',
        '& svg': {
          width: '$4',
          height: '$4',
        },
      },
    },
    {
      isIcon: true,
      size: 'xl',
      css: {
        width: '$12',
        height: '$12',
        '& svg': {
          width: '$3',
          height: '$3',
        },
      },
    },
    {
      isIcon: true,
      size: 'lg',
      css: {
        width: '$10',
        height: '$10',
        '& svg': {
          width: '$3',
          height: '$3',
        },
      },
    },
    {
      isIcon: true,
      size: 'md',
      css: {
        width: '$8',
        height: '$8',
        '& svg': {
          width: '$3',
          height: '$3',
        },
      },
    },
    {
      isIcon: true,
      size: 'sm',
      css: {
        width: '$6',
        height: '$6',
        '& svg': {
          width: '10px',
          height: '10px',
        },
      },
    },
    {
      isIcon: true,
      size: 'xs',
      css: {
        width: '$5',
        height: '$5',
        '& svg': {
          width: '$3',
          height: '$3',
        },
      },
    },
    {
      isIcon: true,
      size: 'xxs',
      css: {
        width: '$4',
        height: '$4',
        '& svg': {
          width: '$3',
          height: '$3',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
});

const StyledSpan = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
});

export interface ButtonBaseProps {
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  icon?: ReactElement;
  onClick?: () => void;
}

type ButtonProps = ButtonBaseProps &
  ComponentProps<typeof StyledButton> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: React.ElementType;
  };

export const Button:FunctionComponent<ButtonProps> = React.forwardRef(
  (
    {
      children, variant = 'primary', isIcon = false, icon, iconLeft, iconRight, isLoading, disabled, onClick, ...rest
    }: ButtonProps,
    ref,
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        isIcon={isIcon}
        disabled={disabled}
        data-testid="button"
        onClick={onClick}
        {...rest}
      >
        {isLoading
          ? <DotLoader />
          : (
            <>
              {
              isIcon
                ? (
                  <>
                    { icon && React.cloneElement(icon)}
                  </>
                )
                : (
                  <>
                    {iconLeft && (
                    <StyledSpan css={{ marginRight: '$4' }}>
                      {React.cloneElement(iconLeft)}
                    </StyledSpan>
                    )}
                    {children}
                    {iconRight && (
                    <StyledSpan css={{ marginLeft: '$4' }}>
                      {React.cloneElement(iconRight)}
                    </StyledSpan>
                    )}
                  </>
                )
            }
            </>
          )}
      </StyledButton>
    );
  },
);

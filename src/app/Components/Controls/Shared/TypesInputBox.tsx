import * as React from 'react';

type AlignIcon = 'left' | 'right';

export type InputProps = {
    iconcb: {
        iconbase: string,
        icontype: string
    },
    iconcolor: {
        normal:  string,
        checked: string
    }
} &
  React.InputHTMLAttributes<HTMLInputElement>;

export type Props = {
    margin?: string;
    alignIcon?: AlignIcon;
    styleContainer?: string;
    } &
    InputProps;

export type PropsGroup = {
    groupContainer?: string;
} &
    Props;

export const getAlign = (alignIcon: AlignIcon) => alignIcon + '-children';
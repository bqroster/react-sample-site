import * as React from 'react';
import * as cn from 'classnames';

// @types
import { getAlign, Props } from '~/app/Components/Controls/Shared/TypesInputBox';
type InputBoxType = Props & { inputType: string };

// styles
import * as styles from '~/app/Components/Controls/Shared/styleInputBox.css';

// components
import InputBox from '~/app/Components/Controls/Shared/InputBox';

const WithInputBox: React.StatelessComponent<InputBoxType> =
    ({ inputType, margin, iconcb, iconcolor,
         alignIcon = 'left', children,
         styleContainer = 'container',
         ...otherProps }) => {

        return (
            <div className={cn(styles[styleContainer])} style={{ margin: margin || 0 }} >
                <label className={cn(styles[alignIcon])}>
                    <InputBox
                        iconcb={iconcb}
                        iconcolor={iconcolor}
                        type={inputType}
                        {...otherProps}
                    />
                    <div className={cn(styles.children, getAlign(alignIcon))}>{children}</div>
                </label>
            </div>
        );
    };

export default WithInputBox;
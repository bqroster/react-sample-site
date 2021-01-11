import * as React from 'react';
import * as cn from 'classnames';

// @types
import { InputProps as Props } from '~/app/Components/Controls/Shared/TypesInputBox';

// styles
import * as icons from '~/resources/assets/css/icons-input.css';

const InputCKBR: React.StatelessComponent<Props> =
    ({ iconcb, iconcolor, ...otherProps }) => {

    // let color = iconcolor.normal;
    let textInput:      HTMLInputElement | null = null;

    // toggle the color
    let toggleIconColor = () => {

        // both color are same, nothing to do
        if (iconcolor.normal === iconcolor.checked) { return; }

        if (!!textInput) {
            if (textInput.type === 'radio' ) {
                // TODO
            }

            if (!!textInput.checked && textInput.checked) {
                // TODO
            }
        }
    };

    return (
        <input
            {...otherProps}
            ref={(input) => { textInput = input; }}
            onChange={toggleIconColor}
            className={cn(
                    iconcb.iconbase,
                    icons[iconcb.icontype],
                    icons[iconcolor.normal]
            )}
        />
    );
};

export default InputCKBR;
import * as React from 'react';

// @types
import { PropsGroup as Props } from '~/app/Components/Controls/Shared/TypesInputBox';

// styles
import * as styles from '~/app/Components/Controls/Shared/style-group.css';

// components
import RadioInput from '~/app/Components/Controls/Radio';

const RadioGroup: React.StatelessComponent<Props> =
    ({ margin, iconcb, iconcolor, children,
         alignIcon = 'left',
         groupContainer = 'container',
         styleContainer,
         ...otherProps }) => {

    let InputGroup;

    if (!!children) {
        InputGroup = Object.values(children).map((childItem, indx) => {

            return (
                <RadioInput
                    key={indx}
                    margin={margin}
                    alignIcon={alignIcon}
                    iconcb={iconcb}
                    iconcolor={iconcolor}
                    styleContainer={styleContainer}
                    {...otherProps}
                >
                    {childItem}
                </RadioInput>
            );
        });
    }

    return (
        <div className={styles[groupContainer]}>
            {InputGroup}
        </div>
    );
};

export default RadioGroup;
import * as React from 'react';

// @types
import { PropsGroup as Props } from '~/app/Components/Controls/Shared/TypesInputBox';

// styles
import * as styles from '~/app/Components/Controls/Shared/style-group.css';

// components
import CheckInput from '~/app/Components/Controls/CheckBox';

const CheckGroup: React.StatelessComponent<Props> =
    ({ margin, iconcb, iconcolor, children,
         alignIcon = 'left',
         groupContainer = 'container',
         styleContainer,
         ...otherProps }) => {

    let InputGroup;

    if (!!children) {
        InputGroup = Object.values(children).map((childItem, indx) => {

            return (
                <CheckInput
                    key={indx}
                    margin={margin}
                    alignIcon={alignIcon}
                    iconcb={iconcb}
                    iconcolor={iconcolor}
                    styleContainer={styleContainer}
                    {...otherProps}
                >
                    {childItem}
                </CheckInput>
            );
        });
    }

    return (
        <div>
            <div className={styles[groupContainer]}>
                {InputGroup}
            </div>
        </div>
    );
};

export default CheckGroup;
import * as React from 'react';

// components
import CheckGroup from '~/app/Components/Controls/CheckBox/group';
import RadioGroup from '~/app/Components/Controls/Radio/group';

const ShadowBlock = () => {

    // Define the type of icon for checkbox
    const iconcb = {
        iconbase: 'icon-any-icon-here',
        icontype: 'iconCheckBox2'
    };

    const iconcolor = {
        normal:  'orange',
        checked: 'blue'
    };

    const margin = '0 0 25px';

    return (
        <>
            <CheckGroup
                margin={margin}
                groupContainer="container"
                styleContainer="newcontainer"
                alignIcon="right"
                iconcb={iconcb}
                iconcolor={iconcolor}
                name="pwdcheck[]"
            >
                <div>At least 8 characters</div>
                <div>At least One Uppercase</div>
                <div>At least One Lowercase</div>
                <div>At least One Special Char</div>
            </CheckGroup>

            <RadioGroup
                margin={margin}
                groupContainer="newcontainer"
                styleContainer="container"
                iconcb={iconcb}
                iconcolor={iconcolor}
                name="pwdradio[]"
            >
                <div>At least 8 characters</div>
                <div>At least One Uppercase</div>
                <div>At least One Lowercase</div>
                <div>At least One Special Char</div>
            </RadioGroup>
        </>
    );
};

export default ShadowBlock;
import * as React from 'react';

// @types
import { Props } from '~/app/Components/Controls/Shared/TypesInputBox';

// components
import WithInputBox from '~/app/Components/Controls/Shared/withInputBox';

const CheckInput: React.StatelessComponent<Props> =
    (props) => <WithInputBox {...props} inputType="checkbox" />;

export default CheckInput;
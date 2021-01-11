import * as React from 'react';

// @types
import { Props } from '~/app/Components/Controls/Shared/TypesInputBox';

// components
import WithInputBox from '~/app/Components/Controls/Shared/withInputBox';

const RadioInput: React.StatelessComponent<Props> =
    (props) => <WithInputBox {...props} inputType="radio" />;

export default RadioInput;
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import TestComp  from './TestComp'
const TestCompMeta: ComponentMeta<typeof TestComp> = {
    title: 'TestComp Component',
    component: TestComp,
    argTypes:{

    },
    args: {

    }
}
export default TestCompMeta;

type TestCompStory = ComponentStory<typeof TestComp>
export const Basic : TestCompStory = (args) => <TestComp {...args} />
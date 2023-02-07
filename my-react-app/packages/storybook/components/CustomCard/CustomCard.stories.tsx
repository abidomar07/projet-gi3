import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CustomCard  from './CustomCard'
const CustomCardMeta: ComponentMeta<typeof CustomCard> = {
    title: 'CustomCard Component',
    component: CustomCard,
    argTypes:{

    },
    args: {

    }
}
export default CustomCardMeta;

type CustomCardStory = ComponentStory<typeof CustomCard>
export const Basic : CustomCardStory = (args) => <CustomCard/>
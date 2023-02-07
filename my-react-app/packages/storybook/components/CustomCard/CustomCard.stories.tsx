import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CustomCard  from './CustomCard'
const CustomCardMeta: ComponentMeta<typeof CustomCard> = {
    title: 'CustomCard Component',
    component: CustomCard,
    argTypes:{

    },
    args: {
        listArtiste: [
            {
              title: 'Image 1',
              description: 'This is a description for Image 1',
              uri: 'https://picsum.photos/200'
            },
            {
              title: 'Image 2',
              description: 'This is a description for Image 2',
              uri: 'https://picsum.photos/200'
            },
            {
              title: 'Image 3',
              description: 'This is a description for Image 3',
              uri: 'https://picsum.photos/200'
            },
            {
              title: 'Image 4',
              description: 'This is a description for Image 4',
              uri: 'https://picsum.photos/200'
            }
          ]
    }
}
export default CustomCardMeta;

type CustomCardStory = ComponentStory<typeof CustomCard>
export const Basic : CustomCardStory = (args) => <CustomCard {...args} />
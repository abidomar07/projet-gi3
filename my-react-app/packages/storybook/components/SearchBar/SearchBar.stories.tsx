import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import SearchBar from './SearchBar'


const SearchBarMeta: ComponentMeta<typeof SearchBar> = {
    title: "Search bar",
    component: SearchBar,
    argTypes:{
    //    type:{
    //     options: ['link', 'button'],
    //     control: { type: 'radio' },
    //    }
    },
    args: {
        searchPhrase: 'Artist Exp',
        setSearchPhrase : (newSearchPhrase)  => {console.log('search string',newSearchPhrase);}
    }
}

export default SearchBarMeta;

type SearchBarStory = ComponentStory<typeof SearchBar>
export const SearchBarLeftLoop : SearchBarStory = (args) => <SearchBar {...args} />

import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import React from 'react'
import SearchBar from './SearchBar'


const SearchBarMeta: ComponentMeta<typeof SearchBar> = {
    title: "Search bar",
    component: SearchBar,
    argTypes: {

    },
    args: {
        searchPhrase: 'Artist Exp',
        setSearchPhrase: (newSearchPhrase) => { console.log('search string', newSearchPhrase); },
        clicked: false,
        setClicked: (newclicked: boolean) => { console.log('search string newclicked', newclicked); }
    }
}

export default SearchBarMeta;

type SearchBarStory = ComponentStory<typeof SearchBar>
export const SearchBarRightLoop: SearchBarStory = (args) => <SearchBar {...args} />
export const CardType2: SearchBarStory = (args) => <SearchBar {...args} />;

CardType2.args = {
  ...SearchBarMeta.args,
  bgColor : 'red'
};

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LinksScreen from '../components/LinksScreen';
import DetailsScreen from '../components/DetailsScreen';

const StackTest = createStackNavigator({
    LinksScreen: {
        screen: LinksScreen
    },
    Details: {
        screen: DetailsScreen
    }
});

const AppContainer = createAppContainer(StackTest);

export default class App extends Component<Props> {
    render() {
        return <AppContainer/>
    }
}
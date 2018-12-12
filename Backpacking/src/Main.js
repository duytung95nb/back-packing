import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import firebase from 'react-native-firebase';

export default class Main extends React.Component {
    state = { currentUser: null };
    componentDidMount() {
        const { currentUser } = firebase.auth();
        this.setState({ currentUser });
    }
    render() {
        const { currentUser } = this.state
        return (
            <View style={styles.container}>
               <ToolbarAndroid
                    style={styles.toolbar}
                    title="Movies"
                    onActionSelected={this.onActionSelected}
                    titleColor= "000"
                    actions = {[
                    {title: "Log out", show: "never"}
                    ]}
                />
                <Text>
                    Hi {currentUser && currentUser.email}!
                    {JSON.stringify(currentUser)}
                </Text>
            </View>
        );
    }

    onActionSelected = (position) => {
        if (position === 0) { // index of 'Settings'
            showSettings();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toolbar: {
        backgroundColor: '#2196F3',
        height: 56,
        alignSelf: 'stretch',
        textAlign: 'center',
      }, 
});
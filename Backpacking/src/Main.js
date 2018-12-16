import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import Dashboard from './dashboard/dashboard';
import firebase from 'react-native-firebase';

export default class Main extends React.Component {
    state = { currentUser: {email: '', displayName: ''} };
    componentDidMount() {
        const { currentUser } = firebase.auth();
        this.setState({ currentUser });
    }
    render() {
        const { currentUser } = this.state;
        return (
            <View style={styles.container}>
               <ToolbarAndroid
                    style={styles.toolbar}
                    title="Movies"
                    onActionSelected={this.onActionSelected}
                    titleColor= "#000"
                    actions = {[
                        {title: this.getDisplayedName(currentUser)},
                        {title: "Log out", show: "never"}
                    ]}
                />
                <Dashboard style={styles.dashboard} currentUser={currentUser}/>
            </View>
        );
    }

    getDisplayedName = (currentUser) => {
        return  typeof(currentUser) === 'object' && currentUser.displayName !== null
            ? currentUser.displayName
            : currentUser.email; 
    }
    onActionSelected = async (position) => {
        if (position === 1) { // index of 'Logout'
            try {
                await firebase.auth().signOut();
                this.props.navigation.navigate('Loading');
            } catch (e) {
                console.log(e);
            }
        }
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    toolbar: {
        backgroundColor: '#2196F3',
        height: 56,
        alignSelf: 'stretch'
    },
    dashboard: {
        flex: 1,
        alignSelf:'stretch'
    }
});
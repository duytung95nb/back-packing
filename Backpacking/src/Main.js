import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import Dashboard from './dashboard/dashboard';
import firebase from 'react-native-firebase';
import BaseScreen from './_core/baseScreen';
import DataResourcesConstant from './_core/database/dataResources.constant';

export default class Main extends BaseScreen {
    state = {
        currentUser: { id: '', email: '', displayName: '', groupId: ''},
        group: { id: '', name: '' }
    };
    componentDidMount() {
        this.fetchUserAndGroupData();
        // Check if the user belongs to any group
    }

    render() {
        const { currentUser } = this.state;
        return (
            <View style={styles.container}>
               <ToolbarAndroid
                    style={styles.toolbar}
                    title="Dashboard"
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

    fetchUserAndGroupData = () => {
        let { currentUser } = firebase.auth();
        firebase.database().ref(`${DataResourcesConstant.users}/${currentUser.uid}`)
            .once('value', (cutomUser) => {
                console.log('cutomUser', cutomUser);
                currentUser.groupId = cutomUser.groupId; // its not custom user data, read document again abouot returned data type
                if(currentUser.groupId === null) {
                    this.setState({ currentUser });
                    return;
                }
                firebase.database().ref(`${DataResourcesConstant.groups}/${currentUser.groupId}`)
                    .once('value', (snapshot) => {
                    const group = snapshot.val();
                    this.setState({ currentUser, group});
                });
            });
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
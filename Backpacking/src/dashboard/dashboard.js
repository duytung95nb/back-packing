import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default class Dashboard extends React.Component {

    componentDidMount() {
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Dashboard</Text>
                
                <Text>
                    Hi {this.props.currentUser && this.props.currentUser.email}!
                    {JSON.stringify(this.props.currentUser)}
                </Text>
                {/* <ActivityIndicator size="large" /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'green'
    }
});
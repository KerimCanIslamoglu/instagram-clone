import React, { useState, useEffect, useReducer } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, FlatList, Dimensions, TouchableOpacity, KeyboardAvoidingView,Platform } from 'react-native';
import { getList } from '../Actions'
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');

import { Input } from '../Components'


const List = (props) => {

    useEffect(() => {
        props.getList()
    }, [])

    const renderItem = ({ item }) => (
        <View style={styles.listView}>
            <View style={styles.ppView}>
                <Image style={styles.ppImage} source={{
                    uri: item.image != null ? item.image : 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
                }} />
                <View style={styles.upTextView}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text >{item.gender}</Text>
                </View>

            </View>
            <Image style={styles.image} source={{
                uri: item.image != null ? item.image : 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
            }} />
            <View style={styles.commentLogosTopView}>
                <View style={styles.likeView}>
                    <TouchableOpacity>
                        <Image style={styles.commentLogos} source={require('../img/heart.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.commentLogos} source={require('../img/comment.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.commentLogos} source={require('../img/share.png')} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image style={styles.commentLogos} source={require('../img/save.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.likeCountView}>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={styles.likeCountText}>{props.list.length} </Text>
                    <Text>kişi beğendi</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nameAndDescView}>
                <TouchableOpacity>
                    <Text style={styles.likeCountText}>{item.name} </Text>
                </TouchableOpacity>
                <Text>{item.type != "" ? item.type : "lorem ipsum dolor sit amet"}</Text>
            </View>
            <TouchableOpacity style={styles.commentView}>
                <Text style={styles.commentText}>{props.list.length} </Text>
                <Text>yorumun tümünü gör</Text>
            </TouchableOpacity>
            <View style={styles.addCommentView}>
                <View style={{ flexDirection: 'row',marginTop:height*0.01 }}>
                    <Image style={styles.commentImage} source={{
                        uri: item.image != null ? item.image : 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
                    }} />
                    <Input placeholder={'Yorum ekle...'} style={{ backgroundColor: 'white', fontSize: 15, height: height * 0.063, paddingLeft: 10, width: width * 0.4 }} />
                </View>
                <View style={styles.commentEmojisView}>
                    <TouchableOpacity style={styles.commentEmojis}>
                        <Image style={{ width: 20, height: 20 }} source={require('../img/kiss.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commentEmojis}>
                        <Image style={{ width: 20, height: 20 }} source={require('../img/heartemoji.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commentEmojis}>
                        <Image style={{ width: 20, height: 20 }} source={require('../img/plusadd.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    return (

        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <FlatList style={{ flex: 1 }}
                    data={props.list}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    listView: {
        marginVertical: height * 0.02,
    },
    image: {
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center',
        height: height * 0.6
    },
    name: {
        fontWeight: 'bold',
    },
    ppImage: {
        height: width * 0.1,
        width: width * 0.1,
        borderRadius: 50,
        borderColor: '#D92D7B',
        borderWidth: 2

    },
    ppView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: width * 0.01,
        marginBottom: height * 0.01
    },
    upTextView: {
        flexDirection: 'column',
        marginLeft: width * 0.03
    },
    commentLogos: {
        height: width * 0.075,
        width: width * 0.075,
        marginHorizontal: width * 0.01,
    },
    commentLogosTopView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: height * 0.01
    },
    likeView: {
        flexDirection: 'row'
    },
    likeCountView: {
        marginLeft: width * 0.02,
    },
    likeCountText: {
        fontWeight: 'bold'
    },
    nameAndDescView: {
        marginLeft: width * 0.02,
        flexDirection: 'row',
        marginVertical: height * 0.01,
    },
    commentView: {
        flexDirection: 'row',
        marginLeft: width * 0.02,
    },
    commentImage: {
        height: width * 0.1,
        width: width * 0.1,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    addCommentView: {
        marginLeft: width * 0.02,
        flexDirection: 'row',
        marginVertical: height * 0.01,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    commentEmojisView: {
        flexDirection: 'row',
    },
    commentEmojis: {
        marginHorizontal: width * 0.02
    }
});

const mapStateToProps = ({ listResponse }) => {
    const { list } = listResponse;
    return { list };
};
export default connect(mapStateToProps, { getList })(List);
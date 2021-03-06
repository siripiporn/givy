
import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({

    //Menu Page
    container_menu: {
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 45,
    },
    feedicon_menu: {
        marginHorizontal: 40,
    },
    galleryIcon_menu: {
        marginHorizontal: 40,
    },
    shopIcon_menu: {
        marginHorizontal: 40,
    },

    //Points Page
    container_point: {
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 20,
        // marginHorizontal: 10,

    },
    rectangle_point: {
        marginHorizontal: 9,
    },
    coinIcon_point: {
        marginHorizontal: 9,

    },
    basketIcon_point: {
        marginHorizontal: 9,
    },

    //Nav page
    container_nav: {

        flex: 1,
        flexDirection: 'row',



    },
    order_buttom_nav: {

        borderColor: '#50596D',
        backgroundColor: '#18E39C',
        borderRadius: 5,
        borderWidth: 1.5,
        paddingVertical: 5,
        marginTop: 5,
        flex: 2,
        height: 40


    },
    buttom_content_nav: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    heartcontents_nav: {
        color: 'white',
        marginHorizontal: 20,
    },
    iconsee_nav: {

        marginHorizontal: 8,
        paddingVertical: 10,
        borderColor: '#50596D',
        borderRadius: 5,
        borderWidth: 1.5,
        justifyContent: 'center',
        paddingVertical: 5,
        marginTop: 5,
        flex: 1,
        height: 40
    },
    iconseetext_nav: {

        textAlign: 'center',


    },
    call_nav: {
        marginTop: 5,
        marginHorizontal: 8,
        paddingVertical: 10,
        borderColor: '#50596D',
        borderRadius: 5,
        borderWidth: 1.5,
        flex: 1,
        height: 40

    },
    callcontents_nav: {

        textAlign: 'center',


    },
    location_nav: {


        borderColor: '#50596D',
        borderRadius: 5,
        borderWidth: 1.5,
        justifyContent: 'center',

        marginTop: 5,
        flex: 1,
        height: 40


    },
    locationcontents_nav: {
        textAlign: 'center',
    },

    buttom_nav: {
        marginTop: 21,
        borderColor: '#50596D',
        backgroundColor: '#18E39C',
        borderRadius: 5,
        borderWidth: 1.5,
        justifyContent: 'center'
    },


    //About Brand
    container_brand: {
        flex: 4,
        flexDirection: 'row',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 1,
        backgroundColor: '#18E39C',
    },
    circle_small: {
        width: 90,
        height: 90,
        borderRadius: 100 / 1,
        backgroundColor: 'pink',
        alignSelf: 'center',
        marginTop: 5,
        borderColor: '#1C202A',
        borderWidth: 1.5


    },
    point_brand: {
        paddingRight: 10,
        flex: 1,
        marginVertical: 20,
        fontSize: 20,
        fontFamily: 'gelion-bold',
    },
    imagestar_brand: {
        width: 20,
        height: 20,
    },
    contents_brand: {
        color: 'white',
        marginHorizontal: 22,
        fontSize: 20,
        fontFamily: 'gelion-bold',
    },
    contents_category: {
        color: '#18E39C',
        marginHorizontal: 6,
        fontSize: 15,
        fontFamily: 'gelion-regular',
    },
    contents_name_brand: {
        color: '#EFEFEF',
        marginHorizontal: 5,
        fontSize: 20,
        fontFamily: 'gelion-bold',
    },
    contents_text: {
        color: 'white',
        marginHorizontal: 5,
        fontSize: 15,
        fontFamily: 'gelion-regular',
    },
    contents_pink: {
        marginHorizontal: 13,
        color: '#18E39C',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    logo_brand: {
        marginHorizontal: 3,
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'space-between'
    },

    discretion_detail: {

        flex: 1,
        marginVertical: 10,
    },
    buttom: {
        marginTop: 20,
        borderColor: '#50596D',
        backgroundColor: '#18E39C',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 70,
        height: 50,
        justifyContent: 'center'
    },
    buttom_content: {
        color: 'white',
        marginHorizontal: 15,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'gelion-bold',

    },

    buttom_subscribe: {
        width: 110,
        height: 30,
        marginTop: 50,
        paddingVertical: 5,
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 1.5,
    },
    text_subscribe: {

        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'gelion-bold',
    },
    text_members: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'gelion-bold',
        marginTop: 15,

    },

    //Feed Page
    container_feed: {
        flex: 1,
        flexDirection: "row",
        marginTop: 16,
        marginHorizontal: 5,
    },

    image_feed: {
        height: 120,
        width: 300,
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 5,
    },

    //Stroy Page
    container_story: {
        flex: 1,
        flexDirection: 'column',


    },
    container_image_story: {
        flex: 1,
        height: 140,
        width: 110,
        borderRadius: 2,

        marginEnd: 3,
        paddingTop: 4,
        borderWidth: 0.5,
        borderColor: '#50596D',

    },

    image_story: {
        height: 130,
        width: 98,
        alignItems: 'center',
        // backgroundColor: 'blue',
        borderRadius: 2,
        marginHorizontal: 5,
        borderWidth: 1,

    },
    container_content_story: {
        marginVertical: 5,
        marginHorizontal: 5,
    },
    content_story: {
        marginTop: 2,
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontFamily: 'gelion-bold',
        height: 30,
    },


    //Store Page
    container_store: {
        height: 270,
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 16

    },
    imageContainer_store: {
        borderRadius: 2,
        marginHorizontal: 6,

    },
    image_store: {
        height: 200,
        width: 180,
        borderRadius: 2,
        marginHorizontal: 6,
    },
    contentstory_store: {
        marginHorizontal: 7,
        marginVertical: 3,
        height: 100,
        marginBottom: 30,
        color: 'white',
        fontSize: 16,
        fontFamily: 'gelion-bold',
    },
    searchBox_store: {
        height: 80,
        backgroundColor: '#252A37',
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    searchIcon_store: {
        height: 50, backgroundColor: '#252A37', borderColor: '#50596D',
        borderRadius: 5,
        borderWidth: 1.5, flexDirection: 'row', padding: 5, alignItems: 'center'
    },
    contentSearch_store: {
        fontSize: 12,
        marginLeft: 15,
        flex: 1, color: 'white'
    },
    boxpopular_store: {
        marginHorizontal: 7,
        color: 'white',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    boxpopular_sale_store: {
        marginHorizontal: 7,
        color: '#18E39C',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    boxpopular_Price_store: {
        marginHorizontal: 7,
        color: 'white',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    container_detail_store: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    content_price_store: {

        color: 'white',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    content_sale_store: {
        flex: 1,
        flexDirection: 'row',
        color: '#18E39C',
        fontSize: 15,

        fontFamily: 'gelion-bold',
    },
    content_heart_store: {

        color: 'white',

    },
    box_store: {
        borderColor: 'red'
    },
    texts_header_store: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'gelion-bold',
    },
    texts_des_store: {
        color: 'white',
        fontSize: 15,
        width: 200,
        fontFamily: 'gelion-regular',
    },
    barslide_store: {
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#18E39C',
        borderRadius: 3,
        width: 60,
        height: 5,
    },
    container_content_store: {
        marginHorizontal: 10,
        marginVertical: 10,
        color: 'white',
        fontFamily: 'gelion-bold',
        fontSize: 18,
    },
    content_detail_store: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 10,
        marginVertical: 10,
        fontFamily: 'gelion-bold',
        fontSize: 15,
    },
    search_store: {
        marginHorizontal: 10,
        paddingVertical: 10,
        left: 17,
        borderColor: '#50596D',
        borderWidth: 1,
        borderEndWidth: 2,
        height: 50,
        width: 80

    },
    search_icon_store: {
        color: 'white',
        marginHorizontal: 35,
        marginTop: 12,
        marginVertical: 5,
    },
    container_image_store: {
        marginHorizontal: 16,
        marginRight: 16,
        flex: 1,
        flexDirection: 'row'
    },

    image_store: {
        marginVertical: 10,
    },
    container_box_store: {
        borderTopColor: '#2F3543',
        borderBottomWidth: 0.5,
        flex: 1,
        flexDirection: 'row',
        marginRight: 16,
        marginHorizontal: 16,

    },

    //Title Page
    container_title: {
        flex: 0.5,
        flexDirection: 'row',

        // marginVertical: 30,
        // marginHorizontal: 5,

    },
    imageTitle: {
        width: 170,
        height: 170,
        flex: 1
    },

    contents_title: {
        color: '#EFEFEF',
        marginHorizontal: 5,
        fontSize: 20,
        fontFamily: 'gelion-bold',
    },

    h1: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'gelion-bold',
        marginLeft: 10

    },

    h2: {
        fontSize: 16,
        color: '#575B65',
        fontFamily: 'gelion-bold',
    },
    h3: {
        fontSize: 16,
        color: '#18E39C',
        fontFamily: 'gelion-bold',
        marginLeft: 5

    },
    h4: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'gelion-bold',
        marginLeft: 9,


    },
    h5: {
        fontFamily: 'gelion-regular',
        fontSize: 14,
        color: 'white',
    },
    h6: {
        fontFamily: 'gelion-regular',
        fontSize: 18,
        color: 'white',
    },
    greenFont: {
        fontFamily: 'Arialic', color: '#18E39C', fontSize: 50, marginHorizontal: 16
    },
    contents_box: {
        alignSelf: 'stretch', textAlign: 'left', fontSize: 14, color: 'white', fontFamily: 'gelion-bold'
    },
    container_comming_item: {
        flex: 5, flexDirection: 'row', padding: 4
    },
    container_box1_item: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: '#303540',
        height: 110,

        justifyContent: 'space-between'
    },
    image_item: {
        width: 110,
        height: 110,
    },
    circle_item: {
        width: 30,
        height: 30,
        borderRadius: 100 / 1,
        marginLeft: 10

    },
    small_box_item: {
        height: 50,
        backgroundColor: '#18E39C',
        height: 30, width: 30,
        margin: 15,
        borderRadius: 3,
    },
    content_box_item: {
        textAlign: 'center', marginTop: 4, fontSize: 18, color: '#fff', fontFamily: 'gelion-bold',
    },

    // Profile

    container_comments: {
        flex: 1,
        flexDirection: 'row',

    },
    circle_small_profile: {
        width: 65,
        height: 65,
        borderRadius: 65 / 1,
        alignSelf: 'center',
        marginTop: 2.5,
        borderColor: '#1C202A',

    },
    container_box_profile: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 16,
        marginRight: 16,
        marginTop: 5
    },
    container_comments_profile: {
        flex: 1,
        flexDirection: 'row',

    },
    container_box_profile: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 16,
        marginRight: 16,
        marginTop: 5
    },


})


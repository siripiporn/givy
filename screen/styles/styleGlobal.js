
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
        marginHorizontal:2,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        

    },
    order_buttom_nav: {
        marginTop: 10,
        paddingVertical: 10,
        borderColor: '#50596D',
        backgroundColor: '#18E39C',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 130,

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
        marginTop: 10,
        marginHorizontal: 8,
        paddingVertical: 10,
        borderColor: '#50596D',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 70,
        justifyContent: 'center'
    },
    iconseetext_nav: {
        color: 'white',
        marginHorizontal: 20,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'gelion-bold',

    },
    call_nav: {
        marginTop: 10,
        marginHorizontal: 8,
        paddingVertical: 10,
        borderColor: '#50596D',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 70,
    },
    callcontents_nav: {
        color: 'white',
        marginHorizontal: 25,

        paddingVertical: 5,
        fontSize: 20,
        fontFamily: 'gelion-bold',
    },
    location_nav: {
        marginTop: 10,
        marginHorizontal: 8,
        paddingVertical: 10,
        borderColor: '#50596D',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 70,

    },
    locationcontents_nav: {
        color: 'white',
        marginHorizontal: 25,
        paddingVertical: 2,

    },

    buttom_nav: {
        marginTop: 20,
        borderColor: '#50596D',
        backgroundColor: '#18E39C',
        borderRadius: 5,
        borderWidth: 1.5,
        justifyContent: 'center'
    },


    //About Brand
    container_brand: {
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 2,
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
        marginHorizontal: 5,
        fontSize: 15,
        fontFamily: 'gelion-bold',
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
        fontFamily: 'gelion-bold',
    },
    contents_pink: {
        marginHorizontal: 13,
        color: '#18E39C',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    logo_brand: {
        marginLeft: 2,
        width: 100,
        height: 100,
        borderRadius: 50
    },
    discretion_brand: {
        marginHorizontal: 10,
        flex: 1,

    },
    discretion_detail: {
        marginHorizontal: 2,
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
    container_buttom: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between',
    },
    buttom_subscribe: {
        width: 110,
        height: 30,
        marginTop: 5,
        paddingVertical: 8,
        borderColor: '#50596D',
        borderRadius: 5,
        borderWidth: 1.5,
    },
    text_subscribe: {

        color: 'white',
        fontSize: 10,
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
    container_story:{
        flex: 1,
        flexDirection: 'column',
  

    },
    container_image_story: {
        height: 190,
        width: 160,
        borderRadius: 2,
        marginHorizontal: 1,
        paddingTop: 4,
        borderWidth: 0.5,
        borderColor: '#50596D',
    },

    image_story: {
        height: 180,
        width: 150,
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
    // image_story: {

    //     height: 190,
    //     width: 150,
    //     borderRadius: 2,
    //     marginVertical: 10,
    //     marginHorizontal: 10,
    //     borderColor: 'red',
    //     borderWidth: 2,
    //     padding: 2,
    //     borderColor: '#50596D',
    // },
    // content_story: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     marginHorizontal: 10,
    //     marginBottom: 10,
    //     textAlign: 'center',
    //     color: 'white',
    //     fontSize: 14,
    //     fontFamily: 'gelion-bold',
    // },

    //Store Page
    container_store: {
        height:270,
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 5,

    },
    imageContainer_store: {
        borderRadius: 2,
        marginHorizontal: 6,
    },
    image_store: {
        height:200,
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
    }, searchBox_store: {
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
        fontSize: 18, 
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
        marginTop: 10
    },
    content_price_store: {
        flex: 1,
        flexDirection: 'row',
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
        marginRight: 60,
        fontFamily: 'gelion-bold',
    },
    content_heart_store: {
        flex: 1,
        flexDirection: 'row',
        color: 'white',
        marginLeft: 90,
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
        left: 15,
        borderColor: '#50596D',
        borderWidth: 1,
        borderEndWidth: 2,
        height: 50,
        width: 80

    },
    search_icon_store: {
        color: 'white',
        marginHorizontal: 28,
        marginVertical: 5,
    },
    container_image_store: {
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'row'
    },

    image_store: {
        marginVertical: 10,
    },
    container_box_store: {
        borderTopColor: '#2F3543',
        borderBottomWidth: 0.5,
       

    },

    //Title Page
    container_title: {
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 5,
        justifyContent: 'center',

    },
    imagestar_title: {
        width: 20,
        height: 20,
    },
    contents_title: {
        color: '#EFEFEF',
        marginHorizontal: 5,
        fontSize: 20,
        fontFamily: 'gelion-bold',
    },


})
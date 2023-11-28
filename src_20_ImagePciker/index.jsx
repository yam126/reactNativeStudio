import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
/**
 * 注意事项:
 * react-native-image-picker 要安装2.3.0版本
 * 而2.3.0版本的源代码里面ImagePickerModule.java在下面这段代码可能是bug，在电脑模拟器上会引起打不开相册或者摄像头的问题
 * 如果你也出现了这个问题，注释掉下面的代码即可
 *   if (libraryIntent.resolveActivity(reactContext.getPackageManager()) == null)
    {

      //responseHelper.invokeError(callback, "reactContext.getPackageManager()="+reactContext.getPackageManager());
      responseHelper.invokeError(callback, "Cannot launch photo library reactContext.getPackageManager() 367");
      return;
    }
 */

const options = {
  title: '选择头像',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackUp: true,
    path: 'images',
  },
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '去拍照',
  chooseFromLibraryButtonTitle: '从手机相册中选取',
  //chooseWhichLibraryTitle: '从手机相册中选取',
  mediaType: 'photo',
  cameraType: 'back',
  quality: 0.5,
  permissionDenied: {
    title: '是否允许授权?',
    text: '是否允许授权?',
    reTryTitle: '是否允许授权,重试',
    okTitle: '已授权',
  },
  maxWidth: Dimensions.get('window').width / 2,
  maxHeight: Dimensions.get('window').height / 2,
};

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      avatar: 'https://reactnative.dev/img/tiny_logo.png',
    };
  }
  changeImage = () => {
    //console.log(ImagePicker);
    //var imagePickerHandler = null;
    //imagePickerHandler = setInterval(() => {
    //clearInterval(imagePickerHandler);
    ImagePicker.showImagePicker(options, response => {
      console.log('Response=', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePciker Error', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        //const source = {uri: response.uri};
        this.setState({
          avatar: response.uri,
        });
      }
    });
    //}, 2000);
  };

  render() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity onPress={this.changeImage}>
          <View style={[styles.avatar]}>
            <Image style={[styles.avatar]} source={{uri: this.state.avatar}} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
  },
});

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';

const App = () => {
  const [listLink, setListLink] = useState([
    {
      id: 0,
      name: 'Sóng gió',
      url:
        'https://vnno-zn-5-tf-mp3-s1-zmp3.zadn.vn/b800471a6d5d8403dd4c/1145597756150434004?authen=exp=1569661028~acl=/b800471a6d5d8403dd4c/*~hmac=136f00ad803653023d76abf24b6973af',
    },
    {
      id: 1,
      name: 'Thái Bình mồ hồ rơi',
      url:
        'https://vnno-vn-5-tf-mp3-s1-zmp3.zadn.vn/cf0e62aa1beef2b0abff/6629173844239110097?authen=exp=1569654047~acl=/cf0e62aa1beef2b0abff/*~hmac=60fc20d940eaaed9fb160748fb5c2850',
    },
    {
      id: 2,
      name: 'Âm thầm bên em',
      url:
        'https://vnno-zn-5-tf-mp3-s1-zmp3.zadn.vn/5facf9a858ecb1b2e8fd/5870593596544825694?authen=exp=1569653503~acl=/5facf9a858ecb1b2e8fd/*~hmac=f12d5f6d625c36deb44f07d06542895d',
    },
    {
      id: 3,
      name: 'Tuý âm',
      url:
        'https://vnno-vn-5-tf-mp3-s1-zmp3.zadn.vn/1566955f4f1ba645ff0a/5714298647625346942?authen=exp=1569642883~acl=/1566955f4f1ba645ff0a/*~hmac=7ecccd6cf6ae7b4bacac715087e7a1fa',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState('');
  const [valuePause, setValuePasue] = useState(false);
  const [muted, setMuted] = useState(false);
  const [repeat, setonRepeat] = useState(false);
  const [progress, setProgress] = useState({});
  const [sliderValue, setSliderValue] = useState();

  useEffect(() => {}, []);

  useEffect(() => {
    progress.currentTime &&
      setSliderValue((progress.currentTime / progress.seekableDuration) * 100);
  }, [progress]);

  const _onBuffer = () => {};
  const _videoError = () => {
    console.log('error');
  };

  const onPressPlay = () => {
    setValuePasue(false);
    setLink(listLink[0]);
  };

  const onPressPause = () => {
    setValuePasue(!valuePause);
  };

  const onPressMuted = () => {
    setMuted(!muted);
  };

  const onPressRepeat = () => {
    setonRepeat(!repeat);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapControl}>
        <TouchableOpacity style={styles.button} onPress={onPressPlay}>
          <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressPause}>
          <Text>{valuePause === false ? 'Pause' : 'Play Continute'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wrapControl}>
        <TouchableOpacity style={styles.button} onPress={onPressMuted}>
          <Text>{muted === false ? 'Muted' : "Don't Muted"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressRepeat}>
          <Text>{repeat === false ? 'Repeat' : "Don't Repeat"}</Text>
        </TouchableOpacity>
      </View>

      <Slider
        style={styles.slider}
        maximumValue={100}
        minimumValue={0}
        step={1}
        value={sliderValue}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />

      <View style={styles.wraptime}>
        <Text>
          {progress.currentTime ? progress.currentTime.toFixed(0) : '0'}
        </Text>
        <Text>
          {progress.seekableDuration
            ? progress.seekableDuration.toFixed(0)
            : '0'}
        </Text>
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <Image source={require('./src/zing-mp3.png')} style={styles.image} />
      <Video
        onLoad={dataOnLoad => {
          if (dataOnLoad != null) {
            setLoading(true);
            console.log('data', dataOnLoad);
          }
        }}
        source={{uri: link.url}}
        onProgress={data => {
          if (data != null) {
            setLoading(false);
            setProgress(data);
            // console.log(data, 'onProgress');
          }
        }}
        ref={ref => {
          console.log('ref', ref);
        }}
        muted={muted}
        paused={valuePause}
        onBuffer={_onBuffer}
        onError={_videoError}
        style={styles.backgroundVideo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 30,
    marginTop: 10,
    backgroundColor: 'green',
  },
  backgroundVideo: {},
  wraptime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  wrapControl: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});

export default App;

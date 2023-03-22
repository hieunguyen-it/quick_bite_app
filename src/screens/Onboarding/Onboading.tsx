import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {isNullOrEmpty} from '@utils';
import remoteConfig from '@react-native-firebase/remote-config';
import defaultConfig from 'app.config.json';
import Colors from '@utils/constants/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonCommon, CircleImage} from '@components';
import {ScaledSheet} from 'react-native-size-matters';
import {navigate} from '@services/navigation/NavigationHelpers';
import RouteName from '@navigators/RouteName';

const Onboading: FC = () => {
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [onBoarding, setOnBoarding] = useState<Onboarding>();

  const swiperRef = useRef<Swiper>(null);

  const requestOnboardingConfigs = useCallback(async (): Promise<void> => {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 3000,
      fetchTimeMillis: 3000,
    });
    let onBoardingConfig: Onboarding;
    try {
      await remoteConfig().setDefaults({
        onBoardingConfig: JSON.stringify(defaultConfig.onBoadring),
      });
      await remoteConfig().fetchAndActivate();
      onBoardingConfig = JSON.parse(
        remoteConfig().getValue('OnBoardingConfig').asString(),
      );
    } catch (e: any) {
      onBoardingConfig = defaultConfig.onBoadring;
    }
    if (!isNullOrEmpty(onBoardingConfig)) {
      setOnBoarding(onBoardingConfig);
    }
  }, []);

  useEffect(() => {
    requestOnboardingConfigs();
  }, [requestOnboardingConfigs]);

  function handleSwiperIndexChanged(index: number) {
    if (onBoarding) {
      setIsLastSlide(index === onBoarding?.onboardingConfig.length - 1);
    }
  }

  const handleNextPress = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  const handleSkipPress = () => {
    navigate(RouteName.AuthStack);
  };

  const handleStartLogin = () => {
    navigate(RouteName.AuthStack);
  };

  if (isNullOrEmpty(onBoarding)) {
    return null;
  }

  return (
    <SafeAreaView style={styles.viewContainer}>
      <Swiper
        ref={swiperRef}
        bounces={false}
        showsPagination={true}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        onIndexChanged={handleSwiperIndexChanged}
        paginationStyle={styles.paginationStyle}>
        {onBoarding?.onboardingConfig.map((item, index) => (
          <View key={index} style={styles.slide}>
            <CircleImage source={{uri: item.image}} />
            <View style={styles.viewContent}>
              <Text style={styles.content}>
                {item.content}
                <Text style={styles.contentColor}>{item.contentColor}</Text>
              </Text>
            </View>
            <Text style={styles.commonContent}>
              {onBoarding?.commonContent}
            </Text>
          </View>
        ))}
      </Swiper>
      {!isLastSlide && (
        <View style={styles.buttonContainer}>
          <ButtonCommon
            onPress={handleSkipPress}
            text="Skip"
            backgroundColor={Colors.white}
            textColor={Colors.gray01}
          />
          <ButtonCommon
            backgroundColor={Colors.black01}
            onPress={handleNextPress}
            textColor={Colors.white}
            style={styles.viewNext}
            text="NEXT"
          />
        </View>
      )}
      {isLastSlide && (
        <View style={styles.viewEnd}>
          <ButtonCommon
            backgroundColor={Colors.black01}
            onPress={handleStartLogin}
            textColor={Colors.white}
            style={styles.buttonEnd}
            text="GET STARTED"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDotStyle: {
    backgroundColor: Colors.red01,
    width: 8,
    height: 8,
  },
  dotStyle: {
    backgroundColor: Colors.gray02,
    width: 6,
    height: 6,
  },
  paginationStyle: {
    marginBottom: '80@ms',
  },
  viewContent: {
    marginVertical: 16,
  },
  content: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  contentColor: {
    color: Colors.red01,
  },
  commonContent: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray01,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#FF6347',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  viewEnd: {
    alignSelf: 'center',
    marginBottom: 50,
  },
  buttonEnd: {
    width: '200@ms',
    height: '50@ms',
    paddingHorizontal: '16@ms',
    paddingVertical: '8@ms',
    borderRadius: '8@ms',
  },
  viewNext: {
    width: '140@ms',
    height: '50@ms',
    paddingHorizontal: '16@ms',
    paddingVertical: '8@ms',
    borderRadius: '8@ms',
  },
});

export default Onboading;

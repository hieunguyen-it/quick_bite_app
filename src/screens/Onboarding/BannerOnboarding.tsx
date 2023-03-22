import {CircleImage} from '@components';
import {isNullOrEmpty} from '@utils';
import React, {FC, useMemo} from 'react';
import {View} from 'react-native';

type ItemProps = {
  banner: OnboardingConfig;
};

const BannerOnboarding: FC<ItemProps> = ({banner}) => {
  return useMemo(
    () =>
      isNullOrEmpty(banner) ? null : (
        <View>
          <CircleImage source={{uri: banner.image}} />
        </View>
      ),
    [banner],
  );
};

export default React.memo(BannerOnboarding);

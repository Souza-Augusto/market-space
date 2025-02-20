import {SafeAreaView} from 'react-native-safe-area-context';

import Styled from 'styled-components/native';
import {Octicons, Ionicons} from '@expo/vector-icons';
import {FlatListProps} from 'react-native';
import {css} from 'styled-components/native';

export const Container = Styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const PerfilContainer = Styled(SafeAreaView)`
  flex-direction: row;
  margin-bottom: 32px;
`;
export const ImageContainer = Styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 2px;
  margin-left: 24px;
  border-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};
  background-color: ${({theme}) => theme.COLORS.BLUE_LIGHT};
`;

export const UserImage = Styled.Image`
  flex: 1;
  object-fit: cover;
  border-radius: 25px;
`;
export const WelcomeTitle = Styled.Text`
  ${({theme}) => css`
    flex: 1;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.M}px;
    color: ${theme.COLORS.GRAY_100};
    margin-left: 10px;
  `}
`;

export const Title = Styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
    margin-left: 24px;
    margin-bottom: 12px;
  `}
`;
export const AdsCardButton = Styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  margin: 0px 24px;
  margin-bottom: 32px;
  padding: 12px 16px;
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
`;

export const TagIcon = Styled(Octicons)`
  font-size: 25px;
  color: ${({theme}) => theme.COLORS.BLUE};
`;

export const NumberOfAdsContainer = Styled.View`
  flex: 1;
  margin-left: 17px;
`;
export const CountAds = Styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.L}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const ActiveAdsTitle = Styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const MyAdsTitle = Styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.BLUE};
  `}
`;

export const ArrowRight = Styled(Octicons)`
  font-size: 16px;
  color: ${({theme}) => theme.COLORS.BLUE};
  margin-left: 8px;
`;
export const InputButtonContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const InputButton = Styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = Styled(Ionicons)`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-size: ${({theme}) => theme.FONT_SIZE.L}px;
`;

export const Divider = Styled.View`
  height: 18px;
  width: 1px;
  background-color: ${({theme}) => theme.COLORS.GRAY_400};
  margin: 0px 12px;
`;

export const ListContainer = Styled.View`
  flex: 1;
  align-self: center;
  width: 100%;
  padding: 0px 32px;
`;

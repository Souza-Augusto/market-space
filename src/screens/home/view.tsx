import React, {useCallback, useMemo, useRef} from 'react';
import {useTheme} from 'styled-components';
import {
  ActiveAdsTitle,
  AdsCardButton,
  ArrowRight,
  Container,
  CountAds,
  Divider,
  ImageContainer,
  InputButton,
  InputButtonContainer,
  MyAdsTitle,
  NumberOfAdsContainer,
  PerfilContainer,
  SearchIcon,
  TagIcon,
  Title,
  UserImage,
  WelcomeTitle,
  ListContainer,
} from './styles';
import {Feather} from '@expo/vector-icons';
import {FlatList, Text, View} from 'react-native';
import {Button} from '@components/Button';
import {Input} from '@components/Input';
import {ProductCard} from '@components/product-card';
import {useHomeViewModel} from './view-model';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

import Filter from '@assets/svg/filter.svg';

export function Home() {
  const {FONT_FAMILY, COLORS} = useTheme();
  const {adsData} = useHomeViewModel();
  const snapPoints = useMemo(() => [300], []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <Container>
      <BottomSheetModalProvider>
        <BottomSheetModal
          children={
            <BottomSheetView
              children={
                <View
                  style={{
                    height: 500,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>Bottom Sheet Content</Text>
                </View>
              }
            />
          }
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enableContentPanningGesture={false}
          backgroundStyle={{
            backgroundColor: 'white',
            borderRadius: 32,
          }}
          handleIndicatorStyle={{
            width: '15%',
            backgroundColor: 'black',
          }}
          backdropComponent={(backdropProps) => (
            <BottomSheetBackdrop
              {...backdropProps}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
              pressBehavior={'close'}
            />
          )}
        />
      </BottomSheetModalProvider>

      <PerfilContainer>
        <ImageContainer>
          <UserImage
            source={{
              uri: 'https://imgs.search.brave.com/Xttff8DK_Kac8YrQHn4Na0S09dfoVvAoaQQHhOSIDV4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg',
            }}
          />
        </ImageContainer>
        <WelcomeTitle>
          Boas vindas,{'\n'}
          <Text style={{fontFamily: FONT_FAMILY.BOLD}}>Maria</Text>
        </WelcomeTitle>
        <Button
          onPress={handleOpenBottomSheet}
          title="Criar Anúncio"
          icon={
            <Feather
              name="plus"
              style={{marginRight: 8}}
              color={COLORS.GRAY_700}
              size={20}
            />
          }
        />
      </PerfilContainer>

      <Title>Seus produtos anunciados para a venda</Title>
      <AdsCardButton>
        <TagIcon name="tag" />
        <NumberOfAdsContainer>
          <CountAds>4</CountAds>
          <ActiveAdsTitle>anúncios ativos</ActiveAdsTitle>
        </NumberOfAdsContainer>
        <MyAdsTitle>Meus anúncios</MyAdsTitle>
        <ArrowRight name="arrow-right" />
      </AdsCardButton>

      <Title>Compre produtos variados</Title>
      <Input.Root placeholder="Buscar anúncio">
        <Input.Button
          icon={
            <InputButtonContainer>
              <InputButton>
                <SearchIcon name="search" />
              </InputButton>
              <Divider />
              <InputButton>
                <Filter />
              </InputButton>
            </InputButtonContainer>
          }
        />
      </Input.Root>

      <ListContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={adsData}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => {
            return (
              <ProductCard
                title={item.title}
                price={item.price}
                uri={item.image}
                is_active={item.is_active}
                is_new={item.is_new}
              />
            );
          }}
          numColumns={2}
        />
      </ListContainer>
    </Container>
  );
}

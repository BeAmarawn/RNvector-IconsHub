import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { ScrollView, Text } from 'react-native';
import {
  Container,
  LabelFont,
  ListsContainer,
  FlatListicons,
  HeaderContainer,
  SearchBarr,
} from './styles';

import IconList from '../../components/IconList';

import ShimmerList from '../../components/ShimmerList';

import NameAntDesign from '../NameAntDesign.js';
import NameEntypo from '../NameEntypo.js';
import NameEvilIcons from '../NameEvilIcons.js';
import NameFeather from '../NameFeather.js';
import NameFontAwesome from '../NameFontAwesome.js';
import NameFontisto from '../NameFontisto.js';
import NameFoundation from '../NameFoundation.js';
import NameIonicons from '../NameIonicons.js';
import NameMaterialCommunityIcons from '../NameMaterialCommunityIcons.js';
import NameMaterialIcons from '../NameMaterialIcons.js';
import NameOcticons from '../NameOcticons.js';
import NameSimpleLineIcons from '../NameSimpleLineIcons.js';
import NameZocial from '../NameZocial.js';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredAntDes, setFilteredAntDes] = useState(NameAntDesign);
  const [filteredNameEnty, setFilteredNameEnty] = useState(NameEntypo);
  const [filteredNameEvilI, setFilteredNameEvilI] = useState(NameEvilIcons);
  const [filteredNameFeather, setFilteredNameFeather] = useState(NameFeather);
  const [filteredNameFontAw, setFilteredNameFontAw] = useState(NameFontAwesome);
  const [filteredNameFonti, setFilteredNameFonti] = useState(NameFontisto);
  const [filteredNameFound, setFilteredNameFound] = useState(NameFoundation);
  const [filteredNameIon, setFilteredNameIon] = useState(NameIonicons);
  const [filteredNameMaterialCo, setFilteredNameMaterialCo] = useState(
    NameMaterialCommunityIcons
  );
  const [filteredNameMaterialI, setFilteredNameMaterialI] = useState(
    NameMaterialIcons
  );
  const [filteredNameOct, setFilteredNameOct] = useState(NameOcticons);
  const [filteredNameSimp, setFilteredNameSimp] = useState(NameSimpleLineIcons);
  const [filteredNameZo, setFilteredNameZo] = useState(NameZocial);
  const [antLoad, setAntLoad] = useState(false);
  const [entyLoad, setEntyLoad] = useState(false);
  const [evilLoad, setEvilLoad] = useState(false);
  const [featLoad, setFeatLoad] = useState(false);
  const [fontawLoad, setFontawLoad] = useState(false);
  const [fontiLoad, setFontiLoad] = useState(false);
  const [foundLoad, setFoundLoad] = useState(false);
  const [ionLoad, setIonLoad] = useState(false);
  const [matcoLoad, setMatcoLoad] = useState(false);
  const [maticLoad, setMaticLoad] = useState(false);
  const [octLoad, setOctLoad] = useState(false);
  const [simpLoad, setSimpLoad] = useState(false);
  const [zocLoad, setZocLoad] = useState(false);

  function funFilterAntDes() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameAntDesign.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredAntDes(newIconsSearch);
    setAntLoad(true);
  }
  function funFilterEnty() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameEntypo.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameEnty(newIconsSearch);
    setEntyLoad(true);
  }
  function funFilterEvilIc() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameEvilIcons.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameEvilI(newIconsSearch);
    setEvilLoad(true);
  }
  function funFilterFeath() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameFeather.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameFeather(newIconsSearch);
    setFeatLoad(true);
  }
  function funFilterFontAw() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameFontAwesome.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameFontAw(newIconsSearch);
    setFontawLoad(true);
  }
  function funFilterFonti() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameFontisto.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameFonti(newIconsSearch);
    setFontiLoad(true);
  }
  function funFilterFound() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameFoundation.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameFound(newIconsSearch);
    setFoundLoad(true);
  }
  function funFilterIon() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameIonicons.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameIon(newIconsSearch);
    setIonLoad(true);
  }
  function funFilterMaterialCo() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameMaterialCommunityIcons.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameMaterialCo(newIconsSearch);
    setMatcoLoad(true);
  }
  function funFilterMaterialI() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameMaterialIcons.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameMaterialI(newIconsSearch);
    setMaticLoad(true);
  }
  function funFilterOcti() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameOcticons.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameOct(newIconsSearch);
    setOctLoad(true);
  }
  function funFilterSimpleLi() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameSimpleLineIcons.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameSimp(newIconsSearch);
    setSimpLoad(true);
  }
  function funFilterZocial() {
    const lowerCaseSearch = searchValue.toLowerCase();
    const newIconsSearch = NameZocial.filter((icons) =>
      icons.includes(lowerCaseSearch)
    );

    setFilteredNameZo(newIconsSearch);
    setZocLoad(true);
  }

  function endLoader() {
    if (
      antLoad &&
      entyLoad &&
      evilLoad &&
      featLoad &&
      fontawLoad &&
      fontiLoad &&
      foundLoad &&
      ionLoad &&
      matcoLoad &&
      maticLoad &&
      octLoad &&
      simpLoad &&
      zocLoad
    ) {
      setIsLoading(false);
      setAntLoad(false);
      setEntyLoad(false);
      setEvilLoad(false);
      setFeatLoad(false);
      setFontawLoad(false);
      setFontiLoad(false);
      setFoundLoad(false);
      setIonLoad(false);
      setMatcoLoad(false);
      setMaticLoad(false);
      setOctLoad(false);
      setSimpLoad(false);
      setZocLoad(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    funFilterAntDes();
    funFilterEnty();
    funFilterEvilIc();
    funFilterFeath();
    funFilterFontAw();
    funFilterFonti();
    funFilterFound();
    funFilterIon();
    funFilterMaterialCo();
    funFilterMaterialI();
    funFilterOcti();
    funFilterSimpleLi();
    funFilterZocial();
  }, [searchValue]);

  useEffect(() => {
    endLoader();
  }, [
    antLoad,
    entyLoad,
    evilLoad,
    featLoad,
    fontawLoad,
    fontiLoad,
    foundLoad,
    ionLoad,
    matcoLoad,
    maticLoad,
    octLoad,
    simpLoad,
    zocLoad,
  ]);

  return (
    <Container>
      <HeaderContainer>
        <SearchBarr
          platform="ios"
          containerStyle={{ backgroundColor: '#272627' }}
          inputContainerStyle={{
            borderRadius: 50,
            backgroundColor: '#353338',
          }}
          inputStyle={{ color: '#fff' }}
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Search for Icons!"
          round
        />
      </HeaderContainer>
      {isLoading ? (
        <LottieView
          source={require('../../../assets/animations/loading_loop.json')}
          autoPlay
          loop
        />
      ) : (
        <ScrollView>
          <ListsContainer>
            <LabelFont>AntDesign</LabelFont>

            <FlatListicons
              data={filteredAntDes}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="AntDesign" />
              )}
              horizontal
            />

            <LabelFont>Entypo</LabelFont>

            <FlatListicons
              data={filteredNameEnty}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="Entypo" />
              )}
              horizontal
            />

            <LabelFont>EvilIcons</LabelFont>

            <FlatListicons
              data={filteredNameEvilI}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="EvilIcons" />
              )}
              horizontal
            />

            <LabelFont>Feather</LabelFont>

            <FlatListicons
              data={filteredNameFeather}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="Feather" />
              )}
              horizontal
            />

            <LabelFont>FontAwesome</LabelFont>

            <FlatListicons
              data={filteredNameFontAw}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="FontAwesome" />
              )}
              horizontal
            />

            <LabelFont>Fontisto</LabelFont>

            <FlatListicons
              data={filteredNameFonti}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="Fontisto" />
              )}
              horizontal
            />

            <LabelFont>Foundation</LabelFont>

            <FlatListicons
              data={filteredNameFound}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="Foundation" />
              )}
              horizontal
            />

            <LabelFont>Ionicons</LabelFont>

            <FlatListicons
              data={filteredNameIon}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="Ionicons" />
              )}
              horizontal
            />

            <LabelFont>MaterialCommunityIcons</LabelFont>

            <FlatListicons
              data={filteredNameMaterialCo}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="MaterialCommunityIcons" />
              )}
              horizontal
            />

            <LabelFont>MaterialIcons</LabelFont>

            <FlatListicons
              data={filteredNameMaterialI}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="MaterialIcons" />
              )}
              horizontal
            />

            <LabelFont>Octicons</LabelFont>

            <FlatListicons
              data={filteredNameOct}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="Octicons" />
              )}
              horizontal
            />

            <LabelFont>SimpleLineIcons</LabelFont>

            <FlatListicons
              data={filteredNameSimp}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="SimpleLineIcons" />
              )}
              horizontal
            />

            <LabelFont>Zocial</LabelFont>

            <FlatListicons
              data={filteredNameZo}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item }) => (
                <IconList nameProp={item} font="Zocial" />
              )}
              horizontal
            />
          </ListsContainer>
        </ScrollView>
      )}
    </Container>
  );
};

export default Home;

import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Wrapper from '../../components/Wrapper';
import TopBar from '../../components/TopBar';
import {Light} from '../../utils/colors';
import ItemCard from '../../components/ItemCard';
import {Margin} from '../../utils/dimensions';
import {FontSize} from '../../utils/Text';
import {Catagories} from '../../utils/data';
import Feather from 'react-native-vector-icons/Feather';

const ChooseItems = () => {
  const [searchQuery, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(Catagories)

  const handleSearch = (text) => {
    setSearch(text)

    if(text.trim() === '') {
      setFilteredData(Catagories)
      return
    } 

    const lower = text.toLowerCase()
    const filtered = Catagories.map(catagory => {
      const FilteredItems = catagory.data.filter(item => item.name.toLowerCase().includes(lower))
      return {...catagory, data: FilteredItems}
    }).filter(section => section.data.length > 0)

    setFilteredData(filtered)
  }

  return (
    <Wrapper backgroundColor={Light.background1}>
      <TopBar />

      <View style={styles.inputView}>
        <Feather name={'search'} size={20} />
        <TextInput
          cursorColor={Light.success}
          placeholder="Search"
          placeholderTextColor={'grey'}
          style={styles.input}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <ScrollView contentContainerStyle={{paddingTop: Margin(0.5)}} showsVerticalScrollIndicator={false}>
        {filteredData.map((Catagory, index) => (
          <View key={index}>
            <Text style={styles.catagoryHead}>{Catagory.catagory}</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.ListContainer}
              data={Catagory.data}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <ItemCard
                  key={index}
                  name={item.name}
                  imageLink={item.imageLink}
                  mPrice={item.marketPrice}
                  pPrice={item.printPrice}
                />
              )}
            />
          </View>
        ))}
      </ScrollView>
    </Wrapper>
  );
};

export default ChooseItems;

const styles = StyleSheet.create({
  ListContainer: {
    gap: 15,
    padding: Margin(0.5),
  },
  catagoryHead: {
    paddingLeft: 20,
    fontSize: FontSize.SubHead,
    fontWeight: 500,
    color: Light.textMain,
  },
  inputView: {
    backgroundColor: Light.background2,
    elevation: 2,
    marginHorizontal: Margin(0.5),
    borderRadius: 15,
    paddingHorizontal: 15,
    gap: 5,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: Light.textMain,
    fontSize: FontSize.Small,
    flex: 1,
  },
});

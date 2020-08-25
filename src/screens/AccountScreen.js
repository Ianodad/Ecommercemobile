import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ListDetail from '../component/ListDetail';
import ItemSeparator from '../component/common/ItemSeparator';
import Icon from '../component/Icon';
import colors from '../styleconfig/colors'

import Screen from "../component/Screen"


const menuItems = [
  {
    title: "Cart",
    icon: {
      name: "cart-outline",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "truck-fast-outline",
    icon: {
      name: "cart-outline",
      backgroundColor: colors.medium,
    },

  },
  {
    title: "Profile",
    icon: {
      name: "account-settings",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "Payment",
    icon: {
      name: "credit-card-settings-outline",
      backgroundColor: colors.danger,
    },
  },
  
];

const AccountScreen = () => {
    return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListDetail
          title="User name"
          subTitle="username@gmail.com"
          image={require("../../assets/user.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <ListDetail
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListDetail
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

export default AccountScreen

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

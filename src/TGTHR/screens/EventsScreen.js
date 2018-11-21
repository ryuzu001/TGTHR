import React from 'react';
import { 
    ScrollView, 
    StyleSheet, 
    SectionList, 
    AppRegistry, 
    Text, View, 
    RefreshControl, 
    Header, 
    SectionListItem, 
    Button 
} from 'react-native';
import ActionButton from 'react-native-action-button';
import { sectionListData } from '../data/sectionListData';
import * as firebase from 'firebase';
import TabBarIcon from '../components/TabBarIcon';

export default class EventsScreen extends React.Component {
  static navigationOptions = {
      title: 'Events',
      headerTitleStyle: {
          color: '#ffffff',
      },
      headerStyle: {
          backgroundColor: '#9E5EE8',
      },
    };

    constructor(props) {
        super(props);
        this.state = { 
            refreshing: false,
            data: [],
            //isFetching: false,
        };
    }

  fetchData = async () => {

  };
  onRefresh() {
      this.setState({ refreshing: true });
      this.fetchData().then(() => {
          this.setState({ refreshing: false })
      });
  }
  /*handleRefresh = () => {
      this.setState(
          {
              refreshing: true,
          }
      );
  };*/
  renderSeparator = () => {
      return (
          <View
              style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "#CED0CE",
                  /*marginLeft: "14%"*/
              }}
          />
      );
  };
//   onCreateEventPress = () => {
//       this.props.navigation.navigate("createEvent");
//   }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
            renderSectionHeader={({ section }) => 
                    <View style={{
                        flex: 1,
                        backgroundColor: 'rgba(247, 247, 247, 1.0)',
                    }}>
                        <Text style={{
                            marginVertical: 10,
                            marginHorizontal: 10,
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>{section.title}
                        </Text>
                    </View>
            }
            renderItem={({ item }) => 
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: '#fff'
                    }}>
                        <Text style={{
                            marginTop: 10,
                            marginHorizontal: 10,
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#a4adbc' //gray
                        }}>{item.posterName}
                        </Text>
                        <Text style={{
                            marginVertical: 5,
                            marginHorizontal: 10,
                            fontSize: 17,
                            fontWeight: 'bold',
                        }}>{item.eventName}
                        </Text>
                        <Text style={{
                            marginBottom: 10,
                            marginHorizontal: 10,
                            fontSize: 15,
                        }}>{item.description}
                        </Text>
                    </View>
            }
            sections={sectionListData}
            keyExtractor={(item, index) => item.eventName}
            ItemSeparatorComponent={this.renderSeparator}
            refreshing={this.state.refreshing}
            onRefresh={() => this.onRefresh}
        />
        <ActionButton buttonColor="#9E5EE8">
          <ActionButton.Item buttonColor='#9E5EE8' title="New Event" onPress={() => this.props.navigation.navigate('createEvent')}>
            <TabBarIcon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#9E5EE8' title="Test Screen" onPress={() => this.props.navigation.navigate('viewEvent')}>
            <TabBarIcon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          </ActionButton>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
    },
  divider: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
  },
  SectionHeader: {

  }
});


              <Navigator
        sceneStyle={{paddingTop: 64}} 
        initialRoute={{screen: 'Login', index: 0}}
        renderScene={(route, nav) => {return this.renderScene(route, nav)}}
        navigationBar={
          <Navigator.NavigationBar
            style = {styles.bar}
            navigationStyles = {Navigator.NavigationBar.StylesIOS}
            routeMapper={{
              LeftButton: (route, nav, index, navState) =>
                { if (route.screen === 'Login' || route.screen === 'Home') {
                  return null;
                } else {
                  return (
                    <TouchableHighlight onPress={() => nav.pop()}>
                      <Icon name = "arrow-left" size = {30} color = '#FF5722' style={{marginLeft:10}}/>
                    </TouchableHighlight>
                  );
                } 
              },
              RightButton: () => {return null;},
              Title: (route, nav, index, navState) => 
                { return (
                  <Text style={styles.title}>{route.screen}</Text>
                  );
                },
            }}
          />
        }
      />
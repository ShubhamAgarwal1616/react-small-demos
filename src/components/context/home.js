import React from 'react'
import Toolbar from './toolbar'
import {ThemeContext, themes, NestedThemeContext} from './theme-context';
import ThemedButton from './button';
import ThemeTogglerButton from "./toogleTheme";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        example of change theme from parent component
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}/>
          <div>
            <ThemedButton>
              Test
            </ThemedButton>
          </div>
        </ThemeContext.Provider>

        example of change theme from child component
        <NestedThemeContext.Provider value={this.state}>
          <Content />
        </NestedThemeContext.Provider>
      </div>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

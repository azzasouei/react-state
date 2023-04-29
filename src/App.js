import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Azza Souei',
        bio: 'Web develper searching to extend new professional experience ',
        imgSrc: 'profile-image.jpg',
        profession: 'Web developer',
      },
      shows: false,
      timeSinceMount: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>

        {shows && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt="Profile" />
            <p>Profession: {profession}</p>
          </div>
        )}

        <p>Time Since Mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;


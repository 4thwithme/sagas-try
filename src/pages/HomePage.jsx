import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";

import { getAPOD } from "../redux/ducks/apod";

const HomePage = ({ apod, getAPOD }) => {
  useEffect(() => {
    getAPOD();
  }, []);

  if (!apod) {
    return <span>Loading....</span>;
  }

  return (
    <div className='home'>
      <Card fluid>
        <Image src={apod.hdurl || apod.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{apod.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{apod.date}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>{apod.explanation}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  apod: state.apod
});

const mapDispatchToProps = {
  getAPOD
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

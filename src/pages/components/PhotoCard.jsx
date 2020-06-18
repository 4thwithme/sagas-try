import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const PhotoCard = ({ photo }) => {
  return (
    <Card>
      <Image src={photo.img_src} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{photo.camera.full_name}</Card.Header>
        <Card.Meta>
          <span className='date'>{photo.earth_date}</span>
        </Card.Meta>
        <Card.Description>{photo.rover.name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          sol {photo.sol}
        </a>
      </Card.Content>
    </Card>
  );
};

export default PhotoCard;

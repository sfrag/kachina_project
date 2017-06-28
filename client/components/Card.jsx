import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='client/assets/images/matthew.png' />
    <Card.Content>
      <Card.Header>
        Japón
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Los mejores blogs sobre Japón que te ayudaran a preparar tu viaje.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard
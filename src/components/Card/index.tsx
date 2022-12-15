import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer,
        Content,
        HasInfo,
        ImageBackground,
        PostInfo,
        UserInfo,
        UserPicture } from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://d1fdloi71mui9q.cloudfront.net/yL9O0oLsQoqoRXR5tUEV_ixjoRCv2RNqoYutL'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/93887766?s=400&u=cfd31b0de47b3ec8b550974144d2c3d312941399&v=4'/>
                <div>
                    <h4>Myllena Tayná</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp dio do Global avenade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
export { Card }
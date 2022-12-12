
import { Link } from 'react-router-dom';

import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Header  } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container, TextContent, Title, TitleHighLight } from './styles';

const Feed = () => {
    return (<>
        <Header />
        <Container>
           <Card />
           <UserInfo percentual={35} nome='Myllena Tayná' image='https://avatars.githubusercontent.com/u/93887766?s=400&u=cfd31b0de47b3ec8b550974144d2c3d312941399&v=4'/>
        </Container>
    </>)
}
export { Feed }

import { Header  } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighLight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                <UserInfo percentual={35} nome='Myllena Tayná' image='https://avatars.githubusercontent.com/u/93887766?s=400&u=cfd31b0de47b3ec8b550974144d2c3d312941399&v=4'/>
                <UserInfo percentual={14} nome='Myllena Tayná' image='https://avatars.githubusercontent.com/u/93887766?s=400&u=cfd31b0de47b3ec8b550974144d2c3d312941399&v=4'/>
                <UserInfo percentual={89} nome='Myllena Tayná' image='https://avatars.githubusercontent.com/u/93887766?s=400&u=cfd31b0de47b3ec8b550974144d2c3d312941399&v=4'/>
                <UserInfo percentual={16} nome='Myllena Tayná' image='https://avatars.githubusercontent.com/u/93887766?s=400&u=cfd31b0de47b3ec8b550974144d2c3d312941399&v=4'/>
                <UserInfo percentual={50} nome='Myllena Tayná' image='https://avatars.githubusercontent.com/u/93887766?s=400&u=cfd31b0de47b3ec8b550974144d2c3d312941399&v=4'/>
            </Column>
        </Container>
    </>)
}
export { Feed }
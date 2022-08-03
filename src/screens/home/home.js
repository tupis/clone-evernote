import { Column, Container, Section, Title } from 'rbx';
import presentationImage from '../../assets/images/presentation.png'
import Header from '../../components/header/header';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <>
            <Header />
            <Section size="medium" className="home">
                <Container>
                    <Column.Group>
                        <Column size={5}>
                            <Title size={2} spaced className="has-text-white">
                                Create Notes easily and access when you wants on the cloud
                            </Title>

                            <Title size={5} spaced className="has-text-light" subtitle>
                                Create Notes easily and access when you wants on the cloud
                            </Title>
                            < Link to='/register' className="button is-outlined is-white is-large">
                                <strong>Register for free Now</strong>
                            </Link>
                        </Column>
                        <Column size={6} offset={1}>
                            <img src={presentationImage} />
                        </Column>

                    </Column.Group>
                </Container>
            </Section>
        </>
    );
}
 
export default HomeScreen;
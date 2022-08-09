import { Column, Section, Title, Container, Card, Button } from "rbx";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/header_logged/header_logged";
import UsersEditForm from "../../../components/users/users_form";
import PasswordEditor from "../../../components/users/password_forms.js/password_form";
import DeleteButton from "../../../components/users/delete_button/delete_button";

const UsersEditScreen = () => {
    
    return (
        <>
            <HeaderLogged/>
            <Section size="medium" className="users">
                <Container>
                        <Column.Group centered className="users-edit">
                            <Column size={4}>
                                <Title size={5} className="has-text-grey has-text-left">
                                    Informações Pessoais
                                </Title>
                                <Card>
                                    <Card.Content>
                                        <UsersEditForm/>
                                    </Card.Content>
                                </Card>
                            </Column>
                        </Column.Group>

                        <Column.Group centered className="users-edit">
                            <Column size={4}>
                                <Title size={5} className="has-text-grey has-text-left">
                                    Password
                                </Title>
                                <Card>
                                    <Card.Content>
                                        <PasswordEditor />
                                    </Card.Content>
                                </Card>
                            </Column>
                        </Column.Group>
                        <Column.Group centered>
                            <Column size={4} className="has-text-right">
                                <DeleteButton />
                            </Column>
                        </Column.Group>
                </Container> 
            </Section>
        </>
    );
}
 
export default UsersEditScreen;
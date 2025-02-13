import axios from "axios";
import { Button } from "baseui/button";
import { HeadingXXLarge } from "baseui/typography";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { Container } from "../commons";

function Home() {
    const singOut = useSignOut();
    const navigate = useNavigate();

    const logout = () => {
        singOut();
        navigate("/login");
    };

    const getPayment = async () => {
        const response = await axios
            .get("http://localhost:5000/api/v1/payment", {
                withCredentials: true,
            })
            .catch((err) => {
                console.log("Error", err);
            });
        console.log("Response: ", response);
    };

    const getAdmin = async () => {
        const response = await axios
            .get("http://localhost:5000/api/v1/admin", {
                withCredentials: true,
            })
            .catch((err) => {
                console.log("Error", err);
            });
        console.log("Response:", response);
    };

    return (
        <Container>
            <HeadingXXLarge color="secondary500">
                Welcome Home Bud!
            </HeadingXXLarge>
            <Button kind="secondary" onClick={getPayment}>
                Get Payment
            </Button>
            <Button kind="secondary" onClick={getAdmin}>
                Admin only
            </Button>
            <Button kind="secondary" onClick={logout}>
                Logout
            </Button>
        </Container>
    );
}

export { Home };

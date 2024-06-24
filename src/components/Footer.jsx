import { FooterContainer } from "../styles/Footer.styled"
import { ParaText } from "../styles/Global.styled"

const Footer = () => {
    return (
        <FooterContainer>
            <ParaText size="1.1rem">Copyright &copy; <ParaText color="#009688">Gatotkaca A Afternoon</ParaText></ParaText>
        </FooterContainer>
    )
}

export default Footer
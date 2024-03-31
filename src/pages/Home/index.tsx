import Barbearia2 from '../../assets/barbearia2.jpg';
import Barbearia3 from '../../assets/barbearia3.jpg';
import Barbearia4 from '../../assets/barbearia4.jpg';
import Barbearia5 from '../../assets/barbearia5.jpg';
import Barbearia6 from '../../assets/barbearia6.jpg';
import KingsLogo from '../../assets/logo-barber-ofc.png';
import { AboutDialog } from '../../components/about-dialog';
import { Card } from '../../components/card';
import { ContactDialog } from '../../components/contactDialog';
import { FacebookIcon } from '../../components/facebookIcon';
import { InstagramIcon } from '../../components/instagramIcon';
import { PrivacyDialog } from '../../components/privacy-dialog';
import { ScheduleDialog } from '../../components/schedule-dialog';
import { WhatsappIcon } from '../../components/whatsappIcon';
import {
  Header,
  BarberImgSection,
  ServiceSection,
  LocationSection,
  BarberPlaceSection,
  Footer,
  SocialContainer,
} from './styled';

export function Home() {
  return (
    <>
      <Header>
        <img style={{ width: 150 }} src={KingsLogo} alt="logo kings" />
        <div>
          <ScheduleDialog />
          <AboutDialog />
          <ContactDialog />
        </div>
      </Header>

      <BarberImgSection></BarberImgSection>

      <ServiceSection>
        <h1>Serviços</h1>

        <div>
          <Card
            title="Corte de Cabelo"
            subtitle="Um bom corte de cabelo não é apenas uma mudança de aparência, é uma expressão de estilo e personalidade. Na nossa barbearia, entendemos a importância de um corte de qualidade, feito com precisão e paixão. Nossos habilidosos barbeiros não apenas dominam as técnicas tradicionais, mas também estão sempre atualizados com as últimas tendências e estilos. Do clássico ao contemporâneo, estamos aqui para transformar seu visual e elevar sua confiança. Seja um corte afiado e estruturado ou um estilo mais descontraído e moderno, cada cliente recebe atenção individualizada para garantir que saia daqui não apenas com um novo visual, mas com uma experiência excepcional. Agende seu próximo corte conosco e descubra o poder de um bom corte de cabelo."
            price={30}
          />

          <Card
            title="Corte de Barba"
            subtitle="Bem-vindo à nossa barbearia, onde a arte do corte de barba é elevada a outro nível. Nossos especialistas em barbearia estão prontos para transformar sua aparência, oferecendo cortes de barba personalizados e impecáveis. Do clássico ao contemporâneo, dominamos uma variedade de estilos para atender às suas preferências. Com técnicas precisas e produtos de alta qualidade, garantimos uma experiência de barbear excepcional. Agende hoje mesmo e descubra a diferença que um corte de barba feito por profissionais pode fazer."
            price={35}
          />
        </div>
      </ServiceSection>

      <LocationSection>
        <h1>Localização</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63702.0182924051!2d-38.61002595136712!3d-3.7279055999999953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74d25bcbc36b9%3A0x4637ccb74dc1e639!2sTHE%20BARBER%20KING!5e0!3m2!1spt-BR!2sbr!4v1711830977757!5m2!1spt-BR!2sbr"
          width="900"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </LocationSection>

      <BarberPlaceSection>
        <h1>Galeria de fotos</h1>

        <div>
          <img src={Barbearia2} alt="foto da barbearia" />
          <img src={Barbearia3} alt="foto da barbearia" />
          <img src={Barbearia4} alt="foto da barbearia" />
          <img src={Barbearia5} alt="foto da barbearia" />
          <img src={Barbearia6} alt="foto da barbearia" />
        </div>
      </BarberPlaceSection>

      <Footer>
        <div>
          <h2>Contato</h2>
          <div>
            <span>Rua Texeira do Amaral 323</span>
            <span>+55 (85)93949-2393</span>
            <span>caiomiranda.contato1@gmail.com</span>
          </div>
        </div>

        <div>
          <h2>Redes Sociais</h2>
          <SocialContainer>
            <a href="#">
              {' '}
              <WhatsappIcon />
            </a>
            <a href="#">
              {' '}
              <FacebookIcon />
            </a>
            <a href="#">
              {' '}
              <InstagramIcon />
            </a>
          </SocialContainer>
        </div>

        <div>
          <h2>Política de Privacidade</h2>
          <PrivacyDialog />
        </div>

        <div>
          <h2>Horários de Funcionamento</h2>
          <div>
            <span>Segunda a Sexta: 9h às 18h</span>
            <span>Sábado: 9h às 17h</span>
            <span>Domingo: Fechado</span>
          </div>
        </div>
      </Footer>
    </>
  );
}

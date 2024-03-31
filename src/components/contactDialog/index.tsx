import { useState } from 'react';

import { Button } from '../button';
import { Dialog } from '../dialog';
import { FacebookIcon } from '../facebookIcon';
import { InstagramIcon } from '../instagramIcon';
import { WhatsappIcon } from '../whatsappIcon';
import { Container, SocialContainer } from './styles';

export function ContactDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nosso Contato</Button>}
    >
      <Container>
        <h2>Nossas Redes</h2>
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
      </Container>
    </Dialog>
  );
}

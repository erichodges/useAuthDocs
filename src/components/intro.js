/** @jsx jsx */
import { IoIosLock } from "react-icons/io";
import { Box, Button, Container, jsx } from 'theme-ui';

const Intro = (props) => {
  

  return (
    <Container sx={{variant: 'layout.intro'}}>
      <Box sx={{ variant: 'layout.container', marginTop: '-11rem'}}>
        <Box sx={{whiteSpace: 'nowrap'}}>
          <IoIosLock sx={{ size: 50, fill: 'primary', display: 'inline-block', marginBottom: '-5px'}}/>
          <h1 sx={{
            variant: 'text.logo',
            display: 'inline-block',
            fontSize: '3rem',
            fontWeight: 'bold',
            letterSpacing: '-5px',
            fontFamily: 'Asap, sans-serif',
            padding: 0,
            margin: 0,
            LineHeight: '50px'
          }}>
            useAuth
          </h1>
        </Box>
        <h2 sx={{ variant: 'layout.h2'}}>
          React App Authentication
        </h2>
        <span sx={{ variant: 'layout.code' }}>
          yarn add react-use-auth
        </span>
        <br />
        <span sx={{ variant: 'layout.code' }}>
          npm i react-use-auth
        </span>
        <br />
        <Button sx={{ variant: 'layout.button'}}>
          Get Started
        </Button>
        
      </Box>
    </Container>
  )
}

export default Intro
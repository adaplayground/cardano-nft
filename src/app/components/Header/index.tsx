/**
 *
 * Header
 *
 */
import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  ToggleButton,
} from 'react-bootstrap';
import { LABELS } from 'lang/labels';
import { Icon, InlineIcon } from '@iconify/react';
import { NavLink, useHistory } from 'react-router-dom';
import { themeNames, themes } from 'styles/themes';
import useTheme from 'contexts/themeContext';
import { appTheme } from 'styles/appTheme';
import { Helmet } from 'react-helmet';



export function Header() {
  let history = useHistory();


  const { themeName, setThemeName } = useTheme();


  const onChangeTheme = e => {
    if (e.target.value !== 'themes') {
      setThemeName(e.target.value);
    } else {
      setThemeName(themeName);
    }
  };

  const [appThemeStyles, setAppThemeStyles] = React.useState(
    appTheme(themes[themeName]),
  );
  React.useEffect(() => {
    setAppThemeStyles(appTheme(themes[themeName]));
  }, [themeName]);

  // @ts-ignore
  return (
    <header className={'header navbar-sticky'}>
      <Helmet>
        <style>{appThemeStyles}</style>
      </Helmet>
      <Navbar expand="lg" className={`border-0 shadow-0 px-lg-5 `}>
        <Container fluid={true} className={'mx-3  d-flex'}>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler-right text-hover-primary"
            aria-label="Toggle navigation"
          >
            <Icon icon="mdi:menu" className="navbar-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={'me-auto'}>
              <NavLink to="/home" className={'nav-link'}>
                <InlineIcon
                  icon={'mdi-home'}
                  className={'text-dark'}
                  fontSize={24}
                />
              </NavLink>


              <NavLink to="/contact" className={'nav-link'}>
                Contact
              </NavLink>

            </Nav>

            <div style={{ flex: 1 }} />
            <div>
              {/*<ButtonGroup className={'m-3'}>*/}
              {/*  {solanaClusters.map((radio, idx) => (*/}
              {/*    <ToggleButton*/}
              {/*      key={idx}*/}
              {/*      id={`radio-${idx}`}*/}
              {/*      type="radio"*/}
              {/*      size={'sm'}*/}
              {/*      variant={idx % 2 ? 'outline-success' : 'outline-info'}*/}
              {/*      name="radio"*/}
              {/*      disabled={connected}*/}
              {/*      value={radio.value}*/}
              {/*      checked={radioValue === radio.value}*/}
              {/*      onChange={changeSolanaCluster}*/}
              {/*    >*/}
              {/*      {radio.name}*/}
              {/*    </ToggleButton>*/}
              {/*  ))}*/}
              {/*</ButtonGroup>*/}
            </div>
            <Button
              variant="outline-info"
              className={'border-0'}
              size={'sm'}
              onClick={() => history.push('/wallet')}
            >
              <div className={'text-center d-flex flex-row align-items-center'}>
                <Icon
                  className="navbar-icon text-primary text-sm"
                  icon="mdi:wallet"
                  height={24}
                />
                <div>{LABELS.WALLET}</div>
              </div>
            </Button>
            {/*<div className={'ml-2 d-flex '}>*/}
            {/*  <WalletIcon wallet={wallet} />*/}
            {/*  <div className={'text-danger'} title={'Click to disconnect'}>*/}
            {/*    {wallet ? (*/}
            {/*      <InlineIcon*/}
            {/*        icon={'mdi:close-circle'}*/}
            {/*        onClick={disconnect}*/}
            {/*        style={{ cursor: 'pointer' }}*/}
            {/*      />*/}
            {/*    ) : null}*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div style={{ width: '150px' }}>*/}
            {/*  <Form.Select*/}
            {/*    aria-label="Choose theme"*/}
            {/*    onChange={onChangeTheme}*/}
            {/*    defaultValue={themeName}*/}
            {/*  >*/}
            {/*    <option value="themes">Themes</option>*/}
            {/*    <option value="default">Default</option>*/}
            {/*    {themeNames.map(r => (*/}
            {/*      <option key={r} value={r.toLowerCase()}>*/}
            {/*        {r}*/}
            {/*      </option>*/}
            {/*    ))}*/}
            {/*  </Form.Select>*/}
            {/*</div>*/}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
